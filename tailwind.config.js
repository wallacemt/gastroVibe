/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#2C2F24", 
        branco: "#FFFFFF", 
        dark: "#182226", 
        destaque: "#AD343E",
        claro: "#F9F9F7", 
        cinzaEscuro: "#414536", 
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"]
      },
    },
  },
  plugins: [],
};
