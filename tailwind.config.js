/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          background: "#F7F8F9",
          background2: "#FAFAFA",
          purple100: "#6C25FF",
          black50: "#74777B",
          black100: "#6C25FF4B",
          black200: "#1D2226",
          white100: "#FFFFF",
          white200: "#CBCBCB",
          red100: "#DD4A3D",
      },
      fontFamily: {
        "rubix": ['Rubik']
      }
    },
  },
  plugins: [],
}