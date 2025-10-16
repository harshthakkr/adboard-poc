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
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-[50px] h-[50px]",
  };

  const clickableClasses = onClick
    ? "cursor-pointer hover:scale-105 transition-transform duration-200"
    : "";

  if (isGroup) {
    return (
      <div
        className={`${sizeClasses[size]} bg-bg-group rounded-full flex justify-center items-center transition-transform duration-200`}
      >
        <img src="/Users.svg" alt={alt} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-full ${clickableClasses}`}
    />
  );
};
