const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans KR", "Noto Sans"],
        workSans: ["Work Sans", "sans-serif"],
        monoLisa: ["Mono Lisa", "sans-serif"],
        notoSansEng: ["Noto Sans"],
      },
      colors: {
        "primary-dark": "#333d4b",
        "secondary-dark": "#4e5968",
        "tertiary-dark": "#8b95a1",
        "primary-blue": "#2563eb",
        gray: "rgba(0,27,55,0.1)",
        blue: colors.blue,
      },
      screens: {
        contentSize: "1365px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
