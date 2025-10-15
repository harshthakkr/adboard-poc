import { TranscriptionMessage } from "./TranscriptionMessage";

export const Transcription = ({
  setIsTranscriptionOn,
}: {
  setIsTranscriptionOn: (isOn: boolean) => void;
}) => {
  return (
    <div className="absolute w-[520px] z-100 h-full flex flex-col gap-6 bg-white top-0 right-0 px-5 py-4">
      <div className="flex justify-between items-center flex-shrink-0">
        <h2 className="font-semibold">Transcription</h2>
        <img
          src="/X-3.svg"
          alt="Close Icon"
          onClick={() => setIsTranscriptionOn(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="space-y-2 overflow-y-auto flex-1">
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr. Ramakrishnan"
          message="What roles do regulatory affairs specialists play in drug approval?"
        />
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr. Anika Verma"
          message="You know, navigating the complexities of drug approval is crucial for our patients' futures."
        />
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr Ramakrishnan"
          message="Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr Ramakrishnan"
          message="What roles do regulatory affairs specialists play in drug approval?"
        />
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr Ramakrishnan"
          message="Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        />
        <TranscriptionMessage
          image="/Avatar.png"
          name="Dr Ramakrishnan"
          message="You know, navigating the complexities of drug approval is crucial for our patients' futures."
        />
      </div>
    </div>
  );
};
