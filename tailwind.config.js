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
        btn:"#0095f6",
        facebook:"#385185",
        link:"#00376b",
      },

      backgroundImage: {
        "logo-pattern" : "url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)"
      }
    },
  },
  plugins: [],
}