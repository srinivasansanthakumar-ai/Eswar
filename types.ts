export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface ProjectItem {
  title: string;
  tech: string;
  description: string;
}

export interface InternshipItem {
  company: string;
  role: string;
  location: string;
  duration: string;
}

export interface CertificationItem {
  title: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  role?: string;
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  contact: ContactInfo;
  skills: {
    languages: string[];
    tools: string[];
    softSkills: string[];
    spokenLanguages: string[];
  };
  internships: InternshipItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}