# Portfolio Website Setup Guide

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# Clone the repository from the master branch (final version)
git clone https://github.com/its-kundan/dev-portfolio.git
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
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
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
Create a `public/projects/` folder and add your project images:

#### Example Project Images:
- **File**: `public/projects/project1.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG
- **Content**: Screenshots or mockups of your projects

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

### Step 1: Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (test locally)
npm run build
```

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Customize portfolio with my information"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-portfolio-repo.git

# Push to GitHub
git push -u origin master
```

### Step 3: Deploy to Vercel

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)
2. **Sign up/Login**: Use your GitHub account
3. **Create New Project**: Click "New Project"
4. **Import Repository**: Select your GitHub portfolio repository
5. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Deploy**: Click "Deploy"
7. **Wait for Build**: Vercel will build and deploy automatically
8. **Your Portfolio is Live**: Get your live URL (e.g., `https://your-portfolio.vercel.app`)

### Step 4: Custom Domain (Optional)
1. **In Vercel Dashboard**: Go to your project settings
2. **Domains Section**: Click "Add Domain"
3. **Enter Domain**: Add your custom domain
4. **Configure DNS**: Follow Vercel's DNS configuration instructions
5. **Update Data**: Update `websiteUrl` in `public/data.json`

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

## ✅ Complete Setup Checklist

Before deploying, ensure you have:

- [ ] Cloned the repository from master branch
- [ ] Installed dependencies with `npm install`
- [ ] Updated `public/data.json` with your information
- [ ] Added profile picture (`public/avatar.jpg`)
- [ ] Added project images (`public/projects/` folder)
- [ ] Added resume/CV (`public/resume.pdf`)
- [ ] Updated all social media links
- [ ] Updated project links (GitHub, live demos)
- [ ] Verified contact information
- [ ] Updated skills and experience
- [ ] Updated education and certifications
- [ ] Tested locally with `npm run dev`
- [ ] Pushed changes to GitHub
- [ ] Connected repository to Vercel
- [ ] Successfully deployed to Vercel

## 🎉 Quick Deployment Summary

1. **Clone**: `git clone https://github.com/its-kundan/dev-portfolio.git`
2. **Customize**: Update `public/data.json` and add your images
3. **Test**: Run `npm run dev` to test locally
4. **Push**: Commit and push to GitHub
5. **Deploy**: Connect to Vercel and deploy
6. **Share**: Your portfolio is live! 🚀

## 📞 Need Help?

- **GitHub Issues**: Open an issue on the repository
- **Vercel Support**: Check Vercel documentation
- **Next.js Docs**: Visit nextjs.org/docs
- **Tailwind CSS**: Visit tailwindcss.com/docs

---

**Your professional portfolio is ready to showcase your skills! 🎯**
