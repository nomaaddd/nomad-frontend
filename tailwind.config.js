/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  colors: {
    purplePrimary: "#8B5CF6",
    neonPink: "#FF3CAC",
  },
  plugins: [],
}