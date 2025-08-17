import { PortfolioData } from './types';

// Function to fetch portfolio data from public/data.json
export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    // Check if we're on the server side
    if (typeof window === 'undefined') {
      // Server-side: use dynamic import for Node.js modules
      const fs = await import('fs');
      const path = await import('path');
      const dataPath = path.join(process.cwd(), 'public', 'data.json');
      const fileContent = fs.readFileSync(dataPath, 'utf8');
      const data: PortfolioData = JSON.parse(fileContent);
      return data;
    } else {
      // Client-side: fetch from public directory
      const response = await fetch('/data.json');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      
      const data: PortfolioData = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    // Return a fallback structure if the JSON file can't be loaded
    return {
      metadata: {
        websiteUrl: "https://example.com",
        siteName: "Developer Portfolio"
      },
      personal: {
        name: "Error Loading Data",
        title: "Developer",
        tagline: "Data could not be loaded",
        email: "",
        phone: "",
        location: "",
        avatar: "",
        experience: "0+ Years",
        topSkills: ["React", "Next.js", "TypeScript"],
        bio: "Unable to load portfolio data.",
        social: {
          github: "",
          linkedin: "",
          twitter: "",
          dribbble: ""
        }
      },
      content: {
        sections: {
          hero: {
            title: "Learn More",
            downloadCV: "Download CV"
          },
          about: {
            title: "About Me",
            subtitle: "Get to know me better and understand my journey in the world of technology",
            storyTitle: "My Story",
            storyContent: [
              "I'm passionate about creating user-friendly applications that solve real-world problems.",
              "When I'm not coding, you can find me exploring new technologies and contributing to open-source projects."
            ],
            skillsPreviewTitle: "What I Do Best"
          },
          skills: {
            title: "My Skills",
            subtitle: "Technologies and tools I use to bring ideas to life",
            additionalExpertiseTitle: "Additional Expertise"
          },
          experience: {
            title: "Work Experience",
            subtitle: "My professional journey and the companies I've had the pleasure to work with",
            ctaTitle: "Ready to Work Together?",
            ctaDescription: "I'm always open to new opportunities and exciting projects.",
            ctaButton: "Get In Touch"
          },
          projects: {
            title: "Featured Projects",
            subtitle: "A showcase of my recent work and the technologies I've used to bring ideas to life",
            ctaTitle: "Have a Project in Mind?",
            ctaDescription: "I'm always excited to work on new and challenging projects.",
            ctaButton: "Start a Project"
          },
          education: {
            title: "Education & Certifications",
            subtitle: "My academic background and professional certifications that support my expertise",
            educationTitle: "Education",
            certificationsTitle: "Certifications",
            continuousLearningTitle: "Continuous Learning",
            onlineCoursesTitle: "Online Courses & Platforms",
            focusAreasTitle: "Current Focus Areas",
            onlineCourses: [
              "Coursera - Machine Learning Specialization",
              "Udemy - Advanced React & TypeScript"
            ],
            focusAreas: [
              "Advanced TypeScript & React Patterns",
              "Cloud Architecture & DevOps"
            ]
          },
          contact: {
            title: "Get In Touch",
            subtitle: "Ready to start a project or just want to chat? I'd love to hear from you!",
            connectTitle: "Let's Connect",
            connectDescription: "I'm always interested in new opportunities and exciting projects.",
            availabilityTitle: "Availability",
            availabilityDescription: "I'm currently available for freelance work and full-time opportunities.",
            sendMessageTitle: "Send Message",
            ctaTitle: "Let's Build Something Amazing Together",
            ctaDescription: "I'm excited to hear about your project and see how we can work together.",
            emailMeButton: "Email Me",
            linkedinButton: "Connect on LinkedIn"
          }
        }
      },
      skills: {
        frontend: [],
        backend: [],
        tools: [],
        devops: [],
        testing: [],
        database: [],
        other: [],
        additionalExpertise: []
      },
      experience: [],
      projects: [],
      education: [],
      certifications: [],
      interests: []
    };
  }
}
