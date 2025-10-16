import { Avatar } from "./common/Avatar";
import { ICONS } from "../constants/icons";

export const ChatItem = ({
  name,
  message,
  isActive,
  onClick,
  isGroup,
}: {
  name: string;
  message: string;
  isActive?: boolean;
  onClick?: () => void;
  isGroup?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-2 items-center p-2 cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-bg-hover rounded-[12px] scale-[1.02]"
          : "hover:bg-gray-50 hover:rounded-[12px] hover:scale-[1.01]"
      } border-b border-border-light active:scale-[0.99]`}
    >
      <Avatar
        src={ICONS.AVATAR}
        alt={isGroup ? "Group chat" : `${name}'s avatar`}
        size="medium"
        isGroup={isGroup}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-text-primary font-medium">{name}</span>
        <span className="text-text-secondary truncate">{message}</span>
      </div>
    </div>
  );
};
