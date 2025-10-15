import avatar from "/Avatar.png";
import phoneIcon from "/Phone.svg";
import videoCameraIcon from "/VideoCamera.svg";

export const ChatHeader = ({
  setIsVideoCall,
}: {
  setIsVideoCall: (value: boolean) => void;
}) => {
  return (
    <div className="flex p-3 items-center justify-between border-b border-px border-[#EEEEEE]">
      <div className="flex gap-2">
        <img
          src={avatar}
          alt=""
          height={48}
          width={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-medium text-[#1C274C]">Dr. Emily Chen</span>
          <span className="text-[#93A1B8]">Medical Oncologist</span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center justify-center w-10 h-10 border border-px border-[#EEEEEE] rounded-full">
          <img src={phoneIcon} alt="" />
        </div>
        <div
          onClick={() => setIsVideoCall(true)}
          className="flex items-center justify-center w-10 h-10 border border-px border-[#EEEEEE] rounded-full"
        >
          <img src={videoCameraIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
