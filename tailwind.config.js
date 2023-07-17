/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        vibes:['Great Vibes', 'cursive']
      },
      colors: {
        jade: '#077b8a', 
        seaFoam:'#a2d5c6',
        violet:'#5c3c92',
    },
    },
  },
  plugins: [require("daisyui")],
}

