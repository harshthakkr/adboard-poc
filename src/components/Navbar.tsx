import { ToggleItem } from "./ToggleItem";
import { ICONS } from "../constants/icons";

export const Navbar = ({
  setIsTranscriptionOn,
}: {
  setIsTranscriptionOn: (value: boolean) => void;
}) => {
  return (
    <nav className="flex items-center justify-center px-8 py-3">
      <img
        src={ICONS.LOGO}
        alt="Application Logo"
        className="absolute left-8"
      />
      <div className="flex items-center gap-2 p-2 border-2 border-white h-[52px] bg-white/80 rounded-full">
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
