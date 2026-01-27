# Jenaro Portfolio Website - Development Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component Map](#component-map)
4. [Design System](#design-system)
5. [Project Structure](#project-structure)
6. [Development Guide](#development-guide)
7. [Customization Guide](#customization-guide)

---

## Project Overview

**Jenaro Portfolio** is a modern, terminal-styled portfolio website built with React and Vite. The site showcases professional services with a command-prompt aesthetic featuring a black background, green accents, and white text.

### Key Features
- ⚡ **Performance**: Built with Vite for lightning-fast development and production builds
- 🎨 **Terminal Design**: Command-prompt inspired UI with modern technical feel
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Semantic HTML and proper ARIA attributes
- 🎭 **Animated**: Typing animations, hover effects, and smooth transitions
- 🎯 **Hero's Journey**: Content positions visitor as hero, Jenaro as guide

### Tech Stack
- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Component logic

---

## Architecture

### High-Level Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      App.jsx (Root)                         │
│  ├─ Manages overall page structure                          │
│  └─ Renders all sections in sequence                        │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
    ┌─────────┐      ┌─────────┐        ┌──────────┐
    │ Header  │      │ Sections│        │  Footer  │
    │         │      │         │        │          │
    │ Sticky  │      │ 6 Major │        │ Config   │
    │ Nav     │      │Sections │        │ Style    │
    └─────────┘      └─────────┘        └──────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
    ┌─────────┐      ┌──────────┐        ┌────────────┐
    │  Hero   │      │ Problem  │        │ Solution   │
    │ Section │      │ Section  │        │  Section   │
    └─────────┘      └──────────┘        └────────────┘
        │                   │                   │
        ▼                   ▼                   ▼
    ┌─────────┐      ┌──────────┐        ┌────────────┐
    │  Work   │      │  Trust   │        │    CTA     │
    │ Section │      │ Section  │        │  Section   │
    └─────────┘      └──────────┘        └────────────┘
```

---

## Component Map

### 📊 Complete Component Hierarchy

```
src/
├── App.jsx ................................. Main app component
│
├── components/ ............................. Reusable UI components
│   ├── Header.jsx .......................... Sticky header with logo & nav
│   │   ├── Logo with blinking cursor
│   │   └── Navigation links
│   │
│   ├── Header.css .......................... Header styles
│   │
│   ├── TerminalText.jsx ................... Typing animation component
│   │   └── Props: text, delay, speed
│   │
│   ├── TerminalText.css ................... Typing animation styles
│   │
│   ├── Divider.jsx ........................ Section divider line
│   │
│   ├── Divider.css ........................ Divider styles
│   │
│   ├── Button.jsx ......................... Reusable command-style button
│   │   ├── Props: children, onClick, variant
│   │   └── Variants: primary, secondary
│   │
│   ├── Button.css ......................... Button styles with hover effects
│   │
│   ├── ProjectCard.jsx .................... Card for showcasing work
│   │   ├── Props: title, description, tags, link
│   │   └── Green border-top indicator
│   │
│   ├── ProjectCard.css .................... Project card styles
│   │
│   ├── SectionWrapper.jsx ................. Wrapper for page sections
│   │   └── Props: children, id, className
│   │
│   ├── SectionWrapper.css ................. Section wrapper styles
│   │
│   ├── Footer.jsx ......................... Config-style footer
│   │   └── Contact information display
│   │
│   └── Footer.css ......................... Footer styles
│
├── sections/ .............................. Page sections
│   ├── Hero.jsx ........................... Introduction section
│   │   ├── Uses: SectionWrapper, TerminalText, Button
│   │   ├── Features: Typing animation, feature list, image placeholder
│   │   └── Image frame with scanline effect
│   │
│   ├── Hero.css ........................... Hero section styles
│   │
│   ├── Problem.jsx ........................ Problem/pain section
│   │   ├── Uses: SectionWrapper
│   │   ├── Lists 5 key pain points
│   │   └── Issue markers with green accents
│   │
│   ├── Problem.css ........................ Problem section styles
│   │
│   ├── Solution.jsx ....................... Solution section
│   │   ├── Uses: SectionWrapper
│   │   ├── 5-card solution grid
│   │   └── Goals statement
│   │
│   ├── Solution.css ....................... Solution section styles
│   │
│   ├── Work.jsx ........................... Portfolio/work showcase
│   │   ├── Uses: SectionWrapper, ProjectCard
│   │   ├── 4 project examples
│   │   └── Hover effects with green glow
│   │
│   ├── Work.css ........................... Work section styles
│   │
│   ├── Trust.jsx .......................... Trust & credibility section
│   │   ├── Uses: SectionWrapper
│   │   ├── Client personas list
│   │   └── Trust statement
│   │
│   ├── Trust.css .......................... Trust section styles
│   │
│   ├── CTA.jsx ............................ Call-to-action section
│   │   ├── Uses: SectionWrapper, Button
│   │   ├── Contrast grid (cost vs. benefits)
│   │   ├── 3 testimonials
│   │   └── Final CTA button
│   │
│   └── CTA.css ............................ CTA section styles
│
├── styles/ ................................ Shared styles (optional)
│
├── App.css ................................ App-level styles
├── index.css .............................. Global theme & variables
└── main.jsx .............................. React entry point
```

### Component Dependency Graph

```
App.jsx
├── Header.jsx
│   └── (Standalone, no child components)
│
├── Hero.jsx
│   ├── SectionWrapper.jsx
│   ├── TerminalText.jsx
│   └── Button.jsx
│
├── Problem.jsx
│   └── SectionWrapper.jsx
│
├── Solution.jsx
│   └── SectionWrapper.jsx
│
├── Work.jsx
│   ├── SectionWrapper.jsx
│   └── ProjectCard.jsx (4 instances)
│
├── Trust.jsx
│   └── SectionWrapper.jsx
│
├── CTA.jsx
│   ├── SectionWrapper.jsx (3 instances)
│   ├── Button.jsx (2 instances)
│   └── No child components (direct JSX)
│
└── Footer.jsx
    └── (Standalone, no child components)
```

---

## Design System

### 🎨 Color Palette

```css
/* CSS Variables (defined in index.css) */

--bg-dark: #0b0f0e;           /* Soft black background */
--text-white: #e6e6e6;        /* Primary text color */
--text-muted: #9aa5a1;        /* Secondary/muted text */
--green-primary: #00ff88;     /* Primary green accent */
--green-secondary: #00cc6a;   /* Darker green (hover state) */
--divider: #1f2a27;           /* Divider line color */
```

### 🔤 Typography

```css
/* Font Families */
--font-mono: "JetBrains Mono", "Fira Code", monospace;  /* Headings & code */
--font-sans: "Inter", system-ui, -apple-system, sans-serif; /* Body text */

/* Size Scale */
- h1: 2.5rem
- h2: 2rem
- h3: 1.1rem
- body: 1rem (16px)
- small: 0.9rem
```

### 🎯 Component Spacing

```css
/* Standard Spacing Units */
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 4xl: 4rem

/* Section Padding */
- Default section: 4rem 0
- Mobile section: 2.5rem 0
- Container padding: 0 2rem (mobile: 0 1rem)
```

### 🎬 Animations & Transitions

```css
/* Standard Transitions */
- Hover effects: 0.3s ease
- All transitions: all 0.3s ease

/* Keyframe Animations */
- Cursor blink: 1s infinite (opacity toggle)
- Scanlines: 8s linear infinite (Y-axis movement)
- Logo spin: 360deg (unused currently)
```

### 🖱️ Interactive States

| Element | Default | Hover | Focus |
|---------|---------|-------|-------|
| Button (primary) | Green bg | Brighter green + glow | Green glow |
| Button (secondary) | Green border | Light green bg | Green glow |
| Links | Green text | Brighter green | Underline |
| Cards | Subtle border | Green border + glow | Box shadow |
| Project Cards | 1px border | Lifted + glow | Green border |

---

## Project Structure

### Complete File Organization

```
jenaro/ (root)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── TerminalText.jsx
│   │   ├── TerminalText.css
│   │   ├── Divider.jsx
│   │   ├── Divider.css
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectCard.css
│   │   ├── SectionWrapper.jsx
│   │   ├── SectionWrapper.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Problem.jsx
│   │   ├── Problem.css
│   │   ├── Solution.jsx
│   │   ├── Solution.css
│   │   ├── Work.jsx
│   │   ├── Work.css
│   │   ├── Trust.jsx
│   │   ├── Trust.css
│   │   ├── CTA.jsx
│   │   └── CTA.css
│   │
│   ├── styles/ (reserved for future shared styles)
│   │
│   ├── App.jsx ...................... Main app component
│   ├── App.css ...................... App-level styles
│   ├── index.css .................... Global theme & CSS variables
│   └── main.jsx ..................... React entry point
│
├── public/ ........................... Static assets
│
├── index.html ........................ HTML template
├── vite.config.js ................... Vite configuration
├── eslint.config.js ................. ESLint configuration
├── package.json ..................... Dependencies & scripts
├── package-lock.json ................ Lockfile
├── README.md ........................ Project readme
└── DEVELOPMENT.md ................... This file
```

---

## Development Guide

### 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### 📝 Development Workflow

#### 1. **Creating a New Section**

```jsx
// sections/MySection.jsx
import SectionWrapper from '../components/SectionWrapper';
import './MySection.css';

export default function MySection() {
  return (
    <SectionWrapper id="my-section" className="my-section">
      {/* Your content here */}
    </SectionWrapper>
  );
}
```

#### 2. **Adding the Section to App.jsx**

```jsx
// App.jsx
import MySection from './sections/MySection';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <MySection /> {/* Add your new section */}
      <Footer />
    </div>
  );
}
```

#### 3. **Styling Your Section**

```css
/* sections/MySection.css */
.my-section {
  /* Inherits section-wrapper defaults */
}

.my-content {
  color: var(--text-white);
  border-left: 2px solid var(--green-primary);
  padding: 1.5rem;
}
```

### 🔄 Using Reusable Components

#### Button Component
```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<Button variant="secondary">
  Learn More
</Button>
```

#### ProjectCard Component
```jsx
<ProjectCard
  title="My Project"
  description="Project description here"
  tags={['React', 'Node.js', 'MongoDB']}
  link="https://github.com/example"
/>
```

#### TerminalText Component (Typing Animation)
```jsx
<TerminalText 
  text="> Hello, I'm Jenaro." 
  delay={0} 
  speed={40} 
/>
```

#### SectionWrapper Component
```jsx
<SectionWrapper id="section-id" className="custom-class">
  {/* Your section content */}
</SectionWrapper>
```

### 🎨 Working with CSS Variables

All colors are defined as CSS variables in `index.css`. Use them throughout:

```css
.my-element {
  background-color: var(--bg-dark);
  color: var(--text-white);
  border: 1px solid var(--divider);
  transition: all 0.3s ease;
}

.my-element:hover {
  color: var(--green-primary);
  border-color: var(--green-primary);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}
```

---

## Customization Guide

### 🎯 Customizing Colors

Edit `src/index.css`:

```css
:root {
  --bg-dark: #0b0f0e;           /* Change background */
  --green-primary: #00ff88;     /* Change accent color */
  --text-white: #e6e6e6;        /* Change text color */
  /* ... other variables ... */
}
```

### 📝 Updating Content

#### Hero Section
- Edit `src/sections/Hero.jsx`
- Change the main heading text
- Update feature list items
- Replace image placeholder with actual image:

```jsx
<div className="image-frame">
  <img src="/path/to/your/image.jpg" alt="Your Name" />
</div>
```

#### Problem Section
- Edit the `issues` array in `src/sections/Problem.jsx`
- Customize pain point descriptions

#### Solution Section
- Modify the `solutions` array in `src/sections/Solution.jsx`
- Update solution titles and descriptions

#### Work Section
- Edit the `projects` array in `src/sections/Work.jsx`
- Add real project links
- Update project descriptions and tags

#### CTA Section
- Update `benefits` array
- Update `costs` array
- Modify testimonials

#### Footer
- Update contact links in `src/components/Footer.jsx`
- Add social media profiles

### 🖼️ Adding Images

1. **Place images in `public/` folder**
2. **Reference with `/filename` in JSX:**

```jsx
<img src="/my-image.jpg" alt="Description" />
```

### ✏️ Updating Header Logo

Edit `src/components/Header.jsx`:

```jsx
<div className="logo">
  <span className="green terminal-text">{'> YOUR_INITIALS'}</span>
</div>
```

### 🔗 Updating Footer Links

Edit `src/components/Footer.jsx`:

```jsx
// Update the contact information
<a href="https://your-linkedin-url" target="_blank">
  linkedin
</a>
```

### 🎬 Adjusting Animation Speeds

Edit relevant CSS files:

```css
/* TerminalText typing speed (milliseconds) */
<TerminalText text="Text" speed={50} /> {/* Lower = faster */}

/* Cursor blink speed */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
/* Adjust timing in animation rule: animation: blink 1s infinite; */
```

### 📱 Mobile Customization

All components include responsive design. Adjust breakpoints in component CSS:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 480px) {
  /* Extra small device styles */
}
```

---

## Component Usage Examples

### Complete Hero Section Example

```jsx
import { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import TerminalText from '../components/TerminalText';
import Button from '../components/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SectionWrapper className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          {mounted && (
            <TerminalText text="> Your headline" delay={0} speed={40} />
          )}
          {/* More content */}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

### Complete Card Grid Example

```jsx
const items = [
  { id: 1, title: 'Item 1', description: 'Description' },
  { id: 2, title: 'Item 2', description: 'Description' },
];

<div className="projects-grid">
  {items.map((item) => (
    <ProjectCard key={item.id} {...item} />
  ))}
</div>
```

---

## Performance Optimization

### ✅ Current Optimizations
- **Vite**: Fast build times and hot module replacement
- **CSS Variables**: Efficient color management
- **Grid/Flexbox**: No layout shift during animations
- **Lazy Loading Ready**: Images can use `loading="lazy"`

### 🚀 Future Improvements
- Image optimization with Next.js Image or Vite plugin
- Code splitting for sections
- Intersection Observer for scroll animations
- Service Worker for PWA support

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build first
npm run build

# Drag & drop dist/ folder to Netlify
# Or connect GitHub for auto-deploy
```

### Deploy to GitHub Pages

```bash
# Update vite.config.js base property
# Then build and push dist/ folder
```

---

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use different port
```

### CSS Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)

### Build Failing
```bash
npm install  # Reinstall dependencies
npm run build  # Try again
```

### Component Not Rendering
- Check import path is correct
- Verify component is added to App.jsx
- Check console for errors (F12 > Console)

---

## Git Workflow Recommendation

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes and commit
git add .
git commit -m "feat: Add new section"

# Push to GitHub
git push origin feature/new-section

# Create pull request on GitHub
```

---

## Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

---

## Summary

This portfolio website follows a **component-driven architecture** where:
- **Base components** (Button, Card, etc.) are reusable across sections
- **Section components** combine base components into full sections
- **Shared styles** (CSS variables, animations) ensure consistency
- **Responsive design** works on all devices
- **Semantic HTML** improves accessibility

The modular structure makes it easy to add, modify, or remove sections without affecting the entire application.

---

**Last Updated**: January 27, 2026  
**Built With**: React 19 + Vite 7  
**Portfolio Owner**: Jenaro Mwikali
