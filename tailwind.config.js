module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#333d4b",
      "secondary-dark": "#4e5968",
      "tertiary-dark": "#8b95a1",
      "primary-blue": "#2563eb",
      gray: "rgba(0,27,55,0.1)",
    },
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans KR", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
