/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A0DAD",   // Purple
        secondary: "#000000", // Black
        light: "#ffffff"      // White
      }
    },
  },
  plugins: [],
};
