/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      'black': '#000000',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-500': '#7C7C8A',
      'gray-300': '#CACACC',
      'gray-100': '#E1E1E6',

      'cyan-600': '#50C9EA',
      'cyan-500': '#61DAFB',
      'cyan-400': '#72EBFC',
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
