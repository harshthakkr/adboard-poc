import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { VideoCallScreen } from "./VideoCallScreen";

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
            image="/VideoCallPerson-1.jpg"
            alt=""
            name="Dr Ramakrishnan"
            isSpeaking
          />
          <VideoCallScreen
            image="/VideoCallPerson-2.jpg"
            alt=""
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image="/VideoCallPerson-3.png"
            alt=""
            name="Dr. Rajesh Malhotra"
          />
          <VideoCallScreen
            image="/VideoCallPerson-1.jpg"
            alt=""
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image="/VideoCallPerson-2.jpg"
            alt=""
            name="Mr. Thomas Lee"
          />
          <VideoCallScreen
            image="/VideoCallPerson-2.jpg"
            alt=""
            name="Ms. Emily Chen"
          />
          <VideoCallScreen
            image="/VideoCallPerson-2.jpg"
            alt=""
            name="Dr. Anika Verma"
          />
          <VideoCallScreen
            image="/VideoCallPerson-2.jpg"
            alt=""
            name="Mr. Thomas Lee"
          />

          <div>
            <div className="col-span-1 h-[214px] mb-2 flex justify-center items-center bg-[#EBF0FF] rounded-[20px]">
              <img src="/User.svg" alt="" className="" />
            </div>
            <span>You</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 rounded-full px-4 py-3 bg-[#F8F8F880] border-2 border-white">
        <div className="flex justify-center items-center w-11 h-11 rounded-full bg-white">
          <img src="/Microphone.svg" alt="" />
        </div>
        <div className="flex justify-center items-center w-11 h-11 rounded-full bg-white">
          <img src="/ChatCircle-2.svg" alt="" />
        </div>
        <div
          onClick={() => setCurrentView(CurrentView.CHAT)}
          className="flex justify-center items-center w-11 h-11 rounded-full bg-[#EE4D37]"
        >
          <img src="/Phone-2.svg" alt="" />
        </div>
      </div>
    </>
  );
};
