import { ICONS } from "../constants/icons";

export const SecondaryHeader = ({
  title,
  set,
}: {
  title: string;
  set: (isOpen: boolean) => void;
}) => {
  return (
    <div className="flex justify-between items-center flex-shrink-0">
      <h2 className="font-semibold">{title}</h2>
      <button
        onClick={() => set(false)}
        aria-label="Close"
        className="cursor-pointer hover:scale-110 hover:rotate-90 active:scale-95 transition-all duration-200"
      >
        <img src={ICONS.X_3} alt="Close" />
      </button>
    </div>
  );
};
