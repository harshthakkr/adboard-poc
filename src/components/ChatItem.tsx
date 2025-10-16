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
          ? "bg-[#EBF0FF] rounded-[12px] scale-[1.02]"
          : "hover:bg-gray-50 hover:rounded-[12px] hover:scale-[1.01]"
      } border-b border-[#EEEEEE] active:scale-[0.99]`}
    >
      {isGroup ? (
        <div className="w-12 h-12 bg-[#F7F9FF] rounded-full flex justify-center items-center transition-transform duration-200">
          <img
            src="/Users.svg"
            alt="Group chat"
            className="transition-transform duration-200"
          />
        </div>
      ) : (
        <img
          src="/Avatar.png"
          alt={`${name}'s avatar`}
          height={48}
          width={48}
          className="rounded-full transition-transform duration-200 hover:scale-105"
        />
      )}

      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-[#1C274C] font-medium">{name}</span>
        <span className="text-[#93A1B8] truncate">{message}</span>
      </div>
    </div>
  );
};
