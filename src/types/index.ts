export type UserRole = 'candidate' | 'recruiter' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  headline?: string;
  location?: string;
  about?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  workArrangement: 'remote' | 'hybrid' | 'on-site';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  postedAt: string;
  source: string;
}

export type ApplicationStatus = 
  | 'Draft' 
  | 'Ready to apply' 
  | 'Applied' 
  | 'Recruiter screening' 
  | 'Interview' 
  | 'Assessment' 
  | 'Offer' 
  | 'Rejected' 
  | 'Withdrawn' 
  | 'Archived';

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  job?: Job; // Used when expanded
  status: ApplicationStatus;
  appliedAt?: string;
  updatedAt: string;
  events: ApplicationEvent[];
  resumeId?: string;
  coverLetterId?: string;
  notes?: string;
  companyName: string; // Denormalized for easier display when job isn't expanded
  jobTitle: string; // Denormalized for easier display when job isn't expanded
}

export interface ApplicationEvent {
  id: string;
  applicationId: string;
  status: ApplicationStatus;
  date: string;
  note?: string;
}

export interface Resume {
  id: string;
  userId: string;
  name: string;
  fileUrl: string;
  createdAt: string;
  updatedAt: string;
  isBase: boolean;
}
