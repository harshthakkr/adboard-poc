import { useState } from "react";
import { SecondaryHeader } from "./SecondaryHeader";
import { ProfileTab } from "./ProfileTab";
import { PublicationTab } from "./PublicationTab";
import { SocialMediaTab } from "./SocialMediaTab";
import { PatientCasesTab } from "./PatientCasesTab";
import type { Doctor } from "../types/DoctorType";
import { Avatar } from "./common/Avatar";
import { ICONS } from "../constants/icons";

export const Profile = ({
  setIsProfileOpen,
  doctor,
}: {
  setIsProfileOpen: (isOpen: boolean) => void;
  doctor: Doctor;
}) => {
  const [currentTab, setCurrentTab] = useState("Patient Cases");

  return (
    <div className="absolute right-0 md:right-3 top-0 md:top-3 w-full md:w-[420px] lg:w-[512px] h-full md:h-[calc(100%-24px)] flex flex-col gap-3 md:gap-4 bg-blue-100 px-4 md:px-5 py-3 md:py-4 rounded-none md:rounded-2xl z-50 overflow-hidden">
      <SecondaryHeader title="Info" set={setIsProfileOpen} />
      <div className="flex items-center gap-3 md:gap-4">
        <Avatar src={ICONS.AVATAR} alt="Doctor Profile" size="large" />
        <div className="flex flex-col min-w-0">
          <h1 className="font-semibold text-xl md:text-2xl truncate">
            {doctor.name.length === 1 ? doctor.name[0] : doctor.name.join(", ")}
          </h1>
          <span className="text-text-secondary text-sm md:text-base truncate">
            {doctor.occupation}
          </span>
        </div>
      </div>
      <div className="flex gap-2 md:gap-3 overflow-x-auto">
        <ProfileTab
          name="Patient Cases"
          setCurrentTab={setCurrentTab}
          isActive={currentTab === "Patient Cases"}
        />
        <ProfileTab
          name="Publications"
          setCurrentTab={setCurrentTab}
          isActive={currentTab === "Publications"}
        />
        <ProfileTab
          name="Social Media"
          setCurrentTab={setCurrentTab}
          isActive={currentTab === "Social Media"}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {currentTab === "Patient Cases" ? (
          <PatientCasesTab patientCases={doctor.patientCases} />
        ) : currentTab === "Publications" ? (
          <PublicationTab publications={doctor.publications} />
        ) : (
          <SocialMediaTab socialMedia={doctor.socialMedia} />
        )}
      </div>
    </div>
  );
};
