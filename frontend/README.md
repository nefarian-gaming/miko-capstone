# Cebu Delights Frontend

The frontend for the Cebu Delights E-Commerce application built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Product browsing and filtering by category
- Shopping cart functionality
- User authentication (login/registration)
- Checkout process

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- React Router for navigation
- Vite for bundling and development

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:5173

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
/src
  /components          # Reusable UI components
  /services            # API and other services
  /types               # TypeScript type definitions
  /assets              # Images and other static assets
  App.tsx              # Main application component
  main.tsx             # Entry point
```

## Environment Variables

- `VITE_API_URL`: The URL for the backend API

## Deployment

See the main `DEPLOY.md` file in the project root for deployment instructions.
