interface AvatarProps {
  src?: string;
  alt: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  isGroup?: boolean;
}

export const Avatar = ({
  src = "/Avatar.png",
  alt,
  size = "medium",
  onClick,
  isGroup = false,
}: AvatarProps) => {
  const sizeClasses = {
    small: "w-5 h-5 md:w-6 md:h-6",
    medium: "w-10 h-10 md:w-12 md:h-12",
    large: "w-12 h-12 md:w-[50px] md:h-[50px]",
  };

  const clickableClasses = onClick
    ? "cursor-pointer hover:scale-105 transition-transform duration-200"
    : "";

  if (isGroup) {
    return (
      <div
        className={`${sizeClasses[size]} bg-bg-group rounded-full flex justify-center items-center transition-transform duration-200 flex-shrink-0`}
      >
        <img src="/Users.svg" alt={alt} className="w-1/2 h-1/2" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-full flex-shrink-0 ${clickableClasses}`}
    />
  );
};
