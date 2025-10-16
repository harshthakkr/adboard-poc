import { ChatItem } from "./ChatItem";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import type { Doctor } from "../types/DoctorType";
import { ICONS } from "../constants/icons";

interface ChatsListProps {
  chats: Doctor[];
  activeChatId: number;
  setActiveChatId: (id: number) => void;
  setCurrentView: (view: CurrentViewType) => void;
}

export const ChatsList = ({
  chats,
  activeChatId,
  setActiveChatId,
  setCurrentView,
}: ChatsListProps) => {
  return (
    <div className="w-full md:w-[320px] h-[calc(100vh-120px)] md:h-auto md:max-h-[calc(100vh-120px)] bg-white rounded-[20px] p-4 md:p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between flex-shrink-0">
        <h2 className="font-medium text-base md:text-lg">Chats</h2>
        <img
          src={ICONS.NOTE_PENCIL}
          alt="New chat"
          onClick={() => setCurrentView(CurrentView.NEW_CHAT)}
          className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 w-5 h-5 md:w-6 md:h-6"
        />
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto flex-1 min-h-0">
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
