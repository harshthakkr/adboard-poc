import avatar from "/Avatar.png";

export const ChatItem = ({
  name,
  message,
  isActive,
  onClick,
}: {
  name: string;
  message: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-2 items-center p-2 cursor-pointer ${
        isActive && "bg-[#EBF0FF] rounded-[12px]"
      } border-b border-[#EEEEEE] hover:bg-gray-50 hover:rounded-[12px]`}
    >
      <img
        src={avatar}
        alt=""
        height={48}
        width={48}
        className="rounded-full"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-[#1C274C] font-medium">{name}</span>
        <span className="text-[#93A1B8] truncate">{message}</span>
      </div>
    </div>
  );
};
