/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#588ae0', // Blue 500
            hover: '#a3b9ed', // Blue 300
            pressed: '#30528a', // Blue 700
            disabled: '#B5AAC8',
          },
          secondary: {
            DEFAULT: '#7c3aed', // Purple 600
            hover: '#9333ea', // Purple 700
            pressed: '#6b21a8', // Purple 800
            disabled: '#DDE4BA',
          },
          destructive: {
            DEFAULT: '#dc2626', // Red 600
            hover: '#ef4444', // Red 500
            pressed: '#991b1b', // Red 800
            disabled: '#E89999',
          },
          positive: {
            DEFAULT: '#16a34a', // Green 600
            hover: '#22c55e', // Green 500
            pressed: '#15803d', // Green 700
            disabled: '#86efac',
          },
        },
      },
    },
    plugins: [],
  }