/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        primary: "#1DA1F2",
        secondary: "#657786",
      },
    },
  },
  plugins: [],
  plugins: [require("@tailwindcss/typography")],
};
