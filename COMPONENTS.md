# Component Usage Guide with Examples

## 📖 In-Depth Component Documentation

---

## 1️⃣ Button Component

### Location
`src/components/Button.jsx` & `src/components/Button.css`

### Purpose
Reusable command-style button with green accent and hover effects

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | Required | Button text/content |
| `variant` | string | 'primary' | 'primary' or 'secondary' |
| `onClick` | function | undefined | Click handler callback |
| `className` | string | '' | Additional CSS classes |

### Visual Examples

#### Primary Button (Filled)
```jsx
<Button variant="primary">
  Let's Get Started
</Button>
```
- Green background
- Dark text
- Glowing hover effect
- Animated arrow

#### Secondary Button (Outline)
```jsx
<Button variant="secondary">
  Learn More
</Button>
```
- Transparent background
- Green border
- Green text
- Hover: Light background fill

### Advanced Usage

#### With Click Handler
```jsx
const handleClick = () => {
  console.log('Button clicked!');
};

<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

#### With Custom Styling
```jsx
<Button 
  variant="primary" 
  className="custom-class"
>
  Styled Button
</Button>
```

### Styling Customization

Add to component CSS:
```css
.custom-button {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
}
```

Then use:
```jsx
<Button className="custom-button">Text</Button>
```

### Best Practices
✅ Use semantic action text ("Submit", "Learn More", "Get Started")  
✅ Only one primary button per section  
✅ Use secondary for additional actions  
✅ Keep text short (2-3 words)

---

## 2️⃣ ProjectCard Component

### Location
`src/components/ProjectCard.jsx` & `src/components/ProjectCard.css`

### Purpose
Display a project with title, description, technology tags, and optional link

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | Required | Project name |
| `description` | string | Required | What the project is/does |
| `tags` | string[] | [] | Technology tags |
| `link` | string | null | External project URL |

### Visual Examples

#### Basic Project Card
```jsx
<ProjectCard
  title="WordPress Website"
  description="Built a responsive, SEO-optimized WordPress site for local business"
  tags={['WordPress', 'Speed', 'SEO-Ready']}
/>
```

#### With Project Link
```jsx
<ProjectCard
  title="E-commerce Store"
  description="Custom Shopify theme with Python inventory integration"
  tags={['Shopify', 'Python', 'REST API']}
  link="https://github.com/example/ecommerce"
/>
```

### Complete Example in Grid

```jsx
const projects = [
  {
    title: "Project 1",
    description: "Description here",
    tags: ["Tech1", "Tech2"],
    link: "https://..."
  },
  {
    title: "Project 2",
    description: "Description here",
    tags: ["Tech3", "Tech4"],
    link: "https://..."
  }
];

<div className="projects-grid">
  {projects.map((project, idx) => (
    <ProjectCard key={idx} {...project} />
  ))}
</div>
```

### Styling the Grid

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Features
- Green top border indicator
- Hover: Green border glow + lift effect
- Tag display with bullet points
- Optional external link
- Responsive on mobile

### Best Practices
✅ Use 3-5 tags maximum per card  
✅ Limit description to 1-2 sentences  
✅ Use consistent tag format  
✅ Provide project links when possible

---

## 3️⃣ TerminalText Component

### Location
`src/components/TerminalText.jsx` & `src/components/TerminalText.css`

### Purpose
Display text with typewriter/typing animation effect

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | Required | Text to animate |
| `delay` | number | 0 | Delay before typing starts (ms) |
| `speed` | number | 50 | Speed of typing (ms per char) |

### Visual Examples

#### Simple Typing Animation
```jsx
<TerminalText 
  text="> Hello, I'm Jenaro." 
  delay={0} 
  speed={40} 
/>
```
- Types immediately (delay=0)
- 40ms per character (fast typing)

#### Delayed Typing
```jsx
<TerminalText 
  text="> Building systems that work." 
  delay={500}  {/* Wait 500ms before starting */}
  speed={30}   {/* Slower: 30ms per char */}
/>
```

#### Slow Dramatic Typing
```jsx
<TerminalText 
  text="> Welcome to my portfolio." 
  delay={1000} 
  speed={80}   {/* Slower for emphasis */}
/>
```

### Advanced Usage

#### Multiple Sequential Animations
```jsx
<div className="terminal-sequence">
  <TerminalText 
    text="> First line" 
    delay={0} 
    speed={40} 
  />
  <TerminalText 
    text="> Second line" 
    delay={1000}  {/* Starts after first finishes */}
    speed={40} 
  />
  <TerminalText 
    text="> Third line" 
    delay={2000} 
    speed={40} 
  />
</div>
```

### Speed Guide
| Speed | Feel | Use Case |
|-------|------|----------|
| 20-30 | Slow/Dramatic | Important text, impact |
| 40-50 | Normal | Standard typing speed |
| 60+ | Fast | Quick transitions |

### Visual Features
- Blinking cursor during typing
- Cursor disappears when done
- Styled with monospace font
- Green color support

### Best Practices
✅ Use for hero section introductions  
✅ Keep text under 100 characters  
✅ Coordinate delays for sequence effect  
✅ Use for terminal-styled sections only  
✅ Don't overuse (impacts performance)

---

## 4️⃣ SectionWrapper Component

### Location
`src/components/SectionWrapper.jsx` & `src/components/SectionWrapper.css`

### Purpose
Reusable container for page sections with consistent padding, max-width, and styling

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | Required | Section content |
| `id` | string | '' | HTML id (for navigation) |
| `className` | string | '' | Additional CSS classes |

### Visual Examples

#### Basic Section
```jsx
<SectionWrapper>
  <h2>Section Title</h2>
  <p>Your content here</p>
</SectionWrapper>
```

#### Section with ID (for Navigation)
```jsx
<SectionWrapper id="work">
  <h2>My Work</h2>
  {/* Navigation links point to id="work" */}
</SectionWrapper>
```

#### Section with Custom Styling
```jsx
<SectionWrapper 
  id="features" 
  className="dark-bg"
>
  <h2>Features</h2>
  {/* Content */}
</SectionWrapper>
```

### Custom Styling

Add background color:
```css
.dark-bg {
  background-color: rgba(0, 0, 0, 0.2);
}
```

Add special border:
```css
.featured-section {
  border-top: 2px solid var(--green-primary);
}
```

### Default Features
- Max-width: 1200px (centered)
- Padding: 4rem top/bottom (2.5rem mobile)
- Container padding: 2rem horizontal (1rem mobile)
- Bottom border divider
- Responsive on all devices

### Navigation Integration

Create scrollable navigation:
```jsx
// In Header component
<a href="#work">Go to Work</a>

// In Work section
<SectionWrapper id="work">
  {/* Content */}
</SectionWrapper>
```

### Best Practices
✅ Always use for page sections  
✅ Set unique id for navigation links  
✅ Use className for variants  
✅ Don't override default padding unless necessary

---

## 5️⃣ Header Component

### Location
`src/components/Header.jsx` & `src/components/Header.css`

### Purpose
Sticky header with logo and navigation links

### Features
- Sticky positioning (stays at top while scrolling)
- Logo with blinking cursor animation
- Navigation links with underline hover effect
- Responsive menu (currently shows all links)

### Customization

#### Change Logo Text
```jsx
// src/components/Header.jsx
<div className="logo">
  <span className="green terminal-text">{'> YOUR_INITIALS'}</span>
</div>
```

#### Add/Update Navigation Links
```jsx
// src/components/Header.jsx
<nav className="nav-links">
  <a href="#work">work</a>
  <a href="#about">about</a>
  <a href="#contact">contact</a>
</nav>
```

#### Styling Customization
```css
/* Adjust logo size */
.logo {
  font-size: 1.5rem;
}

/* Adjust nav spacing */
.nav-links {
  gap: 3rem;
}
```

### Responsive Behavior
- Desktop: Full header layout
- Mobile: Stacked vertically
- Cursor animation: Always visible

---

## 6️⃣ Footer Component

### Location
`src/components/Footer.jsx` & `src/components/Footer.css`

### Purpose
Display contact information in config-file style

### Features
- Config-style layout (key = value format)
- Social links (LinkedIn, GitHub, Instagram)
- WhatsApp contact number
- Professional styling

### Customization

#### Update Contact Links
```jsx
// src/components/Footer.jsx
<a href="https://www.linkedin.com/in/YOUR_PROFILE/">
  linkedin
</a>

<a href="https://github.com/YOUR_USERNAME">
  github
</a>

<a href="https://www.instagram.com/YOUR_HANDLE/">
  instagram
</a>
```

#### Update WhatsApp Number
```jsx
<a href="tel:+1234567890">
  whatsapp   = +1 234 567 8900
</a>
```

#### Add New Contact Method
```jsx
<div className="config-line">
  <span className="key">twitter</span>
  <span className="equals">=</span>
  <a href="https://twitter.com/YOUR_HANDLE" className="value">
    @YOUR_HANDLE
  </a>
</div>
```

### Styling
- Monospace font (terminal style)
- Green accent for keys
- Hover effects on links
- Dashed divider lines

---

## 7️⃣ Divider Component

### Location
`src/components/Divider.jsx` & `src/components/Divider.css`

### Purpose
Visual separator between sections (currently unused, available for custom use)

### Usage
```jsx
import Divider from '../components/Divider';

<SectionWrapper>
  <h2>Section 1</h2>
  {/* Content */}
</SectionWrapper>

<Divider />

<SectionWrapper>
  <h2>Section 2</h2>
  {/* Content */}
</SectionWrapper>
```

### Features
- Dashed line style
- Uses CSS variables for color
- Responsive width

### Note
Currently, sections have built-in dividers (border-bottom). Use Divider component for additional separators between non-section content.

---

## 📊 Component Usage Matrix

| Component | Reusable | In Hero | In Problem | In Solution | In Work | In Trust | In CTA | In Footer |
|-----------|----------|--------|-----------|------------|--------|----------|--------|-----------|
| Button | ✅ Yes | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| ProjectCard | ✅ Yes | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| TerminalText | ✅ Yes | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| SectionWrapper | ✅ Yes | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Divider | ✅ Yes | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Header | ❌ Single | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Footer | ❌ Single | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

---

## 🔗 Inter-Component Communication

### Props Flow
```
App.jsx
├── Passes no props
├── Renders sections
└── Sections manage their own data

Sections
├── Create data (arrays)
├── Pass props to children
└── Children render based on props

Reusable Components
├── Accept props
├── Pure functions
└── Render based on input
```

### State Flow
```
Only Hero.jsx uses internal state
├── useState(mounted) → Controls typing animation start
├── useEffect() → Sets mounted on component load
└── All other components are stateless
```

### Data Flow
```
App → Section → Component → Rendered UI
               ↓
            (props)
               ↓
            (pure render)
```

---

## 🎯 Component Selection Guide

### When to Use Each Component

**Button** - Use when user action is needed
- CTA sections
- Form submissions
- Navigation actions

**ProjectCard** - Use to showcase work
- Portfolio sections
- Project galleries
- Work samples

**TerminalText** - Use for intro/dramatic effect
- Hero sections
- Important announcements
- Typing animations

**SectionWrapper** - Use for all major sections
- Consistent padding/width
- Built-in dividers
- Easy styling

**Header** - Use once at top
- Navigation
- Logo display
- Sticky positioning

**Footer** - Use once at bottom
- Contact info
- Social links
- Copyright

---

## 💡 Pro Tips

### Tip 1: Reuse Component Patterns
If you create a new Button variant, modify `src/components/Button.jsx` instead of creating a new component.

### Tip 2: Props Destructuring
```jsx
// Good
function ProjectCard({ title, description, tags, link }) {
  return <div>{title}</div>;
}

// Less clean
function ProjectCard(props) {
  return <div>{props.title}</div>;
}
```

### Tip 3: Keys in Lists
```jsx
// Good
{projects.map((project, idx) => (
  <ProjectCard key={idx} {...project} />
))}

// For better performance with database IDs
{projects.map((project) => (
  <ProjectCard key={project.id} {...project} />
))}
```

### Tip 4: Spread Operator
```jsx
// Instead of
<ProjectCard 
  title={project.title}
  description={project.description}
  tags={project.tags}
  link={project.link}
/>

// Use
<ProjectCard {...project} />
```

---

## 🚀 Next Steps

1. **Explore Components** - Open each component file and read the code
2. **Modify Sections** - Update content in section components
3. **Customize Styling** - Change colors and spacing in CSS files
4. **Add New Sections** - Create new section following existing patterns
5. **Test Changes** - Run `npm run dev` and check in browser

---

**Component Guide v1.0**  
**Last Updated**: January 27, 2026
