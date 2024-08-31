/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        priamary:'#6b21a8',
        dark:'#3b0764',
        secodary:'#8b5cf6',
        hitam :'#020617',
      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

