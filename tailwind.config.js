/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs:"320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      six: "600px"
    },
    extend: {
      colors:{
        buttons:'#EFE3C8',
        theme:"#D9D9D9"
      },
      aspectRatio: {
        '2/3': '2 / 3',
    },
    },
},
  plugins: [],
}
