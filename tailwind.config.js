// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: '15px',
      screens: {
        xl: '1320px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
