const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["CustomFont"],
      },
      colors: {
        "primary-dark": "#1e1e1e",
        "secondary-dark": "#4e5968",
        "dark-teal": "#464c47",
        "lighter-grey": "#E8E8E8",
        grey: "#9a9a9a",
        "darker-grey": "#323232",
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
      keyframes: {
        fadeInOut: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        mobileMenuEnter: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        mobileMenuItemsAppear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        charsIn: {
          to: { transform: "translate3d(0,0,0)", opacity: 1 },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 6s ease-in infinite",
        mobileMenuEnter:
          "mobileMenuEnter 0.7s cubic-bezier(0.62,0.05,0.01,0.99)",
        charsIn: "charsIn 1s cubic-bezier(0.62,0.05,0.01,0.99) forwards",
      },
      transitionTimingFunction: {
        "primary-curve": "cubic-bezier(0.62,0.05,0.01,0.99)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
