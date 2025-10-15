import background from "/ButtonImageBackground.png";

export const ToggleItem = ({
  icon,
  alt,
  title,
  isActive,
  setIsTranscriptionOn,
}: {
  icon: string;
  alt: string;
  title: string;
  isActive?: boolean;
  setIsTranscriptionOn?: (value: boolean) => void;
}) => {
  return (
    <div
      className={`${isActive ? "p-[1px] rounded-full" : ""}`}
      style={
        isActive
          ? {
              background: "linear-gradient(to bottom, #013BDB, #77C0FF)",
            }
          : undefined
      }
    >
      <div
        onClick={() => setIsTranscriptionOn && setIsTranscriptionOn(true)}
        className={`flex gap-2 px-5 py-3 text-[#93A1B8] rounded-full ${
          isActive ? "text-white" : ""
        }`}
        style={
          isActive
            ? {
                backgroundImage: `url(${background}), linear-gradient(to bottom, #013BDB, #2C62F7)`,
                backgroundBlendMode: "normal",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      >
        <img src={icon} alt={alt} />
        <span>{title}</span>
      </div>
    </div>
  );
};
