/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '380px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  plugins: [],
};
