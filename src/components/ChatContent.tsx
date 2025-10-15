import copyIcon from "/Copy.svg";
import speakerHighIcon from "/SpeakerHigh.svg";
import thumbsUpIcon from "/ThumbsUp.svg";
import thumbsDownIcon from "/ThumbsDown.svg";
import magicStickIcon from "/MagicStick4.svg";
import arrowsClockwiseIcon from "/ArrowsClockwise.svg";
import iconButton from "/IconButton.svg";
import arrowUpIcon from "/ArrowUp.svg";
import background from "/ButtonImageBackground.png";

export const ChatContent = () => {
  return (
    <div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-[10px] px-8 mt-[37px] pb-32">
          <div className="flex flex-col gap-[10px] py-3">
            <p className="px-4 py-3 bg-[#F6F6F6] text-[#1C274C] rounded-tr-[20px] rounded-br-[20px] rounded-b-[20px]">
              For patients who are NPO (nothing by mouth) prior to a procedure
              or may have GI prep that could impact absorption, there isn't a
              specific adjustment required for Zepzelca, since it's administered
              as an intravenous infusion. Standard dosing can typically proceed
              as scheduled, but if the procedure timing overlaps with an
              infusion day, it's generally recommended to coordinate with the GI
              and infusion teams to avoid conflicts. If the patient is
              experiencing any significant changes in renal or hepatic function
              related to the procedure or prep, additional monitoring or dose
              adjustments may be warranted, in line with the prescribing
              information.
            </p>
            <div className="flex gap-[10px]">
              <img src={copyIcon} alt="" className="p-1" />
              <img src={speakerHighIcon} alt="" />
              <img src={thumbsUpIcon} alt="" />
              <img src={thumbsDownIcon} alt="" />
              <img src={magicStickIcon} alt="" />
              <img src={arrowsClockwiseIcon} alt="" />
            </div>
          </div>
          <div className="flex justify-end">
            <p className="bg-[#4B7BFF] w-[406px] px-4 py-3 font-medium text-white rounded-tl-[32px] rounded-b-[32px]">
              What roles do regulatory affairs specialists play in drug
              approval?
            </p>
          </div>
          <div className="flex flex-col gap-[10px] py-3">
            <p className="px-4 py-3 bg-[#F6F6F6] text-[#1C274C] rounded-tr-[20px] rounded-br-[20px] rounded-b-[20px]">
              For patients who are NPO (nothing by mouth) prior to a procedure
              or may have GI prep that could impact absorption, there isn't a
              specific adjustment required for Zepzelca, since it's administered
              as an intravenous infusion. Standard dosing can typically proceed
              as scheduled, but if the procedure timing overlaps with an
              infusion day, it's generally recommended to coordinate with the GI
              and infusion teams to avoid conflicts. If the patient is
              experiencing any significant changes in renal or hepatic function
              related to the procedure or prep, additional monitoring or dose
              adjustments may be warranted, in line with the prescribing
              information.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%-64px)] left-8 flex flex-col gap-4 p-4 rounded-[16px] bottom-4 border border-px border-[#EEEEEE] z-50 bg-white">
        <p>
          What roles do regulatory affairs specialists play in drug approval?
        </p>
        <div className="flex justify-between">
          <img src={iconButton} alt="" height={40} width={40} />
          <div
            className="p-[1px] rounded-full"
            style={{
              background: "linear-gradient(to bottom, #013BDB, #77C0FF)",
            }}
          >
            <div
              className="flex justify-center items-center h-10 w-10 text-[#93A1B8] rounded-full"
              style={{
                backgroundImage: `url(${background}), linear-gradient(to bottom, #013BDB, #2C62F7)`,
                backgroundBlendMode: "normal",

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={arrowUpIcon} alt="" className="relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
