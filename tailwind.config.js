/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#3AA852',
      }
    },
  },
  plugins: [ require('flowbite/plugin'),require('tailwindcss-animated')],

}
