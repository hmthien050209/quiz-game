/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#c8a888",
        titleForegroundColor: "#5f1a1f",
        normalForegroundColor: "#493423",
      },
    },
  },
  plugins: [],
};
