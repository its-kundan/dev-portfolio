# Portfolio Website Setup Guide

## 📁 Required File Structure

```
portfolio-t/
├── public/
│   ├── data.json                 # Your portfolio data
│   ├── avatar.jpg               # Your profile picture
│   ├── resume.pdf              # Your CV/Resume
│   └── projects/               # Project images folder
│       ├── lms.jpg
│       ├── english-course.jpg
│       └── dialer.jpg
├── components/                  # React components
├── app/                        # Next.js app directory
├── lib/                        # Utility functions
└── setup.md                    # This file
```

## 🖼️ Required Images

### 1. **Profile Picture**
- **File**: `public/avatar.jpg`
- **Size**: 400x400px (square, 1:1 ratio)
- **Format**: JPG or PNG
- **Usage**: Hero section and About section profile display
- **Description**: Professional headshot or profile picture

### 2. **Project Images**
Create a `public/projects/` folder and add these images:

#### Project 1: Learning Management System (LMS)
- **File**: `public/projects/lms.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG
- **Description**: Screenshot or mockup of your LMS project

#### Project 2: English Course E-Commerce
- **File**: `public/projects/english-course.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG
- **Description**: Screenshot or mockup of your e-commerce website

#### Project 3: Auto Number Dialer App
- **File**: `public/projects/dialer.jpg`
- **Size**: 800x600px (4:3 ratio recommended)
- **Format**: JPG or PNG
- **Description**: Screenshot or mockup of your Android app

### 3. **Resume/CV**
- **File**: `public/resume.pdf`
- **Format**: PDF
- **Usage**: Download link in Hero section
- **Description**: Your professional resume or CV

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
- **Format**: JPG for photos, PNG for screenshots with text

## 📝 Content Setup

### 1. **Update Personal Information**
Edit `public/data.json` and update:
- Name, title, tagline
- Email, phone, location
- Bio description
- Social media links (GitHub, LinkedIn, etc.)

### 2. **Update Skills**
Modify the skills arrays in `public/data.json`:
- Frontend technologies
- Backend technologies
- DevOps tools
- Development tools

### 3. **Update Experience**
Replace the experience entries with your actual work history:
- Company names
- Job titles
- Duration
- Descriptions
- Technologies used
- Key achievements

### 4. **Update Projects**
Replace project entries with your actual projects:
- Project titles
- Descriptions
- Technologies used
- GitHub links
- Live demo links
- Key features

### 5. **Update Education**
Replace with your actual education:
- Degree name
- University/Institution
- Duration
- Description

### 6. **Update Certifications**
Add your actual certifications:
- Certification names
- Issuing organizations
- Dates
- Credential IDs (if applicable)

### 7. **Update Interests**
Modify the interests array with your actual interests and hobbies.

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

### Environment Variables:
No environment variables are required for this portfolio setup.

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
