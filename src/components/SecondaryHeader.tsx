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
      <img
        src="/X-3.svg"
        alt="Close Icon"
        onClick={() => set(false)}
        className="cursor-pointer hover:scale-110 hover:rotate-90 active:scale-95 transition-all duration-200"
      />
    </div>
  );
};
