# Portfolio Website Setup Guide

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# Clone the repository from the "fix" branch
git clone -b fix https://github.com/its-kundan/dev-portfolio.git
cd dev-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### 2. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Required File Structure

```
dev-portfolio/
├── public/
│   ├── data.json                 # Your portfolio data (UPDATE THIS)
│   ├── avatar.jpg               # Your profile picture
│   ├── resume.pdf              # Your CV/Resume
│   └── projects/               # Project images folder
│       ├── ecommerce.jpg
│       ├── taskmanager.jpg
│       └── weather.jpg
├── components/                  # React components
├── app/                        # Next.js app directory
├── lib/                        # Utility functions
└── setup.md                    # This file
```

## 📝 Data Customization Guide

### Step 1: Update Personal Information

Edit `public/data.json` and replace the personal section:

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
    "avatar": "/avatar.jpg",
    "experience": "X+ Years",
    "topSkills": ["Your", "Top", "Skills", "Here"],
    "bio": "Your professional bio description",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://www.linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "dribbble": "https://dribbble.com/yourusername"
    }
  }
}
```

### Step 2: Update Skills Section

Replace the skills arrays with your actual skills:

```json
{
  "skills": {
    "frontend": ["React", "Next.js", "TypeScript", "Your Frontend Skills"],
    "backend": ["Node.js", "Python", "Your Backend Skills"],
    "tools": ["VS Code", "Git", "Your Tools"],
    "devops": ["Docker", "AWS", "Your DevOps Skills"],
    "testing": ["Jest", "Your Testing Tools"],
    "database": ["PostgreSQL", "MongoDB", "Your Databases"],
    "other": ["Your Other Skills"],
    "additionalExpertise": [
      "Your Expertise Area 1",
      "Your Expertise Area 2",
      "Your Expertise Area 3"
    ]
  }
}
```

### Step 3: Update Work Experience

Replace the experience array with your actual work history:

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
        "Your key achievement 2",
        "Your key achievement 3"
      ]
    }
  ]
}
```

### Step 4: Update Projects

Replace the projects array with your actual projects:

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
        "Your project feature 2",
        "Your project feature 3"
      ]
    }
  ]
}
```

### Step 5: Update Education

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

### Step 6: Update Certifications

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

### Step 7: Update Interests

Replace with your actual interests:

```json
{
  "interests": [
    "Your Interest 1",
    "Your Interest 2",
    "Your Interest 3",
    "Your Interest 4"
  ]
}
```

## 🖼️ Required Images

### 1. **Profile Picture**
- **File**: `public/avatar.jpg`
- **Size**: 400x400px (square, 1:1 ratio)
- **Format**: JPG or PNG
- **Usage**: Hero section and About section profile display

### 2. **Project Images**
Create a `public/projects/` folder and add these images:

#### Project 1: E-Commerce Platform
- **File**: `public/projects/ecommerce.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG

#### Project 2: Task Management App
- **File**: `public/projects/taskmanager.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG

#### Project 3: Weather Dashboard
- **File**: `public/projects/weather.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG

### 3. **Resume/CV**
- **File**: `public/resume.pdf`
- **Format**: PDF
- **Usage**: Download link in Hero section

## 🎨 Image Specifications

### Profile Picture Guidelines:
- **High quality**: At least 400x400px
- **Professional**: Clean background, good lighting
- **Square format**: 1:1 aspect ratio
- **File size**: Under 500KB for fast loading

### Project Image Guidelines:
- **Consistent size**: All project images should be the same dimensions
- **High quality**: Clear screenshots or mockups
- **Professional**: Clean, well-lit screenshots
- **File size**: Under 1MB each for fast loading

## 🚀 Deployment Instructions

### Local Development:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Vercel Deployment:
1. **Push to GitHub**: Commit and push your code to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
3. **Deploy**: Vercel will build and deploy automatically
4. **Custom Domain** (Optional): Add your custom domain in Vercel settings

## 🔧 Customization Options

### 1. **Colors and Theme**
Edit `tailwind.config.js` to customize:
- Primary colors
- Dark mode colors
- Custom color palette

### 2. **Styling**
Modify `app/globals.css` for:
- Custom CSS variables
- Additional animations
- Custom utility classes

### 3. **Components**
Each component can be customized in the `components/` folder:
- `Hero.tsx` - Landing section
- `About.tsx` - About section
- `Skills.tsx` - Skills display
- `Experience.tsx` - Work experience
- `Projects.tsx` - Project showcase
- `Education.tsx` - Education and certifications
- `Contact.tsx` - Contact form

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 SEO Optimization

The portfolio includes:
- Meta tags for SEO
- Open Graph tags for social sharing
- Structured data for search engines
- Fast loading times
- Mobile-friendly design

## 🔄 Content Updates

To update your portfolio content:
1. **Edit** `public/data.json` with new information
2. **Add/Replace** images in the `public/` folder
3. **Commit and push** to GitHub
4. **Vercel automatically redeploys** with new content

## 📊 Performance Optimization

The portfolio is optimized for:
- Fast loading times
- SEO-friendly structure
- Mobile performance
- Accessibility compliance
- Modern web standards

## 🛠️ Troubleshooting

### Common Issues:
1. **Images not loading**: Check file paths in `public/` folder
2. **Build errors**: Ensure all required files are present
3. **Styling issues**: Check Tailwind CSS configuration
4. **Deployment issues**: Verify Vercel build logs

### Support:
- Check Next.js documentation for framework issues
- Review Tailwind CSS docs for styling problems
- Check Vercel documentation for deployment issues

## ✅ Checklist

Before deploying, ensure you have:

- [ ] Profile picture (`public/avatar.jpg`)
- [ ] Project images (`public/projects/` folder)
- [ ] Resume/CV (`public/resume.pdf`)
- [ ] Updated `public/data.json` with your information
- [ ] All social media links working
- [ ] Project links (GitHub, live demos) working
- [ ] Contact information correct
- [ ] Skills and experience updated
- [ ] Education and certifications current

## 🎉 Ready to Deploy!

Once you've completed the checklist, your portfolio is ready for deployment. The setup provides a professional, responsive, and SEO-optimized portfolio website that showcases your skills and projects effectively.
