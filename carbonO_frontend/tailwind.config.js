/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "rgba(94, 147,135, .2)",
      },
      fontFamily: {
        default: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
