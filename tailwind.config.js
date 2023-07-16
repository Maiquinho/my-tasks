/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
      '2xl': 40
    },

    fontWeight: {
      'regular': '400',
      'medium': '500',
      'semi-bold': '600',
    },

    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      red: '#E13535',

      gray: {
        900: '#0d0d0d',
        850: '#202020',
        800: '#262627',
        600: '#8a8a8a',
        400: '#D9D9D9',
        200: '#EEEEEE',
      },

    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

