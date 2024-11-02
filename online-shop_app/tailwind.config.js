/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        TOP_BAR: "#1e3553",
        NAV_BAR: "#f7fdfe",
        CART_COUNT: "#ff9100",
      },
      keyframes: {
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fade-slide-up 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
