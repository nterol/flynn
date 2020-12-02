module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        waving: 'waving 2.5s infinite ease-in-out',
      },
      keyframes: {
        waving: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '10%, 30%': {
            transform: 'rotate(-10deg)',
          },
          '20%': {
            transform: 'rotate(12deg)',
          },
          '40%': {
            transform: 'rotate(9deg)',
          },
        },
      },
      colors: {
        black: {
          typography: '#0e172c',
        },
        blue: {
          gradient: '#378ea9',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
