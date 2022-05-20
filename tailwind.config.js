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
      '2xl': '1900',
    }, 
     container:{
      center: true,
    },
    extend: {
      colors:{
        darkLogo: '#1C56A8',
        lightLogo: '#46B39D'
      }

    },
  },
  plugins: [],
}
