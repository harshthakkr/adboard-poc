import { useState } from "react";
import { ChatContent } from "./ChatContent";
import { ChatHeader } from "./ChatHeader";
import { VideoCall } from "./VideoCall";
import { GroupVideoCall } from "./GroupVideoCall";

export const Chat = () => {
  const [isVideoCall, setIsVideoCall] = useState(false);
  return (
    <div className="w-full h-[calc(100vh-120px)] rounded-t-[20px] bg-white relative flex flex-col">
      <ChatHeader setIsVideoCall={setIsVideoCall} />
      {isVideoCall ? (
        <GroupVideoCall setIsVideoCall={setIsVideoCall} />
      ) : (
        <ChatContent />
      )}
    </div>
  );
};
