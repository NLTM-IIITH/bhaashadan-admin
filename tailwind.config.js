/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      }
    },
    colors: {
      'red': '#ef4444',
      'navyBlue': '#172554',
      'green': '#0ECA7E',
      'darkGreen': '#0AAE6C',
      'lightGreen': '#D7F8EB',
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}