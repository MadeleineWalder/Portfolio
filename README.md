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

- 🎨 Modern glassmorphic design with blur effects
- 📱 Fully responsive across all device sizes
- ⚡ Optimized images with Gatsby Image
- 🎭 Smooth animations and transitions
- ♿ Accessibility-focused
- 🌙 Dark theme design
- 🔤 Custom typography with web fonts
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
│   │   └── LandingPage/     # Landing page component with glassmorphic effect
│   ├── fonts/               # Custom font files (WOFF2)
│   ├── images/              # Image assets
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

### Responsive Design

- Use responsive units: `vh`, `vw`, `%`, `rem`, `em`
- Avoid fixed pixels unless absolutely necessary
- Test on multiple device sizes

### CSS Best Practices

- Use CSS variables from `global.css` for colors, fonts, spacing
- Keep z-index values between 1-10 for maintainability
- Use flexbox/grid for layouts
- Mobile-first responsive design

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

## 🔮 Future Plans

- Add project showcase sections
- Implement smooth scroll animations
- Add contact form with Netlify Forms
- Create project detail pages
- Add blog section (optional)
- Integrate analytics

---

## 📝 Notes

- **Language:** English (all content)
- **Modular Design:** Built for easy updates and scalability
- **Custom Fonts:** Stored locally for performance and offline capability
- **Image Optimization:** All images processed through Gatsby Image for optimal loading

---

**Last Updated:** March 8, 2026