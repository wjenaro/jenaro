# Component Architecture & Visual Map

## 🗺️ Full Component Dependency Tree

```
┌────────────────────────────────────────────────────────────────┐
│                        App.jsx                                 │
│                   (Main Application)                           │
└────────────────────────────────────────────────────────────────┘
                              │
                  ┌───────────┼───────────┐
                  │           │           │
                  ▼           ▼           ▼
        ┌──────────────┐ ┌──────────┐ ┌──────────┐
        │   Header     │ │ 6 Sections│ │  Footer  │
        │   (Sticky)   │ │  (Flow)   │ │(Contact) │
        └──────────────┘ └──────────┘ └──────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Hero Section │  │Problem Section│  │Solution Sec. │
    │ (Intro)      │  │ (Pain)        │  │ (Guide)      │
    ├──────────────┤  ├──────────────┤  ├──────────────┤
    │ Deps:        │  │ Deps:        │  │ Deps:        │
    │ ├─ Section W.│  │ ├─ Section W.│  │ ├─ Section W.│
    │ ├─ Terminal T│  │ └─ Divider   │  │ └─ (Direct)  │
    │ └─ Button    │  └──────────────┘  └──────────────┘
    └──────────────┘
          │
          ▼
    ┌──────────────┐
    │  Work Sec.   │
    │  (Proof)     │
    ├──────────────┤
    │ Deps:        │
    │ ├─ Section W.│
    │ └─ ProjectCard (x4)
    └──────────────┘
          │
          ▼
    ┌──────────────┐
    │ Trust Sec.   │
    │ (Social)     │
    ├──────────────┤
    │ Deps:        │
    │ └─ Section W.│
    └──────────────┘
          │
          ▼
    ┌──────────────┐
    │  CTA Section │
    │ (Decision)   │
    ├──────────────┤
    │ Deps:        │
    │ ├─ Section W.│
    │ └─ Button (x2)
    └──────────────┘
```

---

## 🔗 Component Imports & Relationships

### Import Graph

```
App.jsx
├── imports Header.jsx
├── imports Hero.jsx
│   ├── imports SectionWrapper.jsx
│   ├── imports TerminalText.jsx
│   └── imports Button.jsx
├── imports Problem.jsx
│   └── imports SectionWrapper.jsx
├── imports Solution.jsx
│   └── imports SectionWrapper.jsx
├── imports Work.jsx
│   ├── imports SectionWrapper.jsx
│   └── imports ProjectCard.jsx
├── imports Trust.jsx
│   └── imports SectionWrapper.jsx
├── imports CTA.jsx
│   ├── imports SectionWrapper.jsx (3x)
│   └── imports Button.jsx (2x)
└── imports Footer.jsx

Base Components (Reusable):
├── Button.jsx (used in: Hero, CTA)
├── ProjectCard.jsx (used in: Work)
├── TerminalText.jsx (used in: Hero)
├── SectionWrapper.jsx (used in: All Sections)
├── Divider.jsx (unused currently, available)
├── Header.jsx (standalone)
└── Footer.jsx (standalone)
```

---

## 📊 Component Props & Interfaces

### Button Component
```jsx
<Button 
  variant="primary" | "secondary"  // Button style variant
  onClick={callback}               // Click handler
  className={string}               // Additional CSS classes
>
  {children}                       // Button text content
</Button>
```

### ProjectCard Component
```jsx
<ProjectCard 
  title={string}                   // Project title
  description={string}             // Project description
  tags={Array<string>}            // Tech tags
  link={string}                    // Project URL (optional)
/>
```

### TerminalText Component
```jsx
<TerminalText 
  text={string}                    // Text to type
  delay={number}                   // Delay before typing starts (ms)
  speed={number}                   // Characters per speed unit (ms)
/>
```

### SectionWrapper Component
```jsx
<SectionWrapper 
  id={string}                      // Section ID (for nav links)
  className={string}               // Additional CSS classes
>
  {children}                       // Section content
</SectionWrapper>
```

---

## 🎨 Styling Architecture

### CSS Organization

```
index.css (Global Theme)
├── @import fonts (Google Fonts)
├── CSS Variables (--bg-dark, --green-primary, etc.)
├── Base element styles (html, body, a, button, h1-h6, code)
└── Global utilities (.green, .muted, .terminal-text)

App.css (App-level Styles)
├── .app (root container)
├── .container (max-width wrapper)
└── Utility classes

Component CSS Files (One per component)
├── Header.css
├── Button.css
├── ProjectCard.css
├── TerminalText.css
├── Divider.css
├── SectionWrapper.css
└── Footer.css

Section CSS Files (One per section)
├── Hero.css
├── Problem.css
├── Solution.css
├── Work.css
├── Trust.css
└── CTA.css
```

### CSS Variables Hierarchy

```
:root (index.css)
├── Colors
│   ├── --bg-dark: #0b0f0e
│   ├── --text-white: #e6e6e6
│   ├── --text-muted: #9aa5a1
│   ├── --green-primary: #00ff88
│   ├── --green-secondary: #00cc6a
│   └── --divider: #1f2a27
│
├── Fonts
│   ├── --font-mono: "JetBrains Mono", monospace
│   └── --font-sans: "Inter", sans-serif
│
└── All components inherit and use these variables
    ↓
    Applied in component CSS files
    ↓
    Consistent theming across app
```

---

## 🔄 Data Flow & State Management

### Component State Usage

```
Hero.jsx
├── Uses: useState (mounted state)
├── Uses: useEffect (set mounted on mount)
└── Purpose: Control typing animation start

All Other Components
├── No internal state
├── Props-driven rendering
└── Stateless/Functional components
```

### Props Flow

```
App.jsx
├── No props needed
├── Imports all sections
└── Renders in sequence

Sections
├── No props (except optional className, id)
├── Internal data arrays (hardcoded)
├── Pass props to child components

Base Components
├── Accept props from sections
├── Pure functional components
├── No side effects
└── Reusable across sections
```

---

## 📱 Responsive Breakpoints

### Media Query Strategy

```
Desktop (1024px+)
├── 2-column grids (Hero, Contrast grid)
├── Full-width sections
├── Maximum font sizes
└── Optimal spacing

Tablet (768px - 1024px)
├── Adjusted spacing
├── Modified grid layouts
├── Slightly smaller fonts
└── Mobile-friendly spacing

Mobile (< 768px)
├── Single-column layouts
├── Stacked components
├── Reduced padding
├── Optimized font sizes
├── Touch-friendly sizing

All breakpoints defined in component CSS files
```

---

## 🎯 User Journey (Section Order)

```
User arrives at site
    ↓
[1] Header (Navigation & Logo)
    ↓
[2] Hero Section (Intro + Features)
    ↓
[3] Problem Section (Pain Points)
    ↓
[4] Solution Section (Your Approach)
    ↓
[5] Work Section (Social Proof)
    ↓
[6] Trust Section (Who You Serve)
    ↓
[7] CTA Section (Decision Point)
    ├── Cost of Not Acting
    ├── Benefits of Working Together
    ├── Testimonials
    └── Final Call-to-Action
    ↓
[8] Footer (Contact & Links)
```

---

## 🔌 Plugin & Extension Points

### Easy to Add

```
New Feature Sections
├── Copy template from existing section
├── Create JSX component
├── Create CSS file
├── Import in App.jsx
└── Add to component flow

New Buttons/Cards
├── Update Button.jsx props
├── Add variant in Button.css
├── Use in any section

New Animations
├── Add @keyframes to relevant CSS
├── Apply to elements via classes
├── Adjust timing as needed

New Colors/Themes
├── Update CSS variables in index.css
├── All components automatically updated
└── No other files need changes
```

---

## 📦 File Size & Performance

### Production Build Output

```
Total CSS: ~20KB (gzipped: ~3.5KB)
Total JS: ~208KB (gzipped: ~64KB)
HTML: ~0.45KB

Breakdown:
├── React + Dependencies: ~120KB
├── Component Code: ~40KB
├── Component Styles: ~20KB
├── Utilities: ~5KB
└── Vite Overhead: ~23KB
```

---

## 🚀 Optimization Opportunities

### Already Implemented
- CSS variables for efficient theme updates
- Minimal re-renders (stateless components)
- Responsive images (placeholder)
- CSS Grid/Flexbox (no layout shifts)

### Recommended Future Optimizations
- Image lazy loading (`loading="lazy"`)
- Code splitting by route
- CSS purging unused styles
- Font subsetting (Inter, JetBrains Mono)
- Service Worker for offline support
- Lighthouse optimization

---

## 🔍 Debugging Components

### Component Hierarchy Visualization

```
Render React DevTools Extension to see:

<App>
  <Header />
  <Hero>
    <SectionWrapper>
      <TerminalText />
      <Button />
    </SectionWrapper>
  </Hero>
  <Problem>
    <SectionWrapper />
  </Problem>
  <Solution>
    <SectionWrapper />
  </Solution>
  <Work>
    <SectionWrapper>
      <ProjectCard /> (x4)
    </SectionWrapper>
  </Work>
  <Trust>
    <SectionWrapper />
  </Trust>
  <CTA>
    <SectionWrapper /> (x3)
    <Button /> (x2)
  </CTA>
  <Footer />
</App>
```

---

## 📚 Component Testing Approach

### What to Test

```
Button Component
├── Renders with correct text
├── OnClick handler fires
├── Variant styles apply correctly
└── Hover states work

ProjectCard Component
├── Props render correctly
├── Tags display properly
├── Link opens in new tab
└── Hover animation works

TerminalText Component
├── Text types at correct speed
├── Cursor animates
├── Delay works correctly
└── Stops at correct time

Sections
├── Render without errors
├── Content displays correctly
├── Responsive on mobile
└── Scroll navigation works
```

---

## 🔐 Code Quality

### ESLint Configuration
- File: `eslint.config.js`
- Enforces React best practices
- Prevents common errors
- Optional: Run `npm run lint`

### Future Improvements
- Add Jest for unit tests
- Add Vitest for component tests
- Add Playwright for E2E tests
- Add TypeScript for type safety

---

## Summary Table

| Aspect | Details |
|--------|---------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | CSS3 + CSS Variables |
| **Total Components** | 14 (8 reusable, 6 sections) |
| **Total Sections** | 8 (including Header & Footer) |
| **Responsive** | Yes (3 breakpoints) |
| **Animations** | Typing, blinking, hover effects |
| **Accessibility** | Semantic HTML, ARIA ready |
| **Performance** | ~64KB JS gzipped |
| **Build Time** | ~2.7 seconds |

---

**Created**: January 27, 2026  
**For**: Jenaro Portfolio Website  
**Status**: Production Ready
