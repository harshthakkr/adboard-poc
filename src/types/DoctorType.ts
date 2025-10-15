export interface Doctor {
  id: number;
  name: string[];
  occupation: string;
  message: string;
  patientCases: string[];
  publications: {
    journal: string;
    year: number;
    title: string;
    description: string;
  }[];
  socialMedia: {
    logo: string;
    text: string;
  }[];
  isActive: boolean;
}

export type Doctors = Doctor[];
