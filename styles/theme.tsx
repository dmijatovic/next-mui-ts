import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3A75C4',
    },
    secondary: {
      main: '#f4a261',
    },
    error: {
      main: '#e63946',
    },
    warning:{
      main:"#e76f51"
    },
    info:{
      main:"#e9c46a"
    },
    success:{
      main:"#83c5be"
    },
    background: {
      default: '#fff',
    },
  },
  typography:{
    //default html font size when 100%
    htmlFontSize:16,
    //body font size to 1rem
    fontSize:16,
    h1:{
      fontSize:"3.5rem",
      lineHeight: "2"
      // padding:"1rem 0rem"
    },
    h2:{
      fontSize:"3rem",
      lineHeight: "1.75"
    },
    h3:{
      fontSize:"2.5rem",
      lineHeight: "1.75"
    },
    h4:{
      fontSize:"2rem",
      lineHeight: "1.75"
    },
    h5:{
      fontSize:"1.5rem",
      lineHeight: "1.75"
    },
    h6:{
      lineHeight: "1.75"
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '100%',
          '@media (max-width:480px)': {
            fontSize: '60%',
          },
          '@media (min-width:481px)': {
            fontSize: '65%',
          },
          '@media (min-width:800px)': {
            fontSize: '70%',
          },
          '@media (min-width:1200px)': {
            fontSize: '80%',
          },
          '@media (min-width:1600px)': {
            fontSize: '90%',
          },
        },
      },
    },
  },
});

export default theme;