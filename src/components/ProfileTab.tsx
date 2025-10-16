export const ProfileTab = ({
  name,
  setCurrentTab,
  isActive,
}: {
  name: string;
  setCurrentTab: (tab: string) => void;
  isActive?: boolean;
}) => {
  return (
    <span
      className={`rounded-full px-[10px] py-2 ${
        isActive
          ? "bg-primary-blue-dark text-white scale-105 shadow-md"
          : "bg-white hover:bg-gray-100 hover:scale-105"
      } w-full text-center cursor-pointer transition-all duration-200 active:scale-95`}
      onClick={() => setCurrentTab(name)}
    >
      {name}
    </span>
  );
};
