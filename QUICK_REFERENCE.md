# Quick Reference Guide

## 📚 File Navigation

### Main Files to Edit

| File | Purpose | Common Tasks |
|------|---------|--------------|
| `src/sections/Hero.jsx` | Introduction section | Update headline, features, image |
| `src/sections/Problem.jsx` | Pain points | Edit issue list |
| `src/sections/Solution.jsx` | Solutions | Modify solution cards |
| `src/sections/Work.jsx` | Portfolio projects | Add/update project cards |
| `src/sections/Trust.jsx` | Testimonials | Update personas |
| `src/sections/CTA.jsx` | Call-to-action | Update benefits, costs, testimonials |
| `src/components/Footer.jsx` | Contact info | Update links and contact details |
| `src/index.css` | Global theme | Change colors, fonts |

## 🎨 Quick Color Changes

### Update in `src/index.css`:

```css
:root {
  --bg-dark: #0b0f0e;           /* Background color */
  --text-white: #e6e6e6;        /* Main text */
  --text-muted: #9aa5a1;        /* Secondary text */
  --green-primary: #00ff88;     /* Main accent (green) */
  --green-secondary: #00cc6a;   /* Hover state */
  --divider: #1f2a27;           /* Divider lines */
}
```

## 🔄 Component Reuse Examples

### Use Button Component

```jsx
import Button from '../components/Button';

<Button variant="primary" onClick={handleClick}>
  Your Button Text
</Button>

<Button variant="secondary">
  Secondary Button
</Button>
```

### Use ProjectCard Component

```jsx
import ProjectCard from '../components/ProjectCard';

<ProjectCard
  title="Project Name"
  description="What this project does"
  tags={['React', 'Node.js', 'MongoDB']}
  link="https://github.com/example"
/>
```

### Use TerminalText Component (Typing Animation)

```jsx
import TerminalText from '../components/TerminalText';

<TerminalText
  text="> Your text here"
  delay={0}        // Start delay in ms
  speed={40}       // Character speed in ms
/>
```

### Use SectionWrapper

```jsx
import SectionWrapper from '../components/SectionWrapper';

<SectionWrapper id="my-section" className="custom-class">
  <h2>Section Title</h2>
  {/* Your content */}
</SectionWrapper>
```

## 📝 Content Update Checklist

### Before Deploying
- [ ] Updated Hero section headline
- [ ] Changed personal image in Hero
- [ ] Edited Problem section issues
- [ ] Modified Solution cards
- [ ] Updated Work/Projects
- [ ] Changed testimonials
- [ ] Updated contact info in Footer
- [ ] Updated social links
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Reviewed typos
- [ ] Tested animations

## 🎯 Common Customizations

### Change Hero Headline

In `src/sections/Hero.jsx`:

```jsx
<h2 className="hero-main-text">
  Your new headline text here
</h2>
```

### Update Feature List

In `src/sections/Hero.jsx`:

```jsx
const features = [
  {
    icon: '🔹',
    title: 'Your Feature 1',
    description: 'Description here'
  },
  // Add more...
];
```

### Modify Project List

In `src/sections/Work.jsx`:

```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'What you did',
    tags: ['Tech1', 'Tech2'],
    link: 'https://...'
  },
  // Add more...
];
```

### Update Footer Contact

In `src/components/Footer.jsx`:

```jsx
<a href="https://your-linkedin-url">linkedin</a>
```

## 🚀 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# View production build locally
npm run preview

# Run linter
npm run lint

# Install dependencies
npm install

# Update dependencies
npm update
```

## 📱 Responsive Testing

### Test on Different Sizes
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

Use browser dev tools (F12) → Toggle device toolbar (Ctrl+Shift+M)

## 🔗 Navigation Smooth Scroll

### Link to Section

```jsx
// In any component
<a href="#work">Go to Work Section</a>

// Section must have ID
<SectionWrapper id="work">
  {/* Content */}
</SectionWrapper>
```

## 💡 Pro Tips

### Tip 1: Use CSS Variables
```css
/* Don't do this */
background-color: #00ff88;

/* Do this instead */
background-color: var(--green-primary);

/* Benefit: Change color once, updates everywhere */
```

### Tip 2: Component Reusability
Create variations of components instead of duplicating code:
```jsx
// Instead of creating new Button
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
```

### Tip 3: Mobile-First Design
```css
/* Mobile styles first */
.my-element {
  font-size: 1rem;
}

/* Then add desktop styles */
@media (min-width: 768px) {
  .my-element {
    font-size: 1.5rem;
  }
}
```

### Tip 4: Use Git for Version Control
```bash
git add .
git commit -m "Update: Hero section headline"
git push origin main
```

## 🐛 Quick Fixes

### Styling Issues
1. Hard refresh browser (Ctrl+Shift+R)
2. Check CSS file is imported
3. Verify CSS variable names
4. Use browser DevTools (F12) to inspect

### Component Not Showing
1. Check import statement
2. Verify component added to App.jsx
3. Check browser console for errors (F12)
4. Verify props are correct

### Port Already in Use
```bash
npm run dev -- --port 3000
# Or kill process on port 5174
```

### Build Fails
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

## 📊 File Size Guide

| File Type | Typical Size |
|-----------|-------------|
| JS Output | ~200KB (64KB gzip) |
| CSS Output | ~16KB (3.5KB gzip) |
| Total Size | ~216KB (67KB gzip) |

## ⚡ Performance Tips

1. ✅ Use CSS variables for colors
2. ✅ Lazy load images: `<img loading="lazy" />`
3. ✅ Use grid/flexbox (no floats)
4. ✅ Minimize animations on mobile
5. ✅ Compress images before upload
6. ✅ Use semantic HTML

## 🔐 Code Quality

### ESLint
```bash
npm run lint
```

Fixes common JavaScript errors and React issues.

### Best Practices
- Use functional components
- Keep components small and reusable
- Destructure props
- Use meaningful variable names
- Add comments for complex logic
- Follow React best practices

## 📚 Component API Quick Reference

### Button
```jsx
<Button variant="primary|secondary" onClick={fn}>Text</Button>
```

### ProjectCard
```jsx
<ProjectCard title={str} description={str} tags={arr} link={str} />
```

### TerminalText
```jsx
<TerminalText text={str} delay={num} speed={num} />
```

### SectionWrapper
```jsx
<SectionWrapper id={str} className={str}>{children}</SectionWrapper>
```

## 🎯 Deployment Checklist

- [ ] All content updated
- [ ] Links tested
- [ ] Images optimized
- [ ] Mobile responsive checked
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] SEO meta tags updated
- [ ] Social preview images ready

## 📞 Need Help?

**Common Issues & Solutions**: See DEVELOPMENT.md Troubleshooting section

**Component Details**: See ARCHITECTURE.md for full component reference

**How to Customize**: See DEVELOPMENT.md Customization Guide

---

**Last Updated**: January 27, 2026  
**Quick Reference v1.0**
