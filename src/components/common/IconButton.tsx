interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
  variant?: "default" | "danger" | "transparent";
  size?: "small" | "medium" | "large";
  className?: string;
}

export const IconButton = ({
  icon,
  alt,
  onClick,
  variant = "default",
  size = "medium",
  className = "",
}: IconButtonProps) => {
  const sizeClasses = {
    small: "w-7 h-7 md:w-8 md:h-8",
    medium: "w-9 h-9 md:w-10 md:h-10",
    large: "w-10 h-10 md:w-11 md:h-11",
  };

  const iconSizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  const variantClasses = {
    default:
      "border border-border-light hover:bg-bg-hover hover:border-primary-blue",
    danger: "bg-danger hover:bg-danger-hover",
    transparent: "hover:bg-white/30",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center rounded-full cursor-pointer
        active:scale-95 transition-all duration-200 flex-shrink-0
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={alt}
    >
      <img
        src={icon}
        alt={alt}
        className={`hover:scale-110 transition-transform duration-200 ${iconSizeClasses[size]}`}
      />
    </button>
  );
};
