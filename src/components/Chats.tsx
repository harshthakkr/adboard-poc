import { Chat } from "./Chat";
import notePencilLogo from "/NotePencil.svg";

export const Chats = () => {
  return (
    <div className="w-[320px]">
      <div className="flex items-center justify-between h-[72px] py-1">
        <h2 className="font-medium text-lg">Chats</h2>
        <img src={notePencilLogo} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <Chat
          name="Dr. Emily Chen"
          message="What roles do regulatory affairs specialists play in drug approval?"
          isActive
        />
        <Chat
          name="Sarah Patel"
          message="How do clinical research associates contribute to trials?"
        />
        <Chat
          name="Rajiv Kumar"
          message="What is the importance of pharmacovigilance specialists?"
        />
        <Chat
          name="Linda Garcia"
          message="How do medical science liaisons bridge the gap between research and clinical practice?"
        />
        <Chat
          name="Dr. Sarah Khan"
          message="What are the latest advancements in drug development?"
        />
        <Chat
          name="Emily Thompson"
          message="How do regulatory agencies impact pharmaceutical research?"
        />
        <Chat
          name="David Li"
          message="What role do clinical trials play in the approval process?"
        />
        <Chat
          name="Emma Chen"
          message="How are patients selected for clinical trials?"
        />
        <Chat
          name="Emma Chen"
          message="How are patients selected for clinical trials?"
        />
      </div>
    </div>
  );
};
