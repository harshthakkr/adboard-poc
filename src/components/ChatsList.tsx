import { ChatItem } from "./ChatItem";
import notePencilLogo from "/NotePencil.svg";
import allDoctors from "../data/doctor.json";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";

export const ChatsList = ({
  activeChatId,
  setActiveChatId,
  setCurrentView,
}: {
  activeChatId: number;
  setActiveChatId: (id: number) => void;
  setCurrentView: (view: CurrentViewType) => void;
}) => {
  return (
    <div className="w-[320px] h-[calc(100vh-120px)] flex flex-col">
      <div className="flex items-center justify-between h-[72px] py-1 flex-shrink-0">
        <h2 className="font-medium text-lg">Chats</h2>
        <img
          src={notePencilLogo}
          alt=""
          onClick={() => setCurrentView(CurrentView.NEW_CHAT)}
        />
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1">
        {allDoctors.map(
          (chat: {
            id: number;
            name: string[];
            message: string;
            isActive: boolean;
          }) => {
            return (
              <ChatItem
                name={
                  chat.name.length === 1 ? chat.name[0] : chat.name.join(", ")
                }
                message={chat.message}
                isActive={chat.id === activeChatId}
                onClick={() => {
                  setActiveChatId(chat.id);
                  setCurrentView(CurrentView.CHAT);
                }}
                key={chat.id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
