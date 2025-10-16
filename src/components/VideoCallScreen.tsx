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
    <div className="space-y-3">
      <div className={`relative ${isSpeaking ? "rounded-[20px]" : ""}`}>
        <img
          src={image}
          alt={alt}
          className={`rounded-[20px] ${
            isSpeaking ? "border-4 border-success" : ""
          }`}
        />
        {isSpeaking && (
          <div className="absolute flex gap-1 justify-center items-center left-[13.5px] bottom-[13.5px] bg-white text-text-dark text-sm border-px border-border-light p-2 rounded-full">
            <img src={ICONS.WAVEFORM} alt="Speaking indicator" />
            <span>Speaking</span>
          </div>
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};
