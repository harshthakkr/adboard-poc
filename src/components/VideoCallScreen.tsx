import { ICONS } from "../constants/icons";

export const VideoCallScreen = ({
  image,
  alt,
  name,
  isSpeaking,
}: {
  image: string;
  alt: string;
  name: string;
  isSpeaking?: boolean;
}) => {
  return (
    <div className="space-y-2 md:space-y-3">
      <div
        className={`relative ${
          isSpeaking ? "rounded-[16px] md:rounded-[20px]" : ""
        }`}
      >
        <img
          src={image}
          alt={alt}
          className={`rounded-[16px] md:rounded-[20px] w-full ${
            isSpeaking ? "border-2 md:border-4 border-success" : ""
          }`}
        />
        {isSpeaking && (
          <div className="absolute flex gap-1 justify-center items-center left-2 md:left-[13.5px] bottom-2 md:bottom-[13.5px] bg-white text-text-dark text-xs md:text-sm border-px border-border-light p-1.5 md:p-2 rounded-full">
            <img
              src={ICONS.WAVEFORM}
              alt="Speaking indicator"
              className="w-3 h-3 md:w-4 md:h-4"
            />
            <span className="hidden sm:inline">Speaking</span>
          </div>
        )}
      </div>
      <span className="text-sm md:text-base truncate block">{name}</span>
    </div>
  );
};
