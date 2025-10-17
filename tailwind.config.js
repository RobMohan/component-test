/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#8B7BA8',
            hover: '#7A6A97',
            disabled: '#B5AAC8',
          },
          secondary: {
            DEFAULT: '#C8D494',
            hover: '#B7C383',
            disabled: '#DDE4BA',
          },
          destructive: {
            DEFAULT: '#D84444',
            hover: '#C33333',
            disabled: '#E89999',
          },
        },
      },
    },
    plugins: [],
  }