import { ChatItem } from "./ChatItem";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import type { Doctor } from "../types/DoctorType";
import { ICONS } from "../constants/icons";

export const ChatsList = ({
  chats,
  activeChatId,
  setActiveChatId,
  setCurrentView,
}: {
  chats: Doctor[];
  activeChatId: number;
  setActiveChatId: (id: number) => void;
  setCurrentView: (view: CurrentViewType) => void;
}) => {
  return (
    <div className="w-[320px] h-[calc(100vh-120px)] flex flex-col">
      <div className="flex items-center justify-between h-[72px] py-1 flex-shrink-0">
        <h2 className="font-medium text-lg">Chats</h2>
        <img
          src={ICONS.NOTE_PENCIL}
          alt="New chat"
          onClick={() => setCurrentView(CurrentView.NEW_CHAT)}
          className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
        />
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name.length === 1 ? chat.name[0] : chat.name.join(", ")}
            message={chat.message}
            isActive={chat.id === activeChatId}
            onClick={() => {
              setActiveChatId(chat.id);
              setCurrentView(CurrentView.CHAT);
            }}
            isGroup={chat.name.length > 1}
          />
        ))}
      </div>
    </div>
  );
};
