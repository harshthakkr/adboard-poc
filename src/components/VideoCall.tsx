import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { VideoCallControls } from "./common/VideoCallControls";
import { ICONS } from "../constants/icons";

export const VideoCall = ({
  setCurrentView,
}: {
  setCurrentView: (view: CurrentViewType) => void;
}) => {
  return (
    <div className="h-full relative flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 md:px-6 lg:px-8 mt-4 md:mt-6 lg:mt-[37px] pb-20 md:pb-24">
          <div className="relative">
            <img
              src={ICONS.VIDEO_CALL_PERSON_1}
              alt="Dr Ramakrishnan in video call"
              className="rounded-2xl md:rounded-3xl border-2 md:border-4 border-success w-full"
            />
            <div className="flex justify-center items-center absolute top-3 md:top-6 right-3 md:right-6 border-[1.71px] border-border-light bg-white h-8 w-8 md:h-12 md:w-12 rounded-full">
              <img
                src={ICONS.WAVEFORM}
                alt="Speaking indicator"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
            <div className="absolute left-3 md:left-6 bottom-3 md:bottom-6 bg-black/30 text-white font-medium text-sm md:text-base lg:text-xl px-3 md:px-6 py-0.5 md:py-1 rounded-full">
              Dr Ramakrishnan
            </div>
          </div>
          <div className="flex justify-end mt-3 md:mt-4">
            <div className="relative w-[160px] md:w-[220px]">
              <img
                src={ICONS.VIDEO_CALL_PERSON_2}
                alt="Your video"
                className="rounded-[8px] md:rounded-[10px] w-full"
              />
              <div className="absolute left-2 bottom-2 bg-black/30 text-white px-2 md:px-4 py-0.5 md:py-1 rounded-full text-xs md:text-sm">
                Me
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoCallControls
        onEndCall={() => setCurrentView(CurrentView.CHAT)}
        variant="individual"
      />
    </div>
  );
};
