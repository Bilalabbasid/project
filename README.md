# DevPlatform - Vue 3 Developer Training Platform

This project is a complete front-end application for a developer training platform built with Vue 3, Vue Router, and Memberstack. It serves as a comprehensive example of a modern, complex single-page application (SPA).

## Project Overview

The platform features two main product lines:
- **Interviews**: Practice questions and playbooks for technical interviews.
- **Projects**: Real-world coding challenges to build a developer's portfolio.

## Technology Stack

- **Frontend**: Vue 3 (Composition API with `<script setup>`)
- **Routing**: Vue Router 4
- **Authentication & Payments**: Memberstack
- **Build Tool**: Vite

## Features

- **Dual-Product Structure**: Separate, nested routes for `/interviews` and `/projects`.
- **Memberstack Integration**: Handles user authentication, payments, and content gating.
- **Protected Routes**: Certain pages like the user dashboard and account page are protected and require authentication.
- **Content Gating**: Premium content (e.g., interview playbook sections, project solutions) is gated using Memberstack's `data-ms-content` attributes.
- **Component-Based Architecture**: Built with reusable Vue components.
- **Modern Styling**: Scoped CSS with a clean, professional design.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/devplatform.git
   cd devplatform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Memberstack:**
   - Open `src/main.js`.
   - Replace the placeholder `publicKey` with your actual Memberstack public key.
   ```javascript
   memberstack.init({
     publicKey: 'YOUR_MEMBERSTACK_PUBLIC_KEY' 
   })
   ```
   - In your Memberstack dashboard, create plans with IDs that match the ones used in the components (e.g., `pln_yearly_premium_plan_id`).

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build, run:

```bash
npm run build
```

The output files will be in the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

## Project Structure

```
/src
├── /components
│   ├── Nav.vue
│   ├── Footer.vue
│   ├── PricingTable.vue
│   └── ChallengeCard.vue
│
├── /views
│   ├── /core
│   ├── /auth
│   ├── /interviews
│   └── /projects
│
├── /router
│   └── index.js
│
├── App.vue
└── main.js
```

- **`src/components`**: Contains reusable components used across the application.
- **`src/views`**: Contains the main pages of the application, organized by section.
- **`src/router`**: Contains the Vue Router configuration, including all routes and navigation guards.
- **`src/main.js`**: The main entry point of the application, where Vue, Vue Router, and Memberstack are initialized.
- **`src/App.vue`**: The root component of the application.
