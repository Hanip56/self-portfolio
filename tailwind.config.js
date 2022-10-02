/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        bgBlue: "#0d1828",
        titleBlue: "#639dcf",
        txtWhite: "#fffefc",
      },
      gridTemplateColumns: {
        autoFill: "repeat(auto-fit, minmax(5rem, 11rem) )",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
