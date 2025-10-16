interface MessageActionButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
}

export const MessageActionButton = ({
  icon,
  alt,
  onClick,
}: MessageActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-1 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200 hover:bg-gray-100 rounded"
      aria-label={alt}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};
