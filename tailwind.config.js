/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#FAAB35",
        secondary: "#FF6A07",
        terciary: "#6E2C00",
        quartenary:"#FFE5D4",
      },
      
      container:{
        center:true,
        padding:{
          DEFAUT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      },
      extend:{
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}

