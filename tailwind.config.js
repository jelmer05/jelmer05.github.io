/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "black-theme": "#181E20",
        "orange-theme": "#FFBB1C",
        "white-theme": "#F2F4F5",
        "blauw-theme": "#02314D",
        "hover-orange": "#FFD471",
      },
    },
  },
  plugins: [],
};
