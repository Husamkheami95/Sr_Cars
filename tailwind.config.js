/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bluebold':'#253241',
      },
      boxShadow:{
        card: "0px 3px 6px #00000029",
      }
    },
  },
  plugins: [
  {  'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},}
  ],
}
