export const VideoCall = ({
  setIsVideoCall,
}: {
  setIsVideoCall: (value: boolean) => void;
}) => {
  return (
    <div className="relative px-8 pb-4 mt-[37px]">
      <div className="relative">
        <img
          src="/VideoCallPerson-1.jpg"
          alt=""
          className="rounded-3xl border-4 border-[#06C270]"
        />
        <div className="flex justify-center items-center absolute top-6 right-6 border-[1.71px] border-[#EEEEEE] bg-white h-12 w-12 rounded-full">
          <img src="/Waveform.svg" alt="" />
        </div>
        <div className="absolute left-6 bottom-6 bg-black/30 text-white font-medium text-xl px-6 py-1 rounded-full">
          Dr Ramakrishnan
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <div className="relative">
          <img
            src="/VideoCallPerson-2.jpg"
            alt=""
            height={124}
            width={220}
            className="rounded-[10px]"
          />
          <div className="absolute left-2 bottom-2 bg-black/30 text-white px-4 py-1 rounded-full">
            Me
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 justify-self-center flex gap-8 bg-[#F8F8F880]/50 border-2 border-white">
        <div className="flex justify-center items-center w-11 h-11 rounded-full">
          <img src="/Microphone.svg" alt="" />
        </div>
        <div className="flex justify-center items-center w-11 h-11 rounded-full">
          <img src="/ChatCircle-2.svg" alt="" />
        </div>
        <div
          onClick={() => setIsVideoCall(false)}
          className="flex justify-center items-center w-11 h-11 rounded-full bg-[#EE4D37]"
        >
          <img src="/Phone-2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
