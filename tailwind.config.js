/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layouts/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
