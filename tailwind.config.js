/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand'],
      },
      colors:{
        herogray: 'rgb(139,139,149)',
        heroblue: 'rgb(45,46,63)',
        secondarygray : 'rgb(233,235,237)',
        darkhero: 'rgb(204, 243, 129)',
        darkbg: 'rgb(43, 42, 42)',
      },
      fontSize:{
        hero : '15rem',
        secondary: '8rem',
      },
      height:{
        hero: '50rem',
        secondary: '35rem',
        footer: '26rem',

      },
      width:{
        hero: '45rem',
        
      },
      padding:{
        hero: '35rem',
      },
      opacity:{
        hero: '8%',
      },
      screens: { 'sm': { 'max': '768px' },
    'lg': {'max': '1024'} },
    },

  },
  plugins: [],
}


