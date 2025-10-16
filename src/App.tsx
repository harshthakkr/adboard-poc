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
  const [showChatList, setShowChatList] = useState(true); // For mobile view switching
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
    setShowChatList(false);
    return newGroupId;
  };

  const handleChatSelect = (chatId: number) => {
    setActiveChatId(chatId);
    setShowChatList(false);
  };

  const handleBackToChatList = () => {
    setShowChatList(true);
  };

  return (
    <div className="min-h-screen bg-bg-app">
      <Navbar setIsTranscriptionOn={setIsTranscriptionOn} />
      <div className="flex flex-col md:flex-row gap-3 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
        {/* Mobile: Show either ChatsList or Chat based on showChatList state */}
        {/* Desktop: Show both */}
        <div className={`${showChatList ? "block" : "hidden"} md:block`}>
          <ChatsList
            chats={chats}
            activeChatId={activeChatId}
            setActiveChatId={handleChatSelect}
            setCurrentView={setCurrentView}
          />
        </div>
        <div
          className={`${!showChatList ? "block" : "hidden"} md:block flex-1`}
        >
          <Chat
            activeChat={activeChat}
            currentView={currentView}
            setCurrentView={setCurrentView}
            isTranscriptionOn={isTranscriptionOn}
            setIsTranscriptionOn={setIsTranscriptionOn}
            onCreateGroup={handleCreateGroup}
            onBackToChatList={handleBackToChatList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
