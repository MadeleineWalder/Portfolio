# Portfolio Website

A modern, minimal portfolio website showcasing web development projects and skills. Built with Gatsby, TypeScript, and React with a focus on performance, accessibility, and visual design.

**Live Site:** [https://maddydesign.netlify.app/](https://maddydesign.netlify.app/)

---

## 🚀 Tech Stack

- **Framework:** Gatsby 5.x
- **Language:** TypeScript
- **UI Library:** React 18
- **Styling:** CSS3 with custom properties (CSS variables)
- **Animations:** GSAP (GreenSock Animation Platform)
- **Carousels:** Swiper
- **Image Optimization:** gatsby-plugin-image, gatsby-plugin-sharp
- **Hosting:** Netlify
- **Version Control:** Git/GitHub

---

## ✨ Features

- 🎨 Modern glassmorphic design with 40px blur effects
- 📱 Fully responsive across all device sizes
- ⚡ Optimized images with Gatsby Image
- 🎭 Smooth GSAP animations (concentric circles, horizontal lines, frame transitions)
- 🖼️ Project showcase with frame switching (Home + 3 example frames)
- 🌊 Animated gradient border effects on interactive elements
- ♿ Accessibility-focused
- 🌙 Dark theme design
- 🔤 Custom typography with web fonts (Playwrite US Trad, Mukta)
- 📊 Modular component architecture
- 🚀 Fast loading times (optimized for performance)

---

## 🎨 Design System

### Color Palette

- **Primary:** `#00F4FD` (Cyan/Light Blue) - Main brand color
- **Secondary:** `#FF8CE2` (Pink) - Secondary accent
- **Tertiary:** `#9099FB` (Purple) - Tertiary accent
- **Text:** `#FFFFFF` (White) - Main text color
- **Background:** `#001943` (Dark Blue) - Secondary background
- **Background Dark:** `#000A13` (Very Dark Blue) - Primary background

### Typography

- **Logo Font:** Playwrite US Trad (Regular) - Use sparingly for headlines
- **Headings:** Mukta Extra Light (200) - Clear and elegant for titles
- **Body Text:** Mukta Light (300) - High readability for paragraphs
- **Buttons/Links:** Mukta Semi Bold (600) - Attention-grabbing CTAs
- **Hero Headlines:** Mukta Extra Bold (800) - Bold emphasis in hero sections

### Font Files

Custom fonts are stored in `src/fonts/` as WOFF2 files for optimal performance.

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── LandingPage/     # Hero section with animated concentric circles
│   │   │   ├── AnimatedBackground.tsx    # 17 concentric circles with GSAP pulsing
│   │   │   ├── LandingPage.tsx
│   │   │   └── LandingPage.css
│   │   └── ProjectShowcase/ # Project showcase with frame switching
│   │       ├── AnimatedLines.tsx         # 7 horizontal flowing lines with GSAP
│   │       ├── ProjectShowcase.tsx
│   │       └── ProjectShowcase.css
│   ├── fonts/               # Custom font files (WOFF2)
│   ├── images/              # Image assets (logo, lines, project examples)
│   ├── pages/               # Gatsby pages (file-based routing)
│   │   ├── index.tsx        # Homepage
│   │   └── 404.tsx          # 404 error page
│   └── styles/              # Global styles and CSS
│       └── global.css       # Global CSS with variables and resets
├── gatsby-config.ts         # Gatsby configuration
├── gatsby-node.ts           # Gatsby Node APIs (if needed)
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run develop
   ```

4. **Open in browser**
   Navigate to `http://localhost:8000`

---

## 🧩 Key Components

### LandingPage
Hero section featuring:
- Animated concentric circles background (17 circles, exact Figma sizes)
- Glassmorphic blur overlay (40px)
- Logo, headline, subline, and CTA button
- Animated gradient border on CTA button (flows on hover)
- Smooth scroll navigation to projects section

### AnimatedBackground
Background component with 17 pulsing concentric circles:
- GSAP scale animations with varied timing (7-9 seconds)
- Responsive positioning using `translateX()` media queries
- Exact Figma pixel sizes and color values
- Creates organic, flowing visual effect

### ProjectShowcase
Portfolio project display section featuring:
- 4-frame switching system (Home + 3 Examples)
- Control panel with animated gradient borders
- Frame transition animations (fade, scale, slide-up)
- Glassmorphic blur overlay matching landing page
- Image glow effects (varying intensity per example)

### AnimatedLines
Horizontal flowing lines background for home frame:
- 7 PNG line images imported from Figma exports
- GSAP vertical floating animations (y-axis only)
- 100% width, 4% vertical spacing with heavy overlap
- Z-index layered 1-7 (line-1 at back, line-7 at front)

---

## 📜 Available Scripts

- **`npm run develop`** - Start the Gatsby development server (port 8000)
- **`npm run build`** - Build the site for production
- **`npm run serve`** - Serve the production build locally
- **`npm run clean`** - Clear Gatsby cache and public folder
- **`npm run typecheck`** - Run TypeScript type checking

---

## 🏗️ Component Architecture

### Component Naming Convention

Components follow a descriptive, functional naming pattern:

- ✅ `LandingPage` - Describes what it does
- ✅ `HeroSection` - Describes its purpose
- ❌ `HomeSection1` - Too generic, tied to page location

### Component Structure

Each component has its own folder containing:
- `ComponentName.tsx` - TypeScript React component
- `ComponentName.css` - Component-specific styles

Example:
```
LandingPage/
├── LandingPage.tsx
└── LandingPage.css
```

---

## 🎯 Development Guidelines

### Animation Architecture

The project uses **GSAP (GreenSock Animation Platform)** for all animations following these principles:

- **Animations in components only**, never in pages
- **useLayoutEffect** for animation initialization (runs before browser paint)
- **GSAP context** for proper cleanup on unmount (`ctx.revert()`)
- **useRef** to target DOM elements (no global selectors like querySelector)
- **Varied timing** on repeated animations for organic, natural feel
- **Gatsby SSR-safe** - animations only run in browser environment

**Animation patterns used:**
- Pulsing circles (scale animation with yoyo)
- Flowing lines (vertical y-axis movement with yoyo)
- Frame transitions (fade + scale + slide with one-time animation)
- Gradient border flow (CSS keyframe animation on hover)

### Responsive Design

- Use responsive units: `vh`, `vw`, `%`, `rem`, `em`
- Avoid fixed pixels unless absolutely necessary
- Test on multiple device sizes

### CSS Best Practices

- Use CSS variables from `global.css` for colors, fonts, spacing
- Keep z-index values between 1-10 for maintainability
- Use flexbox/grid for layouts with `gap` for spacing
- Mobile-first responsive design with media queries
- **Always use `width: 100%`** for full-width sections (never `100vw` - causes horizontal scrollbar)
- Use `backdrop-filter: blur()` for glassmorphic effects
- Animated gradient borders using dual background layers
- Space between elements using `gap`, `padding`, or `margin` (not `line-height`)

### Layout Patterns

- **Glassmorphic overlay structure:**
  1. Background layer (z-index: 1)
  2. Glass overlay with blur (z-index: 2)
  3. Content layer (z-index: 3+)
  
- **Full-screen sections:** `width: 100%`, `height: 100vh`, `overflow: hidden`
- **Flexbox centering:** `display: flex`, `align-items: center`, `justify-content: center`
- **Component-specific z-index:** Lines 1-7 within their container, controls at 10

### TypeScript

- Add helpful comments to explain TypeScript features
- Define proper interfaces for component props
- Use strong typing throughout

---

## 🚢 Deployment

Site is automatically deployed to Netlify on push to the main branch.

### Build Command
```bash
npm run build
```

### Publish Directory
```
public/
```

---

## 🔮 Current Status & Next Steps

### ✅ Completed

- Landing page with animated concentric circles background (17 circles with GSAP)
- Glassmorphic overlay effect (40px blur)
- ProjectShowcase section with 4-frame switching system (Home + 3 Examples)
- AnimatedLines background for home frame (7 horizontal flowing PNG lines)
- Smooth frame transitions with GSAP (fade, scale, slide-up)
- Animated gradient border hover effect (flowing color cycle)
- Custom white glow effects on project images (varying intensity per example)
- Control panel with gradient borders on hover and active states
- Smooth scroll navigation from landing page to projects section

### 🚧 Next Steps

- Implement GSAP scroll-triggered animations
- Add additional sections (About, Contact, Skills)
- Add navigation menu
- Create individual project detail pages
- Add contact form with Netlify Forms
- Integrate analytics
- Add more project examples
- Add blog section (optional)

---

## 📝 Notes

- **Language:** English (all content)
- **Modular Design:** Built for easy updates and scalability
- **Custom Fonts:** Stored locally for performance and offline capability
- **Image Optimization:** All images processed through Gatsby Image for optimal loading

---

**Last Updated:** March 8, 2026