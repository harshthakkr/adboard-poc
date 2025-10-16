import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { VideoCallScreen } from "./VideoCallScreen";
import { VideoCallControls } from "./common/VideoCallControls";
import { ICONS } from "../constants/icons";

export const GroupVideoCall = ({
  setCurrentView,
}: {
  setCurrentView: (view: CurrentViewType) => void;
}) => {
  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-[37px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-20 md:pb-24">
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_1}
            alt="Dr Ramakrishnan in video call"
            name="Dr Ramakrishnan"
            isSpeaking
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_2}
            alt="Dr. Anika Verma in video call"
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_3}
            alt="Dr. Rajesh Malhotra in video call"
            name="Dr. Rajesh Malhotra"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_1}
            alt="Dr. Anika Verma in video call"
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_2}
            alt="Mr. Thomas Lee in video call"
            name="Mr. Thomas Lee"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_2}
            alt="Ms. Emily Chen in video call"
            name="Ms. Emily Chen"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_2}
            alt="Dr. Anika Verma in video call"
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image={ICONS.VIDEO_CALL_PERSON_2}
            alt="Mr. Thomas Lee in video call"
            name="Mr. Thomas Lee"
          />

          <div className="space-y-2 md:space-y-3">
            <div className="h-[120px] md:h-[180px] lg:h-[214px] flex justify-center items-center bg-bg-hover rounded-[16px] md:rounded-[20px]">
              <img
                src={ICONS.USER}
                alt="Your video placeholder"
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <span className="text-sm md:text-base">You</span>
          </div>
        </div>
      </div>

      <VideoCallControls
        onEndCall={() => setCurrentView(CurrentView.CHAT)}
        variant="group"
      />
    </div>
  );
};
