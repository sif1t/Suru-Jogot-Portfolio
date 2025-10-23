# 🌌 Suru-Jogot Portfolio - Futuristic Web Portfolio

A stunning, fully animated futuristic portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a unique "digital universe" theme with floating planets, orbiting nodes, and glassmorphism design.

![Portfolio Preview](preview.png)

## ✨ Features

### 🏠 Homepage / Universe Overview
- Dynamic name display: "HI, I'M SIFAT!"
- Short bio: "Web Developer"
- Dark gradient background with animated stars and particles
- Interactive floating planet navigation representing different sections
- Glassmorphism cards with blur effects
- Smooth scroll navigation between sections

### 👤 About Section
- Floating glass card with fade/slide animations
- Typewriter animation for bio text
- Animated skill progress bars with glow effects:
  - HTML: 90%
  - CSS: 85%
  - Tailwind CSS: 80%
  - Bootstrap: 60%
  - JavaScript: 80%
  - Node.js: 60%
  - Vue.js: 50%
  - React.js: 70%
- Orbiting skill planets visualization

### 💼 Experience & Education Section
- Floating cards with orbiting animations
- Hover effects with glow
- Experience timeline:
  - Web Design (Industrial Attachment, Bd Task Limited) - 2022
  - Web Developer (DBC News) - 2023-Present
- Education milestones:
  - PSC (2012)
  - JSC (2015)
  - SSC (2018)
  - Diploma (2023)

### 🚀 Services Section
- Two main orbiting service cards:
  - **Web Development**: React, Next.js, Node.js, API Integration
  - **Web Design**: UI/UX, Responsive Layouts, Prototyping
- Animated background gradients
- Rotating icons on hover
- Orbiting planets visualization

### 📁 Portfolio Section
- Grid layout of portfolio items
- Hover effects: glow, zoom, shadow
- Click to open modal with project details
- Sample projects included:
  - E-Commerce Platform
  - Social Media Dashboard
  - Portfolio Website
  - Task Management App
  - Weather App
  - Blog Platform
- Easy to replace with your own projects

### 📬 Contact Section
- Glassmorphism contact form with animated labels
- Form fields: Name, Email, Message
- Contact information:
  - Email: Arifeen.sifat@gmail.com
  - Phone: 01306842102
  - Location: Bangladesh
- Social media links (GitHub, LinkedIn, Twitter)
- Hover animations on all interactive elements

### 🎨 Visual Effects
- Particle background animation
- Twinkling stars
- Floating planets and orbs
- Glassmorphism design throughout
- Neon glow effects
- Smooth scroll between sections
- Responsive design for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd "Suru-Jogot Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Personal Information
Edit `components/HeroSection.tsx`:
- Change name and bio text
- Update button actions

### 2. About Section
Edit `components/AboutSection.tsx`:
- Update the bio text in the `fullText` variable
- Modify skills array with your own skills and percentages

### 3. Experience & Education
Edit `components/ExperienceSection.tsx`:
- Update the `experiences` array with your work experience
- Update the `education` array with your education background

### 4. Services
Edit `components/ServicesSection.tsx`:
- Modify the `services` array with your service offerings
- Change descriptions, icons, and features

### 5. Portfolio Projects
Edit `components/PortfolioSection.tsx`:
- Update the `portfolioItems` array with your own projects
- Add your project images to the `public/portfolio/` directory
- Update links, descriptions, and tags

### 6. Contact Information
Edit `components/ContactSection.tsx`:
- Change email address
- Update phone number
- Modify location
- Update social media links

### 7. Color Scheme
Edit `tailwind.config.js`:
- Modify the `cosmic` color palette
- Change gradient colors throughout components

### 8. Animations
Customize animation speeds and effects in individual component files using Framer Motion properties.

## 📂 Project Structure

```
Suru-Jogot Portfolio/
├── components/
│   ├── AboutSection.tsx          # About me with skills
│   ├── ContactSection.tsx        # Contact form and info
│   ├── ExperienceSection.tsx     # Experience & education
│   ├── FloatingNavigation.tsx    # Floating planet navigation
│   ├── HeroSection.tsx           # Homepage hero
│   ├── ParticleBackground.tsx    # Particle effects
│   ├── PortfolioSection.tsx      # Portfolio grid & modal
│   ├── ServicesSection.tsx       # Services offered
│   └── StarsBackground.tsx       # Twinkling stars
├── pages/
│   ├── _app.tsx                  # Next.js app wrapper
│   ├── _document.tsx             # HTML document
│   └── index.tsx                 # Main page
├── styles/
│   └── globals.css               # Global styles & animations
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
└── README.md                     # This file
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: React Icons
- **Language**: TypeScript
- **Fonts**: Google Fonts (Inter)

## 🎯 Features Checklist

✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth scroll navigation  
✅ Floating planet navigation  
✅ Glassmorphism design  
✅ Particle background  
✅ Twinkling stars  
✅ Animated skills progress  
✅ Typewriter effect  
✅ Portfolio modal  
✅ Contact form with validation  
✅ Hover animations  
✅ Orbiting planets visualization  
✅ Neon glow effects  
✅ SEO optimized  
✅ Fast performance  

## 🌟 Tips for Best Results

1. **Add Your Images**: Replace placeholder images in the portfolio section with actual project screenshots
2. **Optimize Performance**: Compress images and use Next.js Image component for better loading
3. **Test Responsiveness**: Check the website on different devices and screen sizes
4. **Customize Colors**: Match the color scheme to your personal brand
5. **Update Content**: Keep your skills, experience, and projects up to date
6. **Add Analytics**: Integrate Google Analytics or similar tools to track visitors
7. **Deploy**: Use Vercel, Netlify, or similar platforms for easy deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sifat**  
Email: Arifeen.sifat@gmail.com  
Phone: 01306842102

## 🙏 Acknowledgments

- Inspired by cosmic and futuristic design trends
- Built with modern web technologies
- Designed for maximum visual impact and user experience

---

**Made with ❤️ and ☕ by Sifat**

Enjoy your futuristic portfolio! 🚀✨
