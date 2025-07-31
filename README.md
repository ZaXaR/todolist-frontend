# 📝 Todolist Frontend

A modern task management web application built with **Next.js**, **Tailwind CSS**, and **TypeScript**, designed for speed, scalability, and developer-friendly workflows.

## 🚀 Features

- 🔐 **JWT Authentication**  
  Secure login and session management using JSON Web Tokens. Tokens are stored in cookies for persistent authentication across sessions.

- 🎨 **Tailwind CSS + SCSS**  
  Hybrid styling approach combining utility-first Tailwind with modular SCSS for flexibility and maintainability.

- 🍪 **Cookie-Based Session Handling**  
  Auth tokens and user data are stored in HTTP-only cookies to enhance security and simplify client-side logic.

- 🧠 **Task Management**  
  - Create, edit, delete tasks  
  - Mark tasks as done or undone  
  - View task status (Pending / Done)  
  - Set deadlines and timestamps

- 🖼️ **Custom Avatar Integration**  
  Pixel-style avatars replace copyrighted characters for a playful, safe UI.

- 📦 **Next.js App Router**  
  Uses the latest Next.js routing system for optimized performance and modular page structure.

## 🛠️ Tech Stack

Technology

Next.js

React framework for SSR and routing

TypeScript

Type-safe development

Tailwind CSS

SCSS

Modular and reusable styles

JWT

Authentication and session control

Cookies

Secure token storage

Deployment platform

📂 Project Structure

├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # App router pages
│   ├── components/      # Reusable UI components
│   ├── styles/          # SCSS and Tailwind config
│   └── utils/           # Helper functions
├── tsconfig.json        # TypeScript configuration

🧪 Getting Started

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000

🔐 Authentication Flow

User logs in via backend API

JWT is returned and stored in secure cookie

Frontend reads cookie to validate session

Protected routes and actions are gated by token presence

📸 UI Preview

The interface includes:

Sidebar with avatar and logout

Task list with status indicators

Task creation form with date picker

Responsive layout with subtle animations