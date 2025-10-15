import logo from "/logo.svg";
import squaresFourLogo from "/SquaresFour.svg";
import magicWandLogo from "/MagicWand.svg";
import notebookLogo from "/Notebook.svg";
import chatCircleLogo from "/ChatCircle.svg";
import { ToggleItem } from "./ToggleItem";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center">
      <img src={logo} alt="logo" className="absolute left-8" />
      <div className="flex gap-2 p-2 border-[2px] border-white bg-white/80 rounded-full">
        <ToggleItem icon={squaresFourLogo} alt="" title="Dashboard" />
        <ToggleItem icon={magicWandLogo} alt="" title="Insights" />
        <ToggleItem icon={notebookLogo} alt="" title="Transcript" />
        <ToggleItem icon={chatCircleLogo} alt="" title="Chat" isActive />
      </div>
    </nav>
  );
};
