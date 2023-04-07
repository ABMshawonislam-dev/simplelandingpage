/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3775ED",
      },
      backgroundImage: {
        logos: "url('./images/logos.png')",
      },
    },
  },
  plugins: [require("limbcss")],
};
