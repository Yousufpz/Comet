// tailwind.config.js
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/navbar.js",
  "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};