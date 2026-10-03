<div align="center">

# ✨ TaskFlow

### Productivity, Redefined.

A fast, beautiful, distraction-free task manager that gets out of your way and lets you finish things.

<br>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Open_App-8B5CF6?style=for-the-badge)](https://task-manager-ten-zeta-34.vercel.app)
[![Stars](https://img.shields.io/github/stars/shivamjaiswal45/TaskManager?style=for-the-badge&color=F59E0B)](https://github.com/shivamjaiswal45/TaskManager/stargazers)
[![Forks](https://img.shields.io/github/forks/shivamjaiswal45/TaskManager?style=for-the-badge&color=10B981)](https://github.com/shivamjaiswal45/TaskManager/fork)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&style=flat-square)

<br>

**[🌐 Try it live →](https://task-manager-ten-zeta-34.vercel.app)**

<br>

<img src="./screenshots/progress.png" alt="TaskFlow in action with progress tracking" width="90%">

</div>

---

## 📖 Table of Contents

- [Why TaskFlow?](#-why-taskflow)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 💡 Why TaskFlow?

Most to-do apps are bloated with sign-ups, sync dialogs and features you never touch. **TaskFlow does one thing well:** it helps you capture tasks and finish them, in an interface that loads instantly and feels great to use.

| 🪶 Lightweight | ⚡ Instant | 🎨 Beautiful |
| :--- | :--- | :--- |
| No backend, no sign-up, tiny dependency footprint | Powered by Vite's lightning-fast build pipeline | Glassmorphism UI with a purple-to-pink gradient theme |

---

## 📸 Screenshots

<div align="center">

| Empty state | Your task list | Tracking progress |
| :---: | :---: | :---: |
| <img src="./screenshots/empty-state.png" alt="Empty state" width="300"> | <img src="./screenshots/tasks.png" alt="Task list" width="300"> | <img src="./screenshots/progress.png" alt="Progress at 50%" width="300"> |

</div>

---

## ✨ Features

| | Feature | Details |
| :-: | :--- | :--- |
| ➕ | **Lightning-fast capture** | Type a task and press `Enter` |
| ✅ | **One-tap completion** | Mark tasks done with a satisfying sound effect |
| ✏️ | **Inline editing** | Edit in place: `Enter` saves, `Esc` cancels |
| 🗑️ | **Delete and bulk clear** | Remove one task or clear all completed tasks at once |
| 📊 | **Live stats dashboard** | Total, active and completed counts update instantly |
| 📈 | **Progress tracking** | An animated progress bar shows how much you've finished |
| 💾 | **Auto-save** | Tasks persist in `localStorage` across refreshes and restarts |
| 🔔 | **Toast notifications** | Instant feedback for every add, update, delete and clear |
| 🔊 | **Sound effects** | Distinct audio cues for add, complete, update and delete |
| 🌌 | **Animated glassy UI** | Floating particles and a shimmering gradient background |
| 📱 | **Fully responsive** | Works on phone, tablet and desktop |
| 🔒 | **Private by design** | No account, no backend, no tracking. Your data stays in your browser |

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **UI Library** | [React 19](https://react.dev) |
| **Build Tool** | [Vite 8](https://vite.dev) with HMR |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Linting** | [ESLint 10](https://eslint.org) with React Hooks and React Refresh plugins |
| **Hosting** | [Vercel](https://vercel.com) |

---

## 🚀 Quick Start

**Prerequisites:** [Node.js](https://nodejs.org) 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/shivamjaiswal45/TaskManager.git

# 2. Move into the project
cd TaskManager

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`) and start crossing things off. 🎉

---

## 📜 Available Scripts

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server with hot module replacement |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

---

## 🗂 Project Structure

```text
TaskManager/
├── public/                  # Static assets
├── screenshots/             # README images
├── src/
│   ├── App.jsx              # State, localStorage persistence, task logic
│   └── components/
│       ├── Animate.jsx      # Floating animated background
│       ├── Header.jsx       # Title and overall progress bar
│       ├── StatsGrid.jsx    # Total / active / completed cards
│       ├── Input.jsx        # New-task input
│       ├── TodoList.jsx     # Task list with inline editing
│       ├── ClearButton.jsx  # Clear completed tasks
│       ├── Notification.jsx # Toast messages
│       └── PlaySound.js     # Sound effect helper
├── index.html               # App entry HTML
├── vite.config.js           # Vite, Tailwind and React plugin config
├── eslint.config.js         # ESLint flat config
└── package.json             # Dependencies and scripts
```

---

## ☁️ Deployment

TaskFlow is deployed on **Vercel**, and every push to `main` can trigger a fresh deploy.

To deploy your own copy:

1. Fork this repo
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Keep the defaults (Framework: **Vite**, Build: `npm run build`, Output: `dist`)
4. Click **Deploy** 🚀

---

## 🗺 Roadmap

- [x] Add, edit, complete and delete tasks
- [x] Persistent storage with `localStorage`
- [x] Progress bar and stats dashboard
- [x] Sound effects and toast notifications
- [x] Responsive layout
- [ ] 🔍 Search and filter (All / Active / Completed)
- [ ] 🏷 Categories, tags and priorities
- [ ] 📅 Due dates and reminders
- [ ] 🔀 Drag-and-drop reordering
- [ ] 🔇 Mute toggle for sound effects
- [ ] ☁️ Optional cloud sync

Have an idea? [Open an issue](https://github.com/shivamjaiswal45/TaskManager/issues) and let's talk.

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the project
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m "Add amazing feature"`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

Please run `npm run lint` before submitting.

---

## 👨‍💻 Author

**Shivam Jaiswal**

[![GitHub](https://img.shields.io/badge/GitHub-shivamjaiswal45-181717?style=flat-square&logo=github)](https://github.com/shivamjaiswal45)

---

<div align="center">

### If TaskFlow helped you get things done, drop a ⭐. It means a lot!

<sub>Built with ☕, React and a long to-do list.</sub>

</div>
