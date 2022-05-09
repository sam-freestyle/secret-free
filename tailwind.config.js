module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'inter': ["Inter","sans-serif"]
    },
    extend: {     
      colors: {
        darkgrey: '#1B1B20',
        offwhite: '#F9F7EF',
        midgrey: '#595959',
        grey: '#B0B0A7',
        lightgrey: '#E3E1DA'
      }
    },
  },
  plugins: [],
};
