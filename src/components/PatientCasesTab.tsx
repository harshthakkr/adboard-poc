import { Card } from "./common/Card";
import { ICONS } from "../constants/icons";

export const PatientCasesTab = ({
  patientCases,
}: {
  patientCases: string[];
}) => {
  return (
    <div className="space-y-3">
      {patientCases.map((patientCase, index) => (
        <Card key={index} className="flex items-start gap-3">
          <img src={ICONS.QUOTES} alt="Patient case quote" />
          <p>{patientCase}</p>
        </Card>
      ))}
    </div>
  );
};
