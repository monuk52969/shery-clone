/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at top left, #144C3F, #0C0C0C)',
      },
      fontFamily: {
        neue: ['NeueRegular', 'sans-serif'],
        'neue-light': ['NeueLight', 'sans-serif'],
        'neue-bold': ['NeueBold', 'sans-serif'],

        helvetica: ['HelveticaRegular', 'sans-serif'],
        'helvetica-light': ['HelveticaLight', 'sans-serif'],
        'helvetica-medium': ['HelveticaMedium', 'sans-serif'],
        'helvetica-bold': ['HelveticaBold', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      animation: {
        shake: 'shake 1s infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
      },
    },
  },
  plugins: [],
}
