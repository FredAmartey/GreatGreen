import { createTheme } from '@mui/material/styles';
export default createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #487e4c" // Color is primary.light
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8 // Everybutton should have this
        }
      }
    }
  },
  palette: {
    primary: {
      light: "#487e4c",
      dark: "#124116",
      main: "#1b5e20",
      contrastText: "#fffff"
    },
    secondary: {
      dark: "#567d2e",
      light: "#96c267",
      main: "#7cb342",
      contrastText: "#fffff"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: [
      "Montserrat",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','), // prefer montserrat
      allVariants: {
        color: "white" // Contrast color for the pallete
      },
  },
});
