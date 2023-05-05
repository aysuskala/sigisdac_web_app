/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neo-0': 'rgba(42, 88, 146, 0.25) 0px 14px 28px, rgba(42, 88, 146, 0.22) 0px 10px 10px',
        'neo-1': 'rgba(42, 88, 146, 0.4) 5px 5px, rgba(42, 88, 146, 0.3) 10px 10px, rgba(42, 88, 146, 0.2) 15px 15px, rgba(42, 88, 146, 0.1) 20px 20px, rgba(42, 88, 146, 0.05) 25px 25px',
        'neo-2': 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      },
      dropShadow: {
        'navShadow': '4px 0px 2px rgba(42, 88, 146, 1)'
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/Vector.svg')"
      },
      content: {
        'blue': {
          'content': '',
          'position': 'absolute',
          'width': '500px',
          'height': '500px',
          'background': 'blue',
        },
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      animation: {
        'spin-slow': 'spin-y 2s linear infinite',
      },
      keyframes: {
        'spin-y': {
          '0%' : { transform: 'rotateY(0deg)' },
          '100%' : { transform: 'rotateY(360deg)' },
        }
      },
      screens: {
        'xs': '320px',
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}