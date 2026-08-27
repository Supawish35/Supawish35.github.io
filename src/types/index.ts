export type Language = 'th' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: 'braces' | 'cpu' | 'tools' | 'users';
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
}

export interface CertificateItem {
  title: string;
  image: string;
}

export interface ContactChannel {
  name: string;
  url: string;
  type: 'email' | 'github' | 'facebook';
}

export interface PortfolioData {
  name: string;
  role: string;
  interests: string[];
  avatar: string;
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  contacts: ContactChannel[];
  careerInterest: string;
}

