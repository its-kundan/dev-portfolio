import { PortfolioData } from './types';

// Fallback data in case JSON import fails
const fallbackData: PortfolioData = {
  personal: {
    name: "Kundan Kumar",
    title: "Full Stack Developer",
    tagline: "Building scalable, impactful, and user-focused digital solutions",
    email: "kundan51kk@gmail.com",
    phone: "+91 7667886894",
    location: "India",
    avatar: "/avatar.jpg",
    bio: "Full-stack developer skilled in MERN, Next.js, PostgreSQL, AWS, and scalable cloud deployments. Experienced in building production-grade applications with a focus on performance, security, and user experience.",
    social: {
      github: "https://github.com/its-kundan",
      linkedin: "https://www.linkedin.com/in/its-kundan",
      twitter: "",
      dribbble: ""
    }
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Bootstrap"],
    backend: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "MySQL"],
    devops: ["Docker", "AWS", "GCP", "Vercel", "CI/CD", "Kubernetes"],
    tools: ["VS Code", "Git", "Postman", "Jest", "Playwright"]
  },
  experience: [
    {
      company: "Growthinker",
      position: "Full Stack Developer & Tech Lead",
      duration: "2024 - Present",
      description: "Managed all technical operations, from design to deployment, including website development, backend systems, authentication, content management, cloud hosting, and analytics integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Docker"],
      achievements: [
        "Built and deployed the company's complete digital presence",
        "Integrated secure authentication and role-based access control",
        "Optimized system performance and reduced load times by 35%"
      ]
    },
    {
      company: "OnlineJaoo.com",
      position: "Software Development Intern",
      duration: "2023",
      description: "Worked on multiple projects including developer portfolio, real-time chat app, job portal, and coin toss game.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      achievements: [
        "Developed full-stack projects from scratch",
        "Improved UI responsiveness and accessibility",
        "Collaborated with team members to enhance product features"
      ]
    }
  ],
  projects: [
    {
      title: "Learning Management System (LMS)",
      description: "An online learning platform with secure access, course management, payments, and responsive UI.",
      image: "/projects/lms.jpg",
      technologies: ["MERN", "Tailwind CSS", "JWT", "Razorpay"],
      github: "https://github.com/its-kundan",
      live: "https://lms-demo.vercel.app",
      features: [
        "JWT + bcrypt authentication",
        "Role-based access control",
        "Admin course/lecture CRUD",
        "Integrated Razorpay payment gateway"
      ]
    },
    {
      title: "English-Speaking Course E-Commerce Website",
      description: "A modern, responsive e-commerce platform for English courses, built with Next.js 14, PostgreSQL, and Turborepo.",
      image: "/projects/english-course.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker"],
      github: "https://github.com/its-kundan",
      live: "",
      features: [
        "Full checkout flow",
        "Search and filtering",
        "Authentication with NextAuth",
        "Admin dashboard"
      ]
    },
    {
      title: "Auto Number Dialer App",
      description: "An Android app for automated number dialing using Appium and Node.js.",
      image: "/projects/dialer.jpg",
      technologies: ["Node.js", "Appium", "JavaScript", "Android"],
      github: "",
      live: "",
      features: [
        "Automated dialing sequence",
        "Customizable delay intervals",
        "Supports bulk contact uploads"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Your University Name",
      duration: "2021 - 2025",
      description: "Focused on software development, web technologies, and scalable systems."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "AWS-CCP-123456"
    },
    {
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      date: "2023",
      credential: "MDB-DBA-789012"
    }
  ],
  interests: [
    "Open Source Contribution",
    "Tech Blogging",
    "System Architecture",
    "Performance Optimization",
    "Cloud Computing",
    "DevOps Practices"
  ]
};

export function getPortfolioData(): PortfolioData {
  try {
    // Try to import JSON data first
    const portfolioData = require('../public/data.json') as PortfolioData;
    return portfolioData;
  } catch (error) {
    console.warn('JSON import failed, using fallback data:', error);
    // Return fallback data if JSON import fails
    return fallbackData;
  }
}
