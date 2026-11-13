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
  tags?: string[];
  image: string;
  imageDark?: string;
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

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  stack: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  headline: string;
  summary: string;
  facts: string[];
  interests: string[];
  avatar: string;
  capabilities: CapabilityItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  contacts: ContactChannel[];
  careerInterest: string;
}

