import { ToggleItem } from "./ToggleItem";
import { ICONS } from "../constants/icons";

export const Navbar = ({
  setIsTranscriptionOn,
}: {
  setIsTranscriptionOn: (value: boolean) => void;
}) => {
  return (
    <nav className="flex items-center justify-between md:justify-center px-4 md:px-6 lg:px-8 py-3 relative">
      <img
        src={ICONS.LOGO}
        alt="Application Logo"
        className="h-7 md:absolute md:left-6 lg:left-8 md:h-10"
      />
      <div className="flex items-center gap-1 md:gap-2 p-1 md:p-1.5 lg:p-2 border-2 border-white h-[36px] md:h-[52px] bg-white/80 rounded-full">
        <ToggleItem
          icon={ICONS.DASHBOARD}
          alt="Dashboard icon"
          title="Dashboard"
        />
        <ToggleItem
          icon={ICONS.INSIGHTS}
          alt="Insights icon"
          title="Insights"
        />
        <ToggleItem
          icon={ICONS.TRANSCRIPT}
          alt="Transcript icon"
          title="Transcript"
          setIsTranscriptionOn={setIsTranscriptionOn}
        />
        <ToggleItem icon={ICONS.CHAT} alt="Chat icon" title="Chat" isActive />
      </div>
    </nav>
  );
};
