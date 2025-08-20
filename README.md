# Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a modern design that showcases your professional work.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark/light mode toggle
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Contact Form**: Functional contact form with validation
- **Data-Driven**: All content loaded from JSON files for easy customization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository from the "fix" branch**
   ```bash
   git clone -b fix https://github.com/its-kundan/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dev-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   ├── Education.tsx     # Education section
│   ├── Contact.tsx       # Contact section
│   └── Loading.tsx       # Loading component
├── lib/                  # Utility functions
│   ├── data.ts           # Data loading functions
│   └── types.ts          # TypeScript type definitions
├── public/               # Static assets
│   └── data.json         # Portfolio data (UPDATE THIS)
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### 1. Update Personal Information

Edit `public/data.json` to update your personal information:

```json
{
  "metadata": {
    "websiteUrl": "https://your-portfolio.vercel.app/",
    "siteName": "Your Name Portfolio"
  },
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "tagline": "Your professional tagline",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, Country",
    "bio": "Your professional bio description",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "dribbble": "https://dribbble.com/yourusername"
    }
  }
}
```

### 2. Update Skills

Modify the skills section in `public/data.json`:

```json
{
  "skills": {
    "frontend": ["React", "Next.js", "TypeScript", "Your Frontend Skills"],
    "backend": ["Node.js", "Python", "Your Backend Skills"],
    "devops": ["Docker", "AWS", "Your DevOps Skills"],
    "tools": ["VS Code", "Git", "Your Tools"]
  }
}
```

### 3. Add Your Experience

Update the experience array in `public/data.json`:

```json
{
  "experience": [
    {
      "company": "Your Company Name",
      "position": "Your Job Title",
      "duration": "2023 - Present",
      "description": "Your role description and responsibilities",
      "technologies": ["React", "Node.js", "Your Technologies"],
      "achievements": [
        "Your key achievement 1",
        "Your key achievement 2"
      ]
    }
  ]
}
```

### 4. Add Your Projects

Update the projects array in `public/data.json`:

```json
{
  "projects": [
    {
      "title": "Your Project Name",
      "description": "Your project description",
      "image": "/projects/your-project-image.jpg",
      "technologies": ["React", "Node.js", "Your Technologies"],
      "github": "https://github.com/yourusername/project",
      "live": "https://your-project-demo.com",
      "features": [
        "Your project feature 1",
        "Your project feature 2"
      ]
    }
  ]
}
```

### 5. Update Education

Replace with your actual education:

```json
{
  "education": [
    {
      "degree": "Your Degree Name",
      "school": "Your University/Institution",
      "duration": "2020 - 2024",
      "description": "Your education description and focus areas"
    }
  ]
}
```

### 6. Add Certifications

Add your actual certifications:

```json
{
  "certifications": [
    {
      "name": "Your Certification Name",
      "issuer": "Certification Issuer",
      "date": "2024",
      "credential": "Your Credential ID"
    }
  ]
}
```

### 7. Customize Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... customize your primary colors
        900: '#0c4a6e',
      },
      dark: {
        // ... customize your dark theme colors
      }
    }
  }
}
```

### 8. Add Images

Place your images in the `public/` directory:
- Profile photo: `public/avatar.jpg`
- Project images: `public/projects/`
- Resume: `public/resume.pdf`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `out/` directory to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js static exports.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The website includes a built-in dark mode toggle that:
- Persists user preference in localStorage
- Respects system preferences
- Provides smooth transitions between modes

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hooks** - State management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

## 📋 Setup Checklist

Before deploying, ensure you have:

- [ ] Updated `public/data.json` with your information
- [ ] Added profile picture (`public/avatar.jpg`)
- [ ] Added project images (`public/projects/` folder)
- [ ] Added resume/CV (`public/resume.pdf`)
- [ ] Updated all social media links
- [ ] Updated project links (GitHub, live demos)
- [ ] Verified contact information
- [ ] Updated skills and experience
- [ ] Updated education and certifications

---

**Happy coding! 🚀**
