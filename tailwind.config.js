/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This tells Tailwind to scan all JSX and TSX files in the src folder
  ],
  theme: {
    extend: {
      // Customize your theme (optional)
      colors: {
        dark: '#1a202c', // Dark background color
        accent: '#f72585', // Pink accent color
      },
    },
  },
  plugins: [],
}
