import { useState } from "react";
import "./App.css";
import { Chat } from "./components/Chat";
import { ChatsList } from "./components/ChatsList";
import { Navbar } from "./components/Navbar";
import allDoctors from "./data/doctor.json";
import { CurrentView, type CurrentViewType } from "./types/CurrentView";
import type { Doctor } from "./types/DoctorType";

function App() {
  const [chats, setChats] = useState<Doctor[]>(allDoctors);
  const [activeChatId, setActiveChatId] = useState<number>(allDoctors[0].id);
  const [currentView, setCurrentView] = useState<CurrentViewType>(
    CurrentView.CHAT
  );
  const [isTranscriptionOn, setIsTranscriptionOn] = useState(false);
  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const handleCreateGroup = (
    selectedPeople: string[],
    firstMessage: string
  ): number => {
    const newGroupId = Math.max(...chats.map((c) => c.id)) + 1;
    const newGroup: Doctor = {
      id: newGroupId,
      name: selectedPeople,
      occupation: "Group Chat",
      message: firstMessage,
      patientCases: [],
      publications: [],
      socialMedia: [],
      isActive: false,
    };

    setChats([newGroup, ...chats]);
    setActiveChatId(newGroupId);
    setCurrentView(CurrentView.CHAT);
    return newGroupId;
  };

  return (
    <div className="min-h-screen bg-[#F9FAFF]">
      <Navbar setIsTranscriptionOn={setIsTranscriptionOn} />
      <div className="flex gap-3 px-8 py-4">
        <ChatsList
          chats={chats}
          activeChatId={activeChatId}
          setActiveChatId={setActiveChatId}
          setCurrentView={setCurrentView}
        />
        <Chat
          activeChat={activeChat}
          currentView={currentView}
          setCurrentView={setCurrentView}
          isTranscriptionOn={isTranscriptionOn}
          setIsTranscriptionOn={setIsTranscriptionOn}
          onCreateGroup={handleCreateGroup}
        />
      </div>
    </div>
  );
}

export default App;
