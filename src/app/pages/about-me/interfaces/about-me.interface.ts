export interface IExperience {
  companyImagePath: string;
  title: string;
  company: string;
  companyCity: string;
  companyState: string;
  startDate: string;
  endDate: string;
  experienceBullets: string[];
}

export interface IEducation {
  universityName: string;
  degree: string;
  degreeFocus: string;
  startDate: string;
  endDate: string;
  graduated: boolean;
  educationNotes: string[];
}

export interface IProfileLinks {
  github: string;
  linkedIn: string;
}
