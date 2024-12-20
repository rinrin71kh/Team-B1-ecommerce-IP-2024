const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#254061',
        secondary: '#F4F4F4',
        dark: '#212121',
        light: '#F8F8F8'
      }
    },
  },
  plugins: [nextui()],
};
