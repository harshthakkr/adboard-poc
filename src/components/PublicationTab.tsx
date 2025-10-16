export const PublicationTab = ({
  publications,
}: {
  publications: {
    journal: string;
    year: number;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className="space-y-3">
      {publications.map((publication, index) => (
        <div
          key={index}
          className="space-y-2 p-3 rounded-2xl bg-white hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
        >
          <div className="flex justify-between font-medium text-[#53596C]">
            <span>{publication.journal}</span>
            <span>{publication.year}</span>
          </div>
          <h3 className="font-semibold text-[#16191D]">{publication.title}</h3>
          <p className="text-[#53596C]">{publication.description}</p>
        </div>
      ))}
    </div>
  );
};
