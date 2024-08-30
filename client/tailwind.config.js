/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkHeader": "#0D0D0D",
        "darkContent": "#1A1A1A",
        "darkInput": "#262626",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      }
    },
  },
  plugins: [],
}

