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
      gridTemplateColumns: {
        'title': '1fr auto 1fr',
        'about': '.1fr auto 1fr'
      },
      gridTemplateRows: {
        'title': '16px 0'
      },
    },
  },
  plugins: [],
}