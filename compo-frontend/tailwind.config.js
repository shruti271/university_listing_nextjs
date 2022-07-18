/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        colorPrimary: '#0364FF',
        colorSecondary: '#EB6B09',
        colorBlack: '#000000',
        colorWhite: '#FFFFFF',
        colorStone: '#544E5D',
        colorPale: '#F9F9FA',
        colorGrey: '#F0F0F0',
        colorTransparent: 'transparent',
      },
    },
  },
};
