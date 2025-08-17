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
      personal: {
        name: "Error Loading Data",
        title: "Developer",
        tagline: "Data could not be loaded",
        email: "",
        phone: "",
        location: "",
        avatar: "",
        bio: "Unable to load portfolio data.",
        social: {
          github: "",
          linkedin: "",
          twitter: "",
          dribbble: ""
        }
      },
      skills: {
        frontend: [],
        backend: [],
        devops: [],
        tools: []
      },
      experience: [],
      projects: [],
      education: [],
      certifications: [],
      interests: []
    };
  }
}
