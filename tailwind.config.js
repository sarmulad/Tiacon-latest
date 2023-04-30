/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#542CEA",
        "gradient":"linear-gradient(109.88deg, #38DBFF 1.73%, #243AFF 107.46%)",
        "secondary": "#FFFFE3",
        "butter": "#FFFFE3",
        "sky": "#DCE7FD",
        "peach": "#FADFD9"
      },
      fontFamily: {
        sans: ['var(--font-GeneralSans)']
      }
    },
  },
  plugins: [],
}