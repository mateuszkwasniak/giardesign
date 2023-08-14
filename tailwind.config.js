/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gd_beige: "#DCC1AB",
        gd_grey: "#F5F0EC",
        gd_green: "#1B5B31",
        gd_black: "#111111",
        gd_white: "#FFFFFF",
      },
    },
    colors: {},
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      headline: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
