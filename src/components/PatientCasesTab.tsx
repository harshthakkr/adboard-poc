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
          className="flex items-start gap-3 bg-white p-3 rounded-2xl hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        >
          <img src="/Quotes.svg" alt="Patient case quote" />
          <p>{patientCase}</p>
        </div>
      ))}
    </div>
  );
};
