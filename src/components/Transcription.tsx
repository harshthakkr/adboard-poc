import { SecondaryHeader } from "./SecondaryHeader";
import { TranscriptionMessage } from "./TranscriptionMessage";
import { ICONS } from "../constants/icons";

export const Transcription = ({
  setIsTranscriptionOn,
}: {
  setIsTranscriptionOn: (isOn: boolean) => void;
}) => {
  const transcriptionMessages = [
    {
      name: "Dr. Ramakrishnan",
      message:
        "What roles do regulatory affairs specialists play in drug approval?",
    },
    {
      name: "Dr. Anika Verma",
      message:
        "You know, navigating the complexities of drug approval is crucial for our patients' futures.",
    },
    {
      name: "Dr Ramakrishnan",
      message:
        "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "Dr Ramakrishnan",
      message:
        "What roles do regulatory affairs specialists play in drug approval?",
    },
    {
      name: "Dr Ramakrishnan",
      message:
        "Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "Dr Ramakrishnan",
      message:
        "You know, navigating the complexities of drug approval is crucial for our patients' futures.",
    },
  ];

  return (
    <div className="absolute w-full md:w-[420px] lg:w-[520px] z-100 h-full flex flex-col gap-4 md:gap-6 bg-white top-0 right-0 px-4 md:px-5 py-3 md:py-4 shadow-lg">
      <SecondaryHeader title="Transcription" set={setIsTranscriptionOn} />
      <div className="space-y-2 overflow-y-auto flex-1 pr-2">
        {transcriptionMessages.map((msg, index) => (
          <TranscriptionMessage
            key={index}
            image={ICONS.AVATAR}
            name={msg.name}
            message={msg.message}
          />
        ))}
      </div>
    </div>
  );
};
