import { ChatContent } from "./ChatContent";
import { ChatHeader } from "./ChatHeader";
import { VideoCall } from "./VideoCall";
import { GroupVideoCall } from "./GroupVideoCall";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { Transcription } from "./Transcription";
import type { Doctor } from "../types/DoctorType";
import { useState } from "react";
import { Profile } from "./Profile";

interface ChatProps {
  activeChat?: Doctor;
  currentView: CurrentViewType;
  setCurrentView: (view: CurrentViewType) => void;
  isTranscriptionOn: boolean;
  setIsTranscriptionOn: (isOn: boolean) => void;
  onCreateGroup: (selectedPeople: string[], firstMessage: string) => number;
}

export const Chat = ({
  activeChat,
  setCurrentView,
  currentView,
  isTranscriptionOn,
  setIsTranscriptionOn,
  onCreateGroup,
}: ChatProps) => {
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileDoctor, setProfileDoctor] = useState<Doctor | undefined>(
    undefined
  );

  const handleViewChange = (view: CurrentViewType) => {
    setCurrentView(view);
  };

  const handleProfileClick = (doctor: Doctor) => {
    setProfileDoctor(doctor);
    setIsProfileOpen(true);
  };

  return (
    <div className="w-full h-[calc(100vh-120px)] rounded-t-[20px] bg-white relative flex flex-col">
      <ChatHeader
        currentView={currentView}
        setCurrentView={handleViewChange}
        activeChat={activeChat}
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
        onProfileClick={handleProfileClick}
      />

      {isProfileOpen && profileDoctor && (
        <Profile setIsProfileOpen={setIsProfileOpen} doctor={profileDoctor} />
      )}

      <div className="relative flex-1 overflow-hidden">
        {currentView === CurrentView.GROUP_VIDEO_CALL ? (
          <GroupVideoCall setCurrentView={handleViewChange} />
        ) : currentView === CurrentView.VIDEO_CALL ? (
          <VideoCall setCurrentView={handleViewChange} />
        ) : (
          <ChatContent
            currentView={currentView}
            activeChat={activeChat}
            onCreateGroup={onCreateGroup}
            selectedPeople={selectedPeople}
            setSelectedPeople={setSelectedPeople}
          />
        )}
        {isTranscriptionOn && (
          <Transcription setIsTranscriptionOn={setIsTranscriptionOn} />
        )}
      </div>
    </div>
  );
};
