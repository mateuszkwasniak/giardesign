/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      spacing: {
        gd_section_padding: "5.5625rem",
      },
      colors: {
        gd_beige: "#DCC1AB",
        gd_grey: "#F5F0EC",
        gd_green: "#1B5B31",
        gd_black: "#111111",
        gd_white: "#FFFFFF",
      },
      animation: {
        bounce_rt: "bounce_right 0.75s linear infinite",
      },
      keyframes: {
        bounce_right: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      headline: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
