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
- 🎭 GSAP scroll choreography (zoom-out hero, marquee motion, staged card reveal)
- 🖼️ Integrated project-card reveal scene inside LandingPage
- 🌊 Animated gradient border effects on interactive elements
- 🌙 Dark visual theme
- 🔤 Custom typography with web fonts (Playwrite US Trad, Mukta)
- 🎬 Unified scroll-scene architecture for immersive transitions

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
│   ├── components/
│   │   └── LandingPage/     # Unified scroll scene (hero + project cards)
│   │       ├── AnimatedBackground.tsx    # 17 concentric circles with GSAP pulsing
│   │       ├── AnimatedBackground.css
│   │       ├── LandingPage.tsx           # Main pinned scroll choreography
│   │       └── LandingPage.css
│   ├── fonts/               # Custom font files (WOFF2)
│   ├── images/              # Image assets (logos, UI graphics)
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
Unified scroll scene featuring:
- Animated concentric circles background (17 circles, exact Figma sizes)
- Glassmorphic blur overlay (40px)
- Hero frame zoom-out tied to scroll
- Marquee/background layer shift during transition
- Top-left persistent logo overlay in zoomed-out stage
- Staggered bottom-up project-card reveal tied directly to scroll
- Integrated project title reveal aligned with card entrance

### AnimatedBackground
Background component with 17 pulsing concentric circles:
- GSAP scale animations with varied timing (7-9 seconds)
- Responsive positioning using `translateX()` media queries
- Exact Figma pixel sizes and color values
- Creates organic, flowing visual effect

---

## 📜 Available Scripts

- **`npm run develop`** - Start the Gatsby development server (port 8000)
- **`npm run build`** - Build the site for production
- **`npm run serve`** - Serve the production build locally
- **`npm run clean`** - Clear Gatsby cache and public folder
- **`npm run typecheck`** - Run TypeScript type checking

---

## 🏗️ Architecture

### Scene-First Approach

The homepage now favors a **single cohesive scroll scene** over many small independent sections.

- Use larger scene components when motion continuity is the priority
- Split into smaller components only when it improves clarity without breaking the flow
- Keep scene internals organized with clear class naming and focused animation phases

For scene components, keep logic consolidated when interactions are tightly coupled, and extract only genuinely reusable units (for example `AnimatedBackground`).

---

## 🎯 Development Guidelines

### Animation Architecture

The project uses **GSAP (GreenSock Animation Platform)** for all animations following these principles:

- **Animations in components only**, never in pages
- **useLayoutEffect** for animation initialization (runs before browser paint)
- **GSAP context** for proper cleanup on unmount (`ctx.revert()`)
- **useRef** to target DOM elements (no global selectors like querySelector)
- **Gatsby SSR-safe** - animations only run in browser environment

**Animation patterns used:**
- Pulsing circles (scale animation with yoyo)
- Scroll-scrubbed scene transitions (zoom, vertical layer shifts)
- Staggered bottom-up card reveals linked to user scroll
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

### TypeScript

- Define clear interfaces for component props
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

- Unified LandingPage scroll scene with pinned progression
- Animated concentric circles background (17 circles with GSAP)
- Glassmorphic overlay effect (40px blur)
- Scroll-driven zoom-out hero/frame transition
- Scroll-driven marquee/background vertical shift
- Persistent top-left logo overlay in zoomed-out stage
- Staggered bottom-up project-card reveal integrated into scene
- Project title reveal integrated with project-card stage
- Animated gradient border effects on interactive elements

### 🚧 Next Steps

- Replace placeholder project cards with real project content/media
- Fine-tune cross-device timing and spacing for scene choreography
- Add additional sections (About, Contact, Skills) after the landing scene
- Add navigation menu
- Create individual project detail pages
- Add contact form with Netlify Forms
- Integrate analytics (optional)
- Add blog section (optional)

---

## 📝 Notes

- **Language:** English (all content)
- **Architecture Direction:** Scene-first, scroll-choreographed homepage with fewer larger components where needed
- **Custom Fonts:** Stored locally for performance and offline capability
- **Image Optimization:** All images processed through Gatsby Image for optimal loading

---

**Last Updated:** August 12, 2026