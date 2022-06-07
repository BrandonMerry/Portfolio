module.exports = {
  content: [
    './layouts/index.html'
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }, 
     container:{
      center: true,
    },
    extend: {
      colors:{
        BtnBlue: '#2663bf',
        photoGray: '#f1f5f9',
        footGray: '#E2E8F0'
      }

    },
  },
  plugins: [],
}
