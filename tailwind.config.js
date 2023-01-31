module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",  
  theme: {
    extend: {
      width : {
        '800' : '800px'
      },
      colors: {
        'filter-color': '#f4f4f4'
      },
      flex : {
        '0' : '0 0 100%'
      },
      borderRadius : {
        'half' : '50%',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}