import { useState } from "react";
import { SecondaryHeader } from "./SecondaryHeader";
import { ProfileTab } from "./ProfileTab";
import { PublicationTab } from "./PublicationTab";
import { SocialMediaTab } from "./SocialMediaTab";
import { PatientCasesTab } from "./PatientCasesTab";
import type { Doctor } from "../types/DoctorType";

export const Profile = ({
  setIsProfileOpen,
  doctor,
}: {
  setIsProfileOpen: (isOpen: boolean) => void;
  doctor: Doctor;
}) => {
  const [currentTab, setCurrentTab] = useState("Patient Cases");
  return (
    <div className="absolute right-3 top-3 w-[512px] h-[calc(100%-24px)] flex flex-col gap-4 bg-blue-100 px-5 py-4 rounded-2xl z-50">
      <SecondaryHeader title="Info" set={setIsProfileOpen} />
      <div className="flex items-center gap-4">
        <img
          src="/Avatar.png"
          alt="Doctor Profile"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl">
            {doctor.name.length === 1 ? doctor.name[0] : doctor.name.join(", ")}
          </h1>
          <span className="text-[#93A1B8]">{doctor.occupation}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <ProfileTab name="Patient Cases" setCurrentTab={setCurrentTab} />
        <ProfileTab name="Publications" setCurrentTab={setCurrentTab} />
        <ProfileTab name="Social Media" setCurrentTab={setCurrentTab} />
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
