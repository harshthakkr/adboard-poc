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
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-11 h-11",
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
        active:scale-95 transition-all duration-200
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={alt}
    >
      <img
        src={icon}
        alt={alt}
        className="hover:scale-110 transition-transform duration-200"
      />
    </button>
  );
};
