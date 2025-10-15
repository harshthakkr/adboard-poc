import { ChatContent } from "./ChatContent";
import { ChatHeader } from "./ChatHeader";
import { VideoCall } from "./VideoCall";
import { GroupVideoCall } from "./GroupVideoCall";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { Transcription } from "./Transcription";

interface ChatProps {
  activeChat?: {
    id: number;
    name: string[];
    message: string;
    isActive: boolean;
  };
  currentView: CurrentViewType;
  setCurrentView: (view: CurrentViewType) => void;
  isTranscriptionOn: boolean;
  setIsTranscriptionOn: (isOn: boolean) => void;
}

export const Chat = ({
  activeChat,
  setCurrentView,
  currentView,
  isTranscriptionOn,
  setIsTranscriptionOn,
}: ChatProps) => {
  const handleViewChange = (view: CurrentViewType) => {
    setCurrentView(view);
  };

  return (
    <div className="w-full h-[calc(100vh-120px)] rounded-t-[20px] bg-white relative flex flex-col">
      <ChatHeader
        currentView={currentView}
        setCurrentView={handleViewChange}
        activeChat={activeChat}
      />
      <div className="relative flex-1 overflow-hidden">
        {currentView === CurrentView.GROUP_VIDEO_CALL ? (
          <GroupVideoCall setCurrentView={handleViewChange} />
        ) : currentView === CurrentView.VIDEO_CALL ? (
          <VideoCall setCurrentView={handleViewChange} />
        ) : (
          <ChatContent currentView={currentView} activeChat={activeChat} />
        )}
        {isTranscriptionOn && (
          <Transcription setIsTranscriptionOn={setIsTranscriptionOn} />
        )}
      </div>
    </div>
  );
};
