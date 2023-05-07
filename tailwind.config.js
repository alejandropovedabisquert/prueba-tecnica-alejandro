/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color': '#FF844B',
        'secondary-color': '#ED9200',
      },
    },
  },
  plugins: [],
}