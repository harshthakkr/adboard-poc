import { useState } from "react";
import "./App.css";
import { Chat } from "./components/Chat";
import { ChatsList } from "./components/ChatsList";
import { Navbar } from "./components/Navbar";
import allDoctors from "./data/doctor.json";
import { CurrentView, type CurrentViewType } from "./types/CurrentView";

function App() {
  const [activeChatId, setActiveChatId] = useState<number>(allDoctors[0].id);
  const [currentView, setCurrentView] = useState<CurrentViewType>(
    CurrentView.CHAT
  );
  const [isTranscriptionOn, setIsTranscriptionOn] = useState(false);
  const activeChat = allDoctors.find((chat) => chat.id === activeChatId);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setIsTranscriptionOn={setIsTranscriptionOn} />
      <div className="flex gap-3 px-8 py-4">
        <ChatsList
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
        />
      </div>
    </div>
  );
}

export default App;
