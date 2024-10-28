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
    },
  },
  plugins: [],
};
