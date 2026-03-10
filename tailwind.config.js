/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // اضافه کردن فونت Outfit
      },
      colors: {
        primary: {
          500: 'hsl(215, 51%, 70%)',
        },
        cyan: {
          400: 'hsl(178, 100%, 50%)',
        },
        neutral: {
          950: 'hsl(217, 54%, 11%)',
          900: 'hsl(216, 50%, 16%)',
          800: 'hsl(215, 32%, 27%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};