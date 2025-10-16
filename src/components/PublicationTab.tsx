import { Card } from "./common/Card";

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
        <Card key={index} className="space-y-2">
          <div className="flex justify-between font-medium text-text-muted">
            <span>{publication.journal}</span>
            <span>{publication.year}</span>
          </div>
          <h3 className="font-semibold text-text-dark">{publication.title}</h3>
          <p className="text-text-muted">{publication.description}</p>
        </Card>
      ))}
    </div>
  );
};
