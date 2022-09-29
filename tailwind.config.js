/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bg : "#121212",
        search: "#262626",
        border: "#363636",
      },
    },
  },
  plugins: [],
}