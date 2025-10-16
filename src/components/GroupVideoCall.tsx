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
    <>
      <div className="flex-1 overflow-y-auto px-8 mt-[37px] pb-24">
        <div className="grid grid-cols-3 gap-4">
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

          <div>
            <div className="col-span-1 h-[214px] mb-2 flex justify-center items-center bg-bg-hover rounded-[20px]">
              <img src={ICONS.USER} alt="Your video placeholder" />
            </div>
            <span>You</span>
          </div>
        </div>
      </div>

      <VideoCallControls
        onEndCall={() => setCurrentView(CurrentView.CHAT)}
        variant="group"
      />
    </>
  );
};
