/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boldWide: ["boldwide", "sans-serif"],
        extraBoldWide: ["extraboldwide", "sans-serif"],
        medium: ["medium", "sans-serif"],
        mediumWide: ["mediumwide", "sans-serif"],
        regular: ["regular", "sans-serif"],
      },
      colors: {
        custom_black: "#101010",
        custom_white: "#F9F9F9",
        primary: "#F1583B",
        light_orange: "#F37058",
        light_blue: "#7F9CC2",
        light_red: "#E25F63",
        custom_gray: "#242424"
      },
      backgroundImage: {
        'header': "url('/assets/header_svg.svg')",
      }
    },
  },
  plugins: [],
}
