/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      gray: {
        900: '#121214',
        800: '#202024',
        500: '#7C7C8A',
        300: '#CACACC',
        100: '#E1E1E6',
      },

      cyan: {
        600: '#50C9EA',
        500: '#61DAFB',
        400: '#72EBFC',
      }
      

    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
