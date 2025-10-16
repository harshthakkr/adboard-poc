import { ToggleItem } from "./ToggleItem";

export const Navbar = ({
  setIsTranscriptionOn,
}: {
  setIsTranscriptionOn: (value: boolean) => void;
}) => {
  return (
    <nav className="flex items-center justify-center px-8 py-3">
      <img src="/logo.svg" alt="Application Logo" className="absolute left-8" />
      <div className="flex items-center gap-2 p-2 border-2 border-white h-[52px] bg-white/80 rounded-full">
        <ToggleItem
          icon="/SquaresFour.svg"
          alt="Dashboard icon"
          title="Dashboard"
        />
        <ToggleItem
          icon="/MagicWand.svg"
          alt="Insights icon"
          title="Insights"
        />
        <ToggleItem
          icon="/Notebook.svg"
          alt="Transcript icon"
          title="Transcript"
          setIsTranscriptionOn={setIsTranscriptionOn}
        />
        <ToggleItem
          icon="/ChatCircle.svg"
          alt="Chat icon"
          title="Chat"
          isActive
        />
      </div>
    </nav>
  );
};
