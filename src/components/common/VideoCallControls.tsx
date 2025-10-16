interface VideoCallControlsProps {
  onEndCall: () => void;
  variant?: "individual" | "group";
}

export const VideoCallControls = ({
  onEndCall,
  variant = "individual",
}: VideoCallControlsProps) => {
  const containerClasses =
    variant === "individual"
      ? "bg-bg-controls/50 border-2 border-white"
      : "bg-bg-controls border-2 border-white";

  const buttonClasses =
    variant === "individual"
      ? "hover:bg-white/30"
      : "bg-white hover:bg-bg-hover";

  return (
    <div
      className={`absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 px-4 md:px-8 py-2 rounded-full z-50 ${containerClasses}`}
    >
      <button
        className={`flex justify-center items-center w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer active:scale-95 transition-all duration-200 ${buttonClasses}`}
        aria-label="Toggle microphone"
      >
        <img
          src="/Microphone.svg"
          alt="Toggle microphone"
          className="hover:scale-110 transition-transform duration-200 w-5 h-5 md:w-6 md:h-6"
        />
      </button>

      <button
        className={`flex justify-center items-center w-10 h-10 md:w-11 md:h-11 rounded-full cursor-pointer active:scale-95 transition-all duration-200 ${buttonClasses}`}
        aria-label="Open chat"
      >
        <img
          src="/ChatCircle-2.svg"
          alt="Open chat"
          className="hover:scale-110 transition-transform duration-200 w-5 h-5 md:w-6 md:h-6"
        />
      </button>

      <button
        onClick={onEndCall}
        className="flex justify-center items-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-danger cursor-pointer hover:bg-danger-hover active:scale-95 transition-all duration-200"
        aria-label="End call"
      >
        <img
          src="/Phone-2.svg"
          alt="End call"
          className="hover:scale-110 transition-transform duration-200 w-5 h-5 md:w-6 md:h-6"
        />
      </button>
    </div>
  );
};
