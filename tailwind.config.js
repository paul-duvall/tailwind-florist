module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-image': "url('./images/flowers.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
