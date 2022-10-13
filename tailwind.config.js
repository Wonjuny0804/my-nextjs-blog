const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans KR", "Noto Sans"],
        workSans: ["Work Sans", "sans-serif"],
        monoLisa: ["Mono Lisa", "sans-serif"],
        notoSansEng: ["Noto Sans"],
        montserrat: ["Montserrat"],
      },
      colors: {
        "primary-dark": "#333d4b",
        "secondary-dark": "#4e5968",
        grey: "#9a9a9a",
        "tertiary-dark": "#8b95a1",
        "primary-blue": "#2563eb",
        "real-black": "#000000",
        gray: "rgba(0,27,55,0.1)",
        milk: "#f4f4f0",
        blue: colors.blue,
      },
      screens: {
        contentSize: "1365px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
