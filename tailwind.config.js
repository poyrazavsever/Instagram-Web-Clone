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
      },

      backgroundImage: {
        "logo-pattern" : "url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)"
      }
    },
  },
  plugins: [],
}