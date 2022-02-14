module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: '1440px'
      },
      colors: {
        primary: '#3C454A',
        landingBG: '#FAFAFA',
        trendingNewsBg: '#C4C4C4',
        footerBg: '#EAECEE'
      },
      lineHeight: {
        56: '56px'
      },
      height: {
        185: '185px'
      }
    },
  },
  plugins: [],
}