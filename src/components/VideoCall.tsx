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
        <div className="px-8 mt-[37px] pb-24">
          <div className="relative">
            <img
              src={ICONS.VIDEO_CALL_PERSON_1}
              alt="Dr Ramakrishnan in video call"
              className="rounded-3xl border-4 border-success"
            />
            <div className="flex justify-center items-center absolute top-6 right-6 border-[1.71px] border-border-light bg-white h-12 w-12 rounded-full">
              <img src={ICONS.WAVEFORM} alt="Speaking indicator" />
            </div>
            <div className="absolute left-6 bottom-6 bg-black/30 text-white font-medium text-xl px-6 py-1 rounded-full">
              Dr Ramakrishnan
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="relative">
              <img
                src={ICONS.VIDEO_CALL_PERSON_2}
                alt="Your video"
                height={124}
                width={220}
                className="rounded-[10px]"
              />
              <div className="absolute left-2 bottom-2 bg-black/30 text-white px-4 py-1 rounded-full">
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
