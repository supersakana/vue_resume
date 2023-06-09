/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '850px',
      'ml': '1050',
      'lg': '1225px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('/src/assets/media/doc-bg.svg')",
        'pattern-dark': "url('/src/assets/media/dark-doc-bg.svg')",
      },
    },
  },
  plugins: [],
}
