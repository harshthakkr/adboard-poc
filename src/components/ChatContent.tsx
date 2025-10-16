import { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { MessageActionButton } from "./common/MessageActionButton";
import { GradientButton } from "./common/GradientButton";
import { ICONS } from "../constants/icons";

interface ChatContentProps {
  currentView: CurrentViewType;
  activeChat?: {
    id: number;
    name: string[];
    message: string;
    isActive: boolean;
  };
  onCreateGroup: (selectedPeople: string[], firstMessage: string) => number;
  selectedPeople: string[];
  setSelectedPeople: (people: string[]) => void;
}

export const ChatContent = ({
  currentView,
  activeChat,
  onCreateGroup,
  selectedPeople,
  setSelectedPeople,
}: ChatContentProps) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [sentMessages, setSentMessages] = useState<Record<number, string[]>>(
    {}
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    noClick: false,
    noDrag: true,
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles]);
    },
  });

  const removeFile = (fileToRemove: File) => {
    setFiles((prev) => prev.filter((file) => file !== fileToRemove));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      if (currentView === CurrentView.NEW_CHAT && selectedPeople.length >= 2) {
        const newGroupId = onCreateGroup(selectedPeople, message);
        setSentMessages((prev) => ({
          ...prev,
          [newGroupId]: [message],
        }));
        setMessage("");
        setFiles([]);
        setSelectedPeople([]);
      } else if (activeChat) {
        setSentMessages((prev) => ({
          ...prev,
          [activeChat.id]: [...(prev[activeChat.id] || []), message],
        }));
        setMessage("");
        setFiles([]);
      } else if (
        currentView === CurrentView.NEW_CHAT &&
        selectedPeople.length === 1
      ) {
        const newGroupId = onCreateGroup(selectedPeople, message);
        setSentMessages((prev) => ({
          ...prev,
          [newGroupId]: [message],
        }));
        setMessage("");
        setFiles([]);
        setSelectedPeople([]);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [sentMessages, activeChat]);

  const currentChatMessages = activeChat
    ? sentMessages[activeChat.id] || []
    : [];

  const isOriginalChat = activeChat && activeChat.id <= 9;

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto px-8" ref={scrollRef}>
        {currentView === CurrentView.CHAT ? (
          <div className="flex flex-col gap-[10px] mt-[37px] pb-4">
            {isOriginalChat && (
              <>
                <div className="flex flex-col gap-[10px] py-3">
                  <p className="px-4 py-3 bg-bg-message text-text-primary rounded-tr-[20px] rounded-br-[20px] rounded-b-[20px]">
                    For patients who are NPO (nothing by mouth) prior to a
                    procedure or may have GI prep that could impact absorption,
                    there isn't a specific adjustment required for Zepzelca,
                    since it's administered as an intravenous infusion. Standard
                    dosing can typically proceed as scheduled, but if the
                    procedure timing overlaps with an infusion day, it's
                    generally recommended to coordinate with the GI and infusion
                    teams to avoid conflicts. If the patient is experiencing any
                    significant changes in renal or hepatic function related to
                    the procedure or prep, additional monitoring or dose
                    adjustments may be warranted, in line with the prescribing
                    information.
                  </p>
                  <div className="flex gap-[10px]">
                    <MessageActionButton icon={ICONS.COPY} alt="Copy message" />
                    <MessageActionButton
                      icon={ICONS.SPEAKER_HIGH}
                      alt="Read aloud"
                    />
                    <MessageActionButton
                      icon={ICONS.THUMBS_UP}
                      alt="Thumbs up"
                    />
                    <MessageActionButton
                      icon={ICONS.THUMBS_DOWN}
                      alt="Thumbs down"
                    />
                    <MessageActionButton
                      icon={ICONS.MAGIC_STICK}
                      alt="AI enhance"
                    />
                    <MessageActionButton
                      icon={ICONS.ARROWS_CLOCKWISE}
                      alt="Regenerate"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <p className="bg-primary-blue w-[406px] px-4 py-3 font-medium text-white rounded-tl-[32px] rounded-b-[32px]">
                    {activeChat?.message}
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] py-3">
                  <p className="px-4 py-3 bg-bg-message text-text-primary rounded-tr-[20px] rounded-br-[20px] rounded-b-[20px]">
                    For patients who are NPO (nothing by mouth) prior to a
                    procedure or may have GI prep that could impact absorption,
                    there isn't a specific adjustment required for Zepzelca,
                    since it's administered as an intravenous infusion. Standard
                    dosing can typically proceed as scheduled, but if the
                    procedure timing overlaps with an infusion day, it's
                    generally recommended to coordinate with the GI and infusion
                    teams to avoid conflicts. If the patient is experiencing any
                    significant changes in renal or hepatic function related to
                    the procedure or prep, additional monitoring or dose
                    adjustments may be warranted, in line with the prescribing
                    information.
                  </p>
                </div>
              </>
            )}
            {currentChatMessages.map((msg, index) => (
              <div key={index} className="flex justify-end">
                <p className="bg-primary-blue px-4 py-3 font-medium text-white rounded-tl-[32px] rounded-b-[32px] max-w-[406px]">
                  {msg}
                </p>
              </div>
            ))}
          </div>
        ) : currentView === CurrentView.NEW_CHAT ? (
          <div className="flex flex-col gap-[10px] mt-[37px] pb-4">
            <div className="text-center text-gray-400 mt-8">
              {selectedPeople.length === 0 ? (
                <p>Select people to start a conversation</p>
              ) : selectedPeople.length === 1 ? (
                <p>Send a message to {selectedPeople[0]}</p>
              ) : (
                <p>
                  Send a message to create a group with{" "}
                  {selectedPeople.join(", ")}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
      <div className="flex-shrink-0 mx-8 mb-4 flex flex-col gap-4 p-4 rounded-[16px] border border-px border-border-light bg-white relative z-10">
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {files.map((file) => (
              <div
                key={file.name}
                className="relative flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                <button
                  onClick={() => removeFile(file)}
                  className="absolute -top-1 -right-1 bg-bg-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-bg-hover-dark hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Remove file"
                >
                  <img src={ICONS.X} alt="Remove file" className="w-4 h-4" />
                </button>
                {file.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    {file.name.split(".").pop()?.toUpperCase()}
                  </div>
                )}
                <span className="text-sm max-w-[150px] truncate">
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
          <input
            type="text"
            value={message}
            placeholder="Ask anything..."
            onChange={(e) => setMessage(e.target.value)}
            className="outline-none"
          />
          <div className="flex justify-between">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img
                src={ICONS.ICON_BUTTON}
                alt="Attach files"
                height={40}
                width={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
            </div>
            <GradientButton type="submit">
              <img
                src={ICONS.ARROW_UP}
                alt="Send message"
                className="relative z-10"
              />
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  );
};
