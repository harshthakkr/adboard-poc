import { ICONS } from "../constants/icons";

interface ToggleItemProps {
  icon: string;
  alt: string;
  title: string;
  isActive?: boolean;
  setIsTranscriptionOn?: (value: boolean) => void;
}

export const ToggleItem = ({
  icon,
  alt,
  title,
  isActive = false,
  setIsTranscriptionOn,
}: ToggleItemProps) => {
  const handleClick = () => {
    if (setIsTranscriptionOn) {
      setIsTranscriptionOn(true);
    }
  };

  return (
    <div
      className={`${isActive ? "p-[1px] rounded-full" : ""}`}
      style={
        isActive
          ? {
              background:
                "linear-gradient(to bottom, var(--color-primary-blue-dark), var(--color-primary-blue-light))",
            }
          : undefined
      }
    >
      <button
        onClick={handleClick}
        className={`flex gap-2 px-5 py-1 text-text-secondary rounded-full cursor-pointer transition-all duration-200 ${
          isActive
            ? "text-white scale-105 shadow-md"
            : "hover:bg-bg-hover hover:scale-105"
        } active:scale-95`}
        style={
          isActive
            ? {
                backgroundImage: `url(${ICONS.BUTTON_BACKGROUND}), linear-gradient(to bottom, var(--color-primary-blue-dark), var(--color-primary-blue-mid))`,
                backgroundBlendMode: "normal",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
        aria-label={title}
      >
        <img
          src={icon}
          alt={alt}
          className="transition-transform duration-200 group-hover:scale-110"
        />
        <span>{title}</span>
      </button>
    </div>
  );
};
