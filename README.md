# Nikhil's Portfolio

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC)
![React](https://img.shields.io/badge/React-19.0-61DAFB)

A modern, minimalist portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, dark mode support, and a responsive design that showcases my projects, experience, and skills as a Software Developer.

## 🚀 Live Demo

**[Visit Portfolio →](https://pahuja.vercel.app/)**

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with smooth animations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance**: Built with Next.js 15 and optimized for speed
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user experience
- **📄 Resume Download**: Direct download link for my latest resume
- **🔗 Social Links**: Easy access to GitHub, LinkedIn, and other profiles
- **💼 Projects Showcase**: Detailed project descriptions with live demos and GitHub links
- **🏢 Experience Timeline**: Professional experience with technologies used
- **📧 Contact Form**: Built-in contact functionality

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development builds
- **Class Variance Authority** - Component styling utilities

### Deployment
- **Vercel** - Optimal hosting for Next.js applications
- **GitHub Actions** - Automated CI/CD pipeline

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 14.0.0 or later
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilpahujaa/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio

## 📝 Available Scripts

```bash
# Development with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── api/             # API routes
│   │   │   └── send-email/  # Contact form API
│   │   ├── contact/         # Contact page
│   │   ├── links/           # Links page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── sitemap.ts       # Site sitemap
│   ├── components/          # Reusable components
│   │   ├── animations/      # Animation components
│   │   ├── icons/           # Custom icon components
│   │   ├── SocialMedia.tsx  # Social media links
│   │   ├── ThemeProvider.tsx# Dark mode provider
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── lib/                 # Utility libraries
│   └── utilities/           # Helper functions
├── public/                  # Static assets
│   ├── logos/               # Technology logos
│   └── Nikhil's Resume.pdf  # Resume file
├── package.json             # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎯 Key Components

### Home Page (`src/app/page.tsx`)
- Personal introduction and bio
- Featured projects with links
- Professional experience timeline
- Social media and resume links

### Theme System
- Dark/light mode toggle
- Persistent theme preference
- Smooth theme transitions

### Animations
- Fade-in animations on scroll
- Hover effects and transitions
- Staggered loading animations

## 🚀 Deployment

This portfolio is optimized for deployment on **Vercel**:

1. **Deploy to Vercel**
   ```bash
   npx vercel
   ```

2. **Or deploy via GitHub**
   - Connect your GitHub repository to Vercel
   - Automatic deployments on every push to main branch

### Other Deployment Options
- **Netlify**: Works out of the box
- **GitHub Pages**: Requires additional configuration for App Router
- **Railway**: Supports Node.js deployments
- **Render**: Supports Node.js deployments

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `src/app/page.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/username/repo",
    link: "https://project-demo.com"
  }
];
```

### Updating Experience
Modify the `experience` array in `src/app/page.tsx`:

```typescript
const experience = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Start - End",
    description: "Role description",
    technologies: ["Tech1", "Tech2"]
  }
];
```

### Styling
- **Colors**: Modify Tailwind classes in components
- **Fonts**: Update font imports in `layout.tsx`
- **Animations**: Customize in `src/components/animations/`

## 🔧 Configuration

### Environment Variables

The contact form requires proper email configuration. Follow these steps:

#### 1. Create Environment File
Copy the example environment file:
```bash
cp .env.example .env.local
```

#### 2. Set up Gmail App Password
You need to generate an App Password for Gmail (not your regular password):

1. **Enable 2-Factor Authentication** on your Google account (required)
2. Go to **[Google App Passwords](https://myaccount.google.com/apppasswords)**
3. Select **App**: Mail
4. Select **Device**: Other (Custom name) → Enter "Portfolio"
5. Click **Generate**
6. Copy the 16-character password

#### 3. Configure Environment Variables
Edit `.env.local` with your actual values:
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_TO=recipient@gmail.com  # Optional: defaults to EMAIL_USER

# Development Settings
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

#### 4. Test Email Functionality
Restart your development server after setting up environment variables:
```bash
npm run dev
```

### Troubleshooting Email Issues

**"Missing credentials for PLAIN" Error:**
- Ensure `EMAIL_USER` and `EMAIL_PASS` are set in `.env.local`
- Verify you're using an App Password, not your regular Gmail password
- Make sure 2-Factor Authentication is enabled on your Google account

**"Invalid login" Error:**
- Double-check your App Password is correct
- Ensure the email address matches your Google account
- Try generating a new App Password

**Network/Connection Errors:**
- Check your internet connection
- Verify Gmail SMTP isn't blocked by your firewall

### Next.js Config
Customize `next.config.ts` for additional optimizations.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Nikhil Pahuja** - Software Developer specializing in building scalable APIs and secure backend systems. Experienced with Node.js, Express, and MongoDB, passionate about delivering robust, high-performance solutions.

### Connect with me:
- 🌐 **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)
- 💼 **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 **GitHub**: [github.com/nikhilpahujaa](https://github.com/nikhilpahujaa)
- 📧 **Email**: your.email@example.com

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**

*Built with ❤️ using Next.js and TypeScript*


