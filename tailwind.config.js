/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111211',
        secondary: '#1b1a3d',
        gray: {
          50: '#ffffff', // White
          100: '#f0f0f0',
          200: '#d9d9d9',

        },
      },
    },
  },
  plugins: [],
}
