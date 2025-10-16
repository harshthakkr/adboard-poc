import { CurrentView, type CurrentViewType } from "../types/CurrentView";
import { useState, useRef, useEffect } from "react";
import type { Doctor } from "../types/DoctorType";
import { Avatar } from "./common/Avatar";
import { IconButton } from "./common/IconButton";
import { ICONS } from "../constants/icons";
import allDoctors from "../data/doctor.json";

interface ChatHeaderProps {
  currentView: CurrentViewType;
  setCurrentView: (view: CurrentViewType) => void;
  activeChat?: Doctor;
  selectedPeople: string[];
  setSelectedPeople: (people: string[]) => void;
  onProfileClick: (doctor: Doctor) => void;
}

export const ChatHeader = ({
  currentView,
  setCurrentView,
  activeChat,
  selectedPeople,
  setSelectedPeople,
  onProfileClick,
}: ChatHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availablePeople = allDoctors
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
    <div className="flex p-4 items-center justify-between border-b border-px border-border-light">
      {currentView !== CurrentView.NEW_CHAT && (
        <div className="flex gap-2">
          <Avatar
            src={ICONS.AVATAR}
            alt={
              activeChat?.name.length === 1
                ? `${activeChat.name[0]}'s avatar`
                : "Group chat"
            }
            size="medium"
            onClick={
              activeChat?.name.length === 1 && activeChat
                ? () => onProfileClick(activeChat)
                : undefined
            }
            isGroup={activeChat?.name.length !== 1}
          />
          <div className="flex flex-col">
            <span
              className={`font-medium text-text-primary ${
                activeChat?.name.length === 1
                  ? "cursor-pointer hover:underline"
                  : ""
              }`}
              onClick={() =>
                activeChat?.name.length === 1 &&
                activeChat &&
                onProfileClick(activeChat)
              }
            >
              {activeChat?.name.length === 1
                ? activeChat.name[0]
                : activeChat?.name.join(", ")}
            </span>
            <span className="text-text-secondary">
              {activeChat?.occupation}
            </span>
          </div>
        </div>
      )}
      {currentView === CurrentView.NEW_CHAT && (
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold">New Message</h2>
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-end gap-2">
              <span className="text-text-secondary">To:</span>
              <div className="flex flex-wrap gap-1 flex-1">
                {selectedPeople.map((person) => (
                  <div
                    key={person}
                    className="flex items-center gap-1 bg-bg-hover p-1 pr-2 rounded-full transition-all duration-200 hover:bg-bg-hover-dark hover:scale-105"
                  >
                    <Avatar
                      src={ICONS.AVATAR}
                      alt={`${person}'s avatar`}
                      size="small"
                    />
                    <span className="text-sm">{person}</span>
                    <button
                      onClick={() => removePerson(person)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer hover:scale-125 active:scale-95 transition-all duration-200"
                      aria-label="Remove person"
                    >
                      <img
                        src={ICONS.X_2}
                        alt="Remove"
                        width="12px"
                        height="12px"
                      />
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
              <div className="absolute top-full left-0 w-[346px] mt-3 px-3 py-2 bg-white border border-border-light rounded-lg shadow-lg max-h-52 overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {availablePeople.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => addPerson(chat.name[0])}
                    className="flex items-center gap-2 px-2 py-3 hover:bg-bg-hover hover:rounded-xl border-b border-px border-border-light cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Avatar
                      src={ICONS.AVATAR}
                      alt={`${chat.name[0]}'s avatar`}
                      size="small"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-text-primary">
                        {chat.name[0]}
                      </div>
                      <div className="text-sm text-text-secondary truncate">
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
        <IconButton icon={ICONS.PHONE} alt="Voice call" variant="default" />
        <IconButton
          icon={ICONS.VIDEO_CAMERA}
          alt="Video call"
          variant="default"
          onClick={() => setCurrentView(CurrentView.VIDEO_CALL)}
        />
      </div>
    </div>
  );
};
