# 🚀 Next.js 15 Project

A modern web app built with the latest **Next.js 15** and **React 19**, styled using **TailwindCSS v4**, and enhanced with **Radix UI**, **Lucide icons**, and smooth animations powered by **GSAP**.

---

## ✨ Features

- ⚡️ **Next.js 15** App Router
- 🎨 **TailwindCSS v4** (with `tailwind-merge`)
- 🌓 Dark/Light mode support (`next-themes`)
- 🎭 Smooth animations with **GSAP** (`@gsap/react`)
- 🧩 Accessible components with **Radix UI**
- 🖼 Icon system with **Lucide React**
- 📖 Beautiful typography via **@tailwindcss/typography**

---

## 🛠 Tech Stack

- **Framework**: Next.js 15, React 19
- **Styling**: TailwindCSS v4, tailwind-merge, tw-animate-css
- **UI Components**: Radix UI, Lucide React
- **Animations**: GSAP
- **Themes**: next-themes
- **Linting**: ESLint 9 + Next.js config
- **Language**: TypeScript 5

---

## 📂 Project Structure

```
├── app/
│   ├── pages/
│   ├── global.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/gihonhon/my-hello-world.git
cd my-hello-world
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

```
Note : If you want using Bun so you must change the config file!. Read the Bun Documentation for next.js config file.
```

### 3 Run development server

```bash
npm run dev
```

---

# 📦 Build & Deploy

### Build

```bash
npm run build
```

### Start (production)

```bash
npm start
```

### Deploy Options

- Vercel --> recomended(Next.js native hosting)
- Docke / VPS --> run with PM2 + Nginx
