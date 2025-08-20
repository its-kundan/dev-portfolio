export interface Personal {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  experience: string;
  topSkills: string[];
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
  tools: string[];
  devops: string[];
  testing: string[];
  database: string[];
  other: string[];
  additionalExpertise: string[];
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
  metadata: {
    websiteUrl: string;
    siteName: string;
  };
  personal: Personal;
  content: {
    sections: {
      hero: {
        title: string;
        downloadCV: string;
      };
      about: {
        title: string;
        subtitle: string;
        storyTitle: string;
        storyContent: string[];
        skillsPreviewTitle: string;
      };
      skills: {
        title: string;
        subtitle: string;
        additionalExpertiseTitle: string;
      };
      experience: {
        title: string;
        subtitle: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
      };
      projects: {
        title: string;
        subtitle: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
      };
      education: {
        title: string;
        subtitle: string;
        educationTitle: string;
        certificationsTitle: string;
        continuousLearningTitle: string;
        onlineCoursesTitle: string;
        focusAreasTitle: string;
        onlineCourses: string[];
        focusAreas: string[];
      };
      contact: {
        title: string;
        subtitle: string;
        connectTitle: string;
        connectDescription: string;
        availabilityTitle: string;
        availabilityDescription: string;
        sendMessageTitle: string;
        ctaTitle: string;
        ctaDescription: string;
        emailMeButton: string;
        linkedinButton: string;
      };
    };
  };
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  interests: string[];
}
