/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ecc71",     // Primary color
        sec: "#008080",         // Secondary color
        bright: "#A3D9B1",      // Buttons & bright accents
        buttonPorder: "#576f5d",
        parrellogrambg: "#141414",
        parrellogrambghv: "#0A0A0A",
        background: "#181818",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
