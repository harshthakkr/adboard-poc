import { Avatar } from "./common/Avatar";

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
      <Avatar src={image} alt={`${name}'s avatar`} size="small" />
      <div className="flex flex-col gap-1">
        <span className="text-text-secondary">{name}</span>
        <span className="text-text-dark">{message}</span>
      </div>
    </div>
  );
};
