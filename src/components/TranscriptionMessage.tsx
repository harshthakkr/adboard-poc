export const TranscriptionMessage = ({
  image,
  name,
  message,
}: {
  image: string;
  name: string;
  message: string;
}) => {
  return (
    <div className="flex gap-4 items-start">
      <img
        src={image}
        alt="Avatar"
        height={24}
        width={24}
        className="rounded-full"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[#93A1B8]">{name}</span>
        <span className="text-[#16191D]">{message}</span>
      </div>
    </div>
  );
};
