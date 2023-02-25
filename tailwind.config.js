/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "black-theme": "#181E20",
        "orange-theme": "#FFBB1C",
      },
    },
  },
  plugins: [],
};
