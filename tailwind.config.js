/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark1: "#111111",
        dark2: "#414141",
        blue: "#1090DB",
      }
    },
  },
  plugins: [],
}