const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xsm: '460px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
