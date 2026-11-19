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

export interface ProjectCaseStudy {
  role: string;
  problem: string;
  architecture: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  imageDark?: string;
  displayUrl: string;
  githubUrl: string;
  demoUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface MoreWorkItem {
  id: string;
  title: string;
  badge: string;
  badgeTone: 'accent' | 'coursework' | 'neutral';
  summary: string;
  stack: string[];
  githubUrl: string;
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
  href: string;
}

export interface AboutItem {
  label: string;
  value: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  availability: string;
  headline: string;
  summary: string;
  coreStack: string[];
  facts: string[];
  interests: string[];
  avatar: string;
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    details: AboutItem[];
  };
  capabilities: CapabilityItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  moreWork: MoreWorkItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  contacts: ContactChannel[];
  careerInterest: string;
}
