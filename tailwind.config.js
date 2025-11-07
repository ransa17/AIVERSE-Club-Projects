/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        softCream: "#fdf6e3",
        mainBlue: "#3498db",
        infoPurple: "#8e44ad",
        highlightGold: "#ffd700",
        success: "#2ecc71",
        danger: "#dc143c",
        cardBase: "#ffffff",
        priceUp: "#dc143c",
        priceDown: "#2ecc71",
      }
    },
  },
  plugins: [],
}
