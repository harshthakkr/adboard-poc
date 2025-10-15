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
        isActive ? "bg-[#013BDB] text-white" : "bg-white"
      } w-full text-center cursor-pointer`}
      onClick={() => setCurrentTab(name)}
    >
      {name}
    </span>
  );
};
