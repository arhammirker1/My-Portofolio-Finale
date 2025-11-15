# Arham Mirker - Portfolio Website

A modern, futuristic portfolio website showcasing AI-powered projects, full-stack development work, and data-driven systems. Built with Next.js 15, React, TypeScript, and featuring stunning 3D WebGL effects.

![Portfolio Preview](https://my-portofolio-finale.vercel.app/og-image.png)

## 🚀 Features

- **3D WebGL Background**: Custom neon crystal city shader with interactive ray-marching visualization
- **Scroll-Triggered Story Section**: Cinematic word-by-word reveal animation
- **Orbital Timeline**: Interactive 3D project showcase with orbital navigation
- **Glassmorphism Design**: Modern UI with blur effects and transparent layers
- **Animated Testimonials**: Staggered card carousel with smooth transitions
- **Interactive Dock Navigation**: macOS-style dock with magnification effects
- **Contact Form Integration**: Direct submissions to Google Sheets
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Performance Focused**: Optimized WebGL rendering and lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **3D Graphics**: Custom WebGL2 shaders
- **Forms**: React Hook Form (via contact integration)
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Global styles and animations
│   ├── robots.ts           # SEO robots configuration
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── neon-crystal-city.tsx      # WebGL shader background
│   ├── hero-section.tsx           # Landing hero with typewriter
│   ├── about-section.tsx          # Scroll-triggered story
│   ├── projects-timeline-section.tsx  # Orbital project showcase
│   ├── skills-section.tsx         # Skills grid with glowing effects
│   ├── testimonials-section.tsx   # Animated testimonial cards
│   ├── contact-section.tsx        # Contact form with Google Sheets
│   ├── navigation.tsx             # Interactive dock navigation
│   ├── dock-provider.tsx          # Dock animation system
│   └── ui/                        # Reusable UI components
└── public/
    └── og-image.png               # Open Graph preview image
```

## 🎨 Key Sections

### Hero Section
Dynamic typewriter effect cycling through specializations with custom WebGL background.

### About Section (Story)
Long-form narrative with scroll-triggered word reveal animation synchronized to viewport position.

### Projects Timeline
Interactive orbital timeline with:
- 6 major projects (RAAVC, Orange Fox, Trading Toolkit, SEO Optimization, Performance Boost, Amazon Scraper)
- Expandable project cards with details
- Connection visualization between related projects
- Energy level indicators

### Skills Section
Grid layout showcasing:
- Automation & AI Systems
- Backend & Data Engineering
- Full-Stack Web Development
- Performance Optimization
- Data-Driven Marketing
- DevOps & Deployment

### Contact Section
Integrated contact form with:
- Real-time form validation
- Google Sheets integration via Apps Script
- Animated loading states
- Success confirmation UI

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arhammirker1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Contact Form Setup
The contact form integrates with Google Sheets. To set up your own:

1. Create a Google Sheet
2. Create a Google Apps Script with the web app deployment
3. Update the `scriptURL` in `components/contact-section.tsx`:
```typescript
const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL";
```

### Metadata Customization
Update SEO and metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name – Your Title",
  description: "Your description",
  // ... other metadata
}
```

### Project Data
Edit project information in `components/projects-timeline-section.tsx`:
```typescript
const timelineData = [
  {
    id: 1,
    title: "Your Project",
    date: "YYYY-MM",
    content: "Project description",
    category: "Category",
    icon: YourIcon,
    // ...
  },
  // Add more projects
];
```

## 🎨 Customization

### Color Scheme
Modify the color palette in `app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.12 260);
  --accent: oklch(0.7 0.18 190);
  /* ... other colors */
}
```

### WebGL Shader Settings
Adjust the 3D background in `components/hero-section.tsx`:
```typescript
<NeonCrystalCity 
  cameraSpeed={1}      // Movement speed
  tileSize={2}         // City block size
  maxSteps={100}       // Ray-march quality
/>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Code splitting with Next.js dynamic imports
- Lazy loading for heavy components
- Optimized WebGL rendering (requestAnimationFrame)
- Image optimization with Next.js Image component
- CSS containment for scroll animations
- Minimal external dependencies

## 🔍 SEO Features

- Structured data (Person, WebSite schema)
- Open Graph tags for social sharing
- Twitter Card metadata
- Dynamic sitemap generation
- Robots.txt configuration
- Semantic HTML markup
- Optimized meta descriptions

## 📊 Analytics

Integrated analytics via:
- Vercel Analytics (page views, user engagement)
- Vercel Speed Insights (Core Web Vitals)

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/arhammirker1/portfolio/issues).

## 📧 Contact

Arham Mirker - [@arhammirker1](https://github.com/arhammirker1)

- Email: arhammirker1@gmail.com
- LinkedIn: [linkedin.com/in/arham-mirkar](https://www.linkedin.com/in/arham-mirkar/)
- Website: [my-portofolio-finale.vercel.app](https://my-portofolio-finale.vercel.app)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform

---

**Built with 💙 by Arham Mirker**
