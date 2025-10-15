import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import avatar from "/Avatar.png";
import phoneIcon from "/Phone.svg";
import videoCameraIcon from "/VideoCamera.svg";
import allChats from "../data/chats.json";
import { useState, useRef, useEffect } from "react";

interface ChatHeaderProps {
  currentView: CurrentViewType;
  setCurrentView: (view: CurrentViewType) => void;
  activeChat?: {
    id: number;
    name: string[];
    message: string;
    isActive: boolean;
  };
}

export const ChatHeader = ({
  currentView,
  setCurrentView,
  activeChat,
}: ChatHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availablePeople = allChats
    .filter((chat) => chat.name.length === 1)
    .filter((chat) =>
      chat.name[0].toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((chat) => !selectedPeople.includes(chat.name[0]));

  const addPerson = (person: string) => {
    setSelectedPeople([...selectedPeople, person]);
    setSearchQuery("");
    setShowDropdown(false);
  };

  const removePerson = (person: string) => {
    setSelectedPeople(selectedPeople.filter((p) => p !== person));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div className="flex p-4 items-center justify-between border-b border-px border-[#EEEEEE]">
      {currentView !== CurrentView.NEW_CHAT && (
        <div className="flex gap-2">
          <img
            src={avatar}
            alt=""
            height={48}
            width={48}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium text-[#1C274C]">
              {activeChat?.name.length === 1
                ? activeChat.name[0]
                : activeChat?.name.join(", ")}
            </span>
            <span className="text-[#93A1B8]">Medical Oncologist</span>
          </div>
        </div>
      )}
      {currentView === CurrentView.NEW_CHAT && (
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold">New Message</h2>
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-end gap-2">
              <span className="text-[#93A1B8]">To:</span>
              <div className="flex flex-wrap gap-1 flex-1">
                {selectedPeople.map((person) => (
                  <div
                    key={person}
                    className="flex items-center gap-1 bg-[#EBF0FF] p-1 pr-2 rounded-full"
                  >
                    <img src={avatar} alt="" className="w-5 h-5 rounded-full" />
                    <span className="text-sm">{person}</span>
                    <button
                      onClick={() => removePerson(person)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      <img src="/X-2.svg" alt="" width="12px" height="12px" />
                    </button>
                  </div>
                ))}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder={
                    selectedPeople.length === 0 ? "Search people..." : ""
                  }
                  className="flex-1 outline-none min-w-[150px]"
                />
              </div>
            </div>
            {showDropdown && availablePeople.length > 0 && (
              <div className="absolute top-full left-0 w-[346px] mt-3 px-3 py-2 bg-white border border-[#EEEEEE] rounded-lg shadow-lg max-h-52 overflow-y-auto z-50">
                {availablePeople.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => addPerson(chat.name[0])}
                    className="flex items-center gap-2 px-2 py-3 hover:bg-[#EBF0FF] hover:rounded-xl border-b border-px border-[#EEEEEE] cursor-pointer"
                  >
                    <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-[#1C274C]">
                        {chat.name[0]}
                      </div>
                      <div className="text-sm text-[#93A1B8] truncate">
                        {chat.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex gap-3">
        <div className="flex items-center justify-center w-10 h-10 border border-px border-[#EEEEEE] rounded-full">
          <img src={phoneIcon} alt="" />
        </div>
        <div
          onClick={() => setCurrentView(CurrentView.VIDEO_CALL)}
          className="flex items-center justify-center w-10 h-10 border border-px border-[#EEEEEE] rounded-full cursor-pointer"
        >
          <img src={videoCameraIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
