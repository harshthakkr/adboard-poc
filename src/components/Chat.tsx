import { ChatContent } from "./ChatContent";
import { ChatHeader } from "./ChatHeader";

export const Chat = () => {
  return (
    <div className="w-full h-[calc(100vh-120px)] rounded-t-[20px] bg-white relative flex flex-col">
      <ChatHeader />
      <ChatContent />
    </div>
  );
};
