export const PatientCasesTab = ({
  patientCases,
}: {
  patientCases: string[];
}) => {
  return (
    <div className="space-y-3">
      {patientCases.map((patientCase, index) => (
        <div
          key={index}
          className="flex items-start gap-3 bg-white p-3 rounded-2xl"
        >
          <img src="/Quotes.svg" alt="Quotes" />
          <p>{patientCase}</p>
        </div>
      ))}
    </div>
  );
};
