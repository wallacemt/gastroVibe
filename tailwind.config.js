/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#2C2F24", // Cor principal
        branco: "#FFFFFF", // Branco
        dark: "#182226", // Detalhes escuros
        destaque: "#AD343E", // Cor de destaque (vermelho)
        claro: "#F9F9F7", // Fundo claro
        cinzaEscuro: "#414536", // Cinza-escuro para texto
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
