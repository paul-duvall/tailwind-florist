const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      themeRed: {
        default: '#f46e6d'
      },
      themeGreen: {
        default: '#BCDFE3'
      },
      themeBlue: {
        default: '#5989bf'
      },
      cardBackground: {
        default: 'rgba(243, 244, 246, .8)'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      backgroundImage: theme => ({
        'banner-image': "url('./images/flowers.jpg')"
      })
    },
    fontFamily: {
      title: ['Amatic SC']
    },
    inset: {
      '50': '50px',
      '100': '100px',
      '150': '150px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
