# 🚀 Portfolio Project

> A modern, full-stack portfolio application built with Next.js, Express, and TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-green?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- **🎨 Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **⚡ Next.js 15** - Latest features with Turbopack for fast development
- **🔒 Type Safety** - Full TypeScript implementation
- **🚀 Full-Stack** - Client-server architecture with Express backend
- **📱 Responsive** - Mobile-first design approach
- **🎯 Component-Based** - Modular React components for maintainability

## 🏗️ Architecture

This project follows a monorepo structure using Lerna:

```
portfolio/
├── client/          # Next.js frontend application
├── server/          # Express.js backend API
└── shared/          # Shared utilities and types
```

### Frontend (Client)
- **Next.js 15** with App Router
- **React 19** with modern hooks
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Lucide React** for beautiful icons

### Backend (Server)
- **Express.js 5** with TypeScript
- **MongoDB** with Mongoose ODM
- **Security** with Helmet middleware
- **CORS** enabled for cross-origin requests
- **Cookie Parser** for session management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create environment files
   cp .env.example .env.local
   # Add your MongoDB connection string and other configs
   ```

4. **Start Development**
   ```bash
   # Start both client and server
   npm run dev
   
   # Or start individually
   npm run dev:client    # Frontend on port 3333
   npm run dev:server    # Backend on default port
   ```

## 📱 Available Scripts

### Root Level
```bash
npm run dev          # Start both client and server
npm run dev:client   # Start frontend only
npm run dev:server   # Start backend only
npm run build        # Build frontend for production
npm run serve        # Serve built frontend
npm run start        # Start production server
```

### Client
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Server
```bash
npm run dev          # Start with hot reload
npm run start        # Start production server
```

## 🌟 Key Components

- **Hero Section** - Eye-catching introduction
- **About Section** - Personal information and skills
- **Projects Section** - Showcase of your work
- **Contact Section** - Get in touch form
- **Header & Footer** - Navigation and links

## 🛠️ Tech Stack

### Frontend
- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Icon library

### Backend
- [Express.js 5](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM
- [Helmet](https://helmetjs.github.io/) - Security middleware

### Development Tools
- [Lerna](https://lerna.js.org/) - Monorepo management
- [ESLint](https://eslint.org/) - Code linting
- [PostCSS](https://postcss.org/) - CSS processing

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── styles/              # Global styles
│   └── public/              # Static assets
├── server/
│   ├── middlewares/         # Express middlewares
│   ├── routers/             # API routes
│   └── index.ts            # Server entry point
└── lerna.json              # Monorepo configuration
```

## 🔧 Configuration

### Frontend Configuration
- **Port**: 3333 (development)
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with PostCSS
- **TypeScript**: Strict mode enabled

### Backend Configuration
- **Runtime**: Bun (recommended) or Node.js
- **Database**: MongoDB with Mongoose
- **Security**: Helmet, CORS, Cookie Parser
- **TypeScript**: ES modules with strict typing

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the .next folder
```

### Backend (Railway/Render)
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Express.js](https://expressjs.com/) for the backend framework
- [Lerna](https://lerna.js.org/) for monorepo management

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>Feel free to ⭐ this repository if it helped you!</p>
</div>
