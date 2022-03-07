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
        E3E9EE: "#E3E9EE",
        F4F5F7: "#F4F5F7",
        "94A2AB": "#94A2AB",
        "3C454A": "#3C454A",
        C0C0C0: "#C0C0C0",
        F3F3F3: "#F3F3F3",
        F9F9F9: "#F9F9F9"
      },
      lineHeight: {
        56: "56px",
        47: "47px",
        35: "35px",
      },
      height: {
        185: "185px",
        '1px': '1px'
      },
      opacity: {
        15: "0.15",
      },
      dropShadow: {
        dropdown: "0px 1px 1px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
