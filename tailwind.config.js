/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'978px',
      xl:'1440px',

    },
    extend: {
      colors:{
        redLight: 'hsl(21, 90%, 48%)',
        lightBrightRed:'hsl(31, 97%, 72%)',
        lightGreen:'hsl(156, 72%, 67%)',
        yellowLight:'hsl(43, 96%, 56%)',
        darrkYellowLight:'hsl(32, 95%, 44%)',
        darkkBlue:'hsl(226, 71%, 40%)',
        verLightGray:'hsl(215, 16%, 47%)',
        veryDarkPink:'hsl(295, 72%, 40%)',
      },
    },
  },
  plugins: [],
}

