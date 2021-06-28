module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'usa': '#0353A4',
        'oxford': '#061A40',
        'honolulu-light': '#008EDD',
        'honolulu': '#006DAA',
        'honolulu-dark': '#004C77',
        'prussian': '#003559'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
