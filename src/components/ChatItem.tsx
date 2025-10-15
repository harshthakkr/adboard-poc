import avatar from "/Avatar.png";

export const ChatItem = ({
  name,
  message,
  isActive,
}: {
  name: string;
  message: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={`flex gap-2 items-center p-2 ${
        isActive && "bg-[#EBF0FF] rounded-[12px]"
      } border-b border-[#EEEEEE]`}
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
