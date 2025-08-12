export interface Personal {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  bio: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    dribbble: string;
  };
}

export interface Skills {
  frontend: string[];
  backend: string[];
  devops: string[];
  tools: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  features: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential: string;
}

export interface PortfolioData {
  personal: Personal;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  interests: string[];
}
