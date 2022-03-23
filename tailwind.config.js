module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#333d4b",
      "primary-blue": "#2563eb",
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
