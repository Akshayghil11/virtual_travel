/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 10px 3px rgba(0, 0, 255, 0.5)",
      },
      fontFamily: {
        teacher : ['"Teachers"',"sans-serif"],
        lebre :["Libre Caslon","sans-serif"]
      }
    },
  },
  plugins: [],
}