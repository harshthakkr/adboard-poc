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
      <div className={`${isSpeaking && "relative"}`}>
        <img
          src={image}
          alt={alt}
          className={`${
            isSpeaking && "border-4 border-[#06C270]"
          } col-span-1 rounded-[20px]`}
        />
        {isSpeaking && (
          <div className="absolute flex gap-1 justify-center items-center left-[13.5px] bottom-[13.5px] bg-white text-[#16191D] text-sm border-px border-[#EEEEEE] p-2 rounded-full">
            <img src="/Waveform.svg" alt="" />
            <span>Speaking</span>
          </div>
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};
