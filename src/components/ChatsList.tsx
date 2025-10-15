import { ChatItem } from "./ChatItem";
import notePencilLogo from "/NotePencil.svg";

export const ChatsList = () => {
  return (
    <div className="w-[320px] h-[calc(100vh-120px)] flex flex-col">
      <div className="flex items-center justify-between h-[72px] py-1 flex-shrink-0">
        <h2 className="font-medium text-lg">Chats</h2>
        <img src={notePencilLogo} alt="" />
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1">
        <ChatItem
          name="Dr. Emily Chen"
          message="What roles do regulatory affairs specialists play in drug approval?"
          isActive
        />
        <ChatItem
          name="Sarah Patel"
          message="How do clinical research associates contribute to trials?"
        />
        <ChatItem
          name="Rajiv Kumar"
          message="What is the importance of pharmacovigilance specialists?"
        />
        <ChatItem
          name="Linda Garcia"
          message="How do medical science liaisons bridge the gap between research and clinical practice?"
        />
        <ChatItem
          name="Dr. Sarah Khan"
          message="What are the latest advancements in drug development?"
        />
        <ChatItem
          name="Emily Thompson"
          message="How do regulatory agencies impact pharmaceutical research?"
        />
        <ChatItem
          name="David Li"
          message="What role do clinical trials play in the approval process?"
        />
        <ChatItem
          name="Emma Chen"
          message="How are patients selected for clinical trials?"
        />
        <ChatItem
          name="Emma Chen"
          message="How are patients selected for clinical trials?"
        />
      </div>
    </div>
  );
};
