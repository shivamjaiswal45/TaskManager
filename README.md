<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=34&pduration=2000&color=8B5CF6&center=true&vCenter=true&width=700&lines=TaskManager+%E2%9C%85;Plan+it.+Do+it.+Done.;Built+with+React+19+%2B+Vite+%2B+Tailwind+4" alt="TaskManager typing banner" />
<p><i>A fast, minimal, distraction-free task manager that gets out of your way and lets you finish things.</i></p>
<p>
  <a href="https://task-manager-ten-zeta-34.vercel.app"><img src="https://img.shields.io/badge/%F0%9F%9A%80_Live_Demo-Open_App-8B5CF6?style=for-the-badge" alt="Live Demo" /></a>
  <a href="https://github.com/shivamjaiswal45/TaskManager/stargazers"><img src="https://img.shields.io/github/stars/shivamjaiswal45/TaskManager?style=for-the-badge&color=F59E0B" alt="Stars" /></a>
  <a href="https://github.com/shivamjaiswal45/TaskManager/fork"><img src="https://img.shields.io/github/forks/shivamjaiswal45/TaskManager?style=for-the-badge&color=10B981" alt="Forks" /></a>
</p>
<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white&style=flat-square" alt="ESLint" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white&style=flat-square" alt="Vercel" />
</p>
<br/>
🌐 Try it live →
<br/>
<!-- 📸 Replace this with a real screenshot or GIF: put it in /public/screenshots and update the path -->
<img src="./public/screenshots/hero.png" alt="TaskManager screenshot" width="85%" />
</div>
---
🧭 Table of Contents
Why TaskManager?
Features
Tech Stack
Quick Start
Available Scripts
Project Structure
Deployment
Roadmap
Contributing
Author
---
💡 Why TaskManager?
Most to-do apps are bloated with sign-ups, sync dialogs and features you never touch. TaskManager does one thing well: helps you capture tasks and finish them, with an interface that loads instantly and feels good to use.
🪶 Lightweight	⚡ Instant	🎨 Clean
No backend, no sign-up, tiny dependency footprint	Powered by Vite's lightning-fast dev and build pipeline	Tailwind CSS 4 styling with crisp Lucide icons
---
✨ Features
	Feature	Details
➕	Lightning-fast capture	Type a task and hit `Enter`, no buttons required
✅	One-tap completion	Toggle tasks done with a satisfying sound effect
✏️	Inline editing	Edit in place: `Enter` saves, `Esc` cancels
🗑️	Delete and bulk clear	Remove a single task or sweep away every completed one
📊	Live stats dashboard	Total, active and completed counts update instantly
📈	Progress tracking	A progress bar shows how much of your list is done
💾	Auto-save	Tasks persist in `localStorage`, so they survive refreshes and restarts
🔔	Toast notifications	Instant feedback for every add, update, delete and clear
🔊	Sound effects	Distinct audio cues for add, complete, update and delete
🌌	Animated glassy UI	Indigo, purple and pink gradient theme with floating background animations
📱	Fully responsive	Looks great on phone, tablet and desktop
🔒	Private by design	No account, no backend, no tracking. Your data never leaves your browser
---
🛠 Tech Stack
Layer	Technology
UI Library	React 19
Build Tool	Vite 8 with HMR
Styling	Tailwind CSS 4 via `@tailwindcss/vite`
Icons	Lucide React
Linting	ESLint 10 + React Hooks and React Refresh plugins
Hosting	Vercel
---
🚀 Quick Start
Prerequisites: Node.js 18+ and npm.
```bash
# 1. Clone the repository
git clone https://github.com/shivamjaiswal45/TaskManager.git

# 2. Jump into the project
cd TaskManager

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173) and start crossing things off. 🎉
---
📜 Available Scripts
Command	What it does
`npm run dev`	Starts the Vite dev server with hot module replacement
`npm run build`	Creates an optimized production build in `dist/`
`npm run preview`	Serves the production build locally for testing
`npm run lint`	Runs ESLint across the project
---
🗂 Project Structure
```text
TaskManager/
├── public/             # Static assets
├── src/
│   ├── App.jsx         # State, localStorage persistence and task logic
│   └── components/
│       ├── Animate.jsx       # Floating animated background
│       ├── Header.jsx        # Title and overall progress bar
│       ├── StatsGrid.jsx     # Total / active / completed cards
│       ├── Input.jsx         # New-task input
│       ├── TodoList.jsx      # Task list with inline editing
│       ├── ClearButton.jsx   # Clear completed tasks
│       ├── Notification.jsx  # Toast messages
│       └── PlaySound.js      # Sound effect helper
├── index.html          # App entry HTML
├── vite.config.js      # Vite + Tailwind + React plugin config
├── eslint.config.js    # ESLint flat config
└── package.json        # Dependencies and scripts
```
---
☁️ Deployment
TaskManager is deployed on Vercel, and every push to `main` can trigger a fresh deploy.
To deploy your own copy:
Fork this repo
Import it at vercel.com/new
Keep the defaults (Framework: Vite, Build: `npm run build`, Output: `dist`)
Click Deploy 🚀
---
🗺 Roadmap
[x] Add, edit, complete and delete tasks
[x] Persistent storage with `localStorage`
[x] Progress bar and stats dashboard
[x] Sound effects and toast notifications
[x] Responsive layout
[ ] 🔍 Search and filter (All / Active / Completed)
[ ] 🏷 Categories, tags and priorities
[ ] 📅 Due dates and reminders
[ ] 🔀 Drag-and-drop reordering
[ ] 🔇 Mute toggle for sound effects
[ ] ☁️ Optional cloud sync
Have an idea? Open an issue and let's talk.
---
🤝 Contributing
Contributions make open source great. To contribute:
Fork the project
Create your feature branch: `git checkout -b feature/amazing-feature`
Commit your changes: `git commit -m "Add amazing feature"`
Push to the branch: `git push origin feature/amazing-feature`
Open a Pull Request
Please run `npm run lint` before submitting.
---
👨‍💻 Author
Shivam Jaiswal
![GitHub](https://img.shields.io/badge/GitHub-shivamjaiswal45-181717?style=flat-square&logo=github)
---
<div align="center">
If TaskManager helped you get things done, drop a ⭐ — it means a lot!
<sub>Built with ☕, React and a long to-do list.</sub>
</div>
