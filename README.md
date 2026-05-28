# Namrata Foundation — Cinematic Website UI

An ultra-premium, cinematic, and interactive showcase website for **Namrata Foundation** (Nagpur, Maharashtra, India). The project utilizes a modern visual storytelling aesthetic inspired by award-winning creative campaigns (e.g., Apple keynotes, Tesla product pages, and Awwwards portfolios).

---

## 🎨 Visual Aesthetics & Key Features

*   **Cinematic Preloader**: A 0% to 100% progress counter that cycles through inspiring campaign keywords before transitioning into the main viewport with GSAP clip-path animations.
*   **Magnetic Custom Cursor**: A dual-element cursor (magnetic dot and outer trailing ring) that responds with inertia damping and scales up on hover targets.
*   **Drifting Canvas Particles**: A background 2D Canvas engine in the Hero section simulating organic ember/seed drift that repels on mouse proximity.
*   **Scroll-Linked Milestones & Counters**: A vertical timeline line that fills up as you scroll, lighting up milestones and trigger count-up animations for key statistics.
*   **Interactive Before-After Comparison**: A custom split-screen slider widget allowing users to drag and preview rural transformations.
*   **Scroll-Spy Navbar Link Highlighting**: A dynamic listener that actively detects the visible viewport section and shifts menu highlights automatically.
*   **3D Card Tilt Effects**: Smooth perspective rotation animations triggered by mouse cursor movement across focus cards and leadership profiles.
*   **Sleek Neon-Glow Styling**: Uses custom HSL tokens, dark-navy gradients, Outfit/Inter typography hierarchy, and glassmorphic panels.

---

## 🛠️ Technology Stack

*   **Frontend Library**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite 8](https://vite.dev/)
*   **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/)
*   **Iconography**: [Lucide React](https://lucide.dev/) (Pinned to v0.469.0 for brand icon support)
*   **Styling**: Vanilla CSS (Custom properties, transitions, and filters)
*   **API Server**: [Express 4](https://expressjs.com/) (Node.js backend framework)

---

## 📂 Project Structure

```
namrata-foundation/
├── package.json         # Root task orchestrator (dev server launcher)
├── backend/             # Express API Server
│   ├── package.json
│   ├── server.js        # REST API endpoints (Port 5000)
│   └── database.json    # Local JSON database record store
└── frontend/            # Vite + React Client
    ├── package.json
    ├── index.html       # Outer mount, links Font and GSAP script tags
    └── src/
        ├── main.jsx
        ├── App.jsx      # View routing & scroll hooks
        ├── style.css    # Neon glows, responsive layouts & keyframes
        ├── assets/      # Generated cinematic PNG assets
        └── components/  # Modular React widgets (Preloader, Hero, Story, etc.)
```

---

## 🚀 Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- [NPM](https://www.npmjs.com/) (installed automatically with Node)

### Step-by-Step Launch

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/SwayamNerkar/namrataFoundation.git
    cd namrataFoundation
    ```

2.  **Install All Dependencies**:
    Initialize the root, backend, and React frontend packages:
    ```bash
    npm run install-all
    ```

3.  **Start the Local Servers**:
    Launch the Express server (port `5000`) and the Vite development client (port `5173`) concurrently:
    ```bash
    npm run dev
    ```

4.  **Preview in Browser**:
    Open [http://localhost:5173](http://localhost:5173) to explore the website.

---

## 📜 NGO Credentials

*   **Established Date**: 06 October 2022
*   **NGO Darpan ID**: MH/2023/0350199
*   **Registration Number**: NAGPUR/0000463/2022
*   **Headquarters**: Nagpur, Maharashtra, India
