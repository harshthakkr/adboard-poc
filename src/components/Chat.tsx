import { ChatContent } from "./ChatContent";
import { ChatHeader } from "./ChatHeader";
import { VideoCall } from "./VideoCall";
import { GroupVideoCall } from "./GroupVideoCall";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";

interface ChatProps {
  activeChat?: {
    id: number;
    name: string[];
    message: string;
    isActive: boolean;
  };
  currentView: CurrentViewType;
  setCurrentView: (view: CurrentViewType) => void;
}

export const Chat = ({
  activeChat,
  setCurrentView,
  currentView,
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
      {currentView === CurrentView.GROUP_VIDEO_CALL ? (
        <GroupVideoCall setCurrentView={handleViewChange} />
      ) : currentView === CurrentView.VIDEO_CALL ? (
        <VideoCall setCurrentView={handleViewChange} />
      ) : (
        <ChatContent activeChat={activeChat} />
      )}
    </div>
  );
};
