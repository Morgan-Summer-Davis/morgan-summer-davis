const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './**/*.html', './**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#daf1de',
        midnightblue: '#051f20',
        grouparooblue: '#8EB69B',
        airbytepurple: '#235347',
        reverb: {
          100: '#00E9CA',
          200: '#00b099',
        },
        link: {
          normal: '#4c74b9',
          decoration: '#d2dcee',
          hover: '#829dce',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
