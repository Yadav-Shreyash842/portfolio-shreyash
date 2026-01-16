# 🎨 Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring a clean design with dark mode support and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![Motion](https://img.shields.io/badge/Motion-12.23.0-FF0080)

## ✨ Features

- 🌓 **Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Next.js 16** - Built with the latest Next.js App Router and Turbopack
- 🎭 **Smooth Animations** - Enhanced UX with Motion library
- 🎨 **Tailwind CSS** - Modern utility-first styling
- 🔧 **Component-Based** - Modular and maintainable architecture

## 📋 Sections

- **Header** - Hero section with introduction
- **About** - Personal information and background
- **Services** - Skills and offerings
- **Work** - Project showcase
- **Contact** - Get in touch form
- **Footer** - Social links and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── component/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   └── Work.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── assets/
│   ├── assets.js
│   └── public/
├── public/
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
└── postcss.config.mjs
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Language:** JavaScript
- **Linting:** ESLint

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Updating Content

1. **Personal Information:** Edit components in `app/component/`
2. **Assets:** Update images and data in `assets/assets.js`
3. **Styling:** Modify `app/globals.css` or Tailwind classes
4. **Theme:** Configure colors in `tailwind.config.mjs`

### Dark Mode

The dark mode toggle is implemented with localStorage persistence. The theme preference is saved and restored on page reload.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

**Yadav Shreyash**

- Portfolio: [Your Live URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

⭐️ If you like this project, give it a star!
