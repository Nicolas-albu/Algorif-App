/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#F8F8F8',
          200: '#ECECEC',
        },
        gray: {
          300: '#C0C4CE',
          400: '#CCCFD9',
          500: '#9B9EA3',
        },
        blue: {
          100: '#121B2E',
          200: '#111827',
          300: '#101520',
        },
        green: {
          100: '#3FC79A',
          200: '#00A884',
        },
      },
    },
  },
  plugins: [],
}
