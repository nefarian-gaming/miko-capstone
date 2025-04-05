/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#4F46E5",
      secondary: "#10B981",
      accent: "#F59E0B",
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      white: '#FFFFFF',
      gray: {
        100: '#F3F4F6',
        300: '#D1D5DB',
        500: '#6B7280',
        700: '#374151',
        900: '#111827'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}