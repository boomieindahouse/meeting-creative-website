/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6', // Adjust to your brand color
        'primary-dark': '#2563EB'
      }
    },
  },
  plugins: [],
}