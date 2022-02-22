module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
        622: "622px",
      },
      colors: {
        primary: "#3C454A",
        FAFAFA: "#FAFAFA",
        C4C4C4: "#C4C4C4",
        EAECEE: "#EAECEE",
        C9D2D8: "#C9D2D8",
      },
      lineHeight: {
        56: "56px",
      },
      height: {
        185: "185px",
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};
