import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#56A099',
      dark: '#3c625c',
      50: '#e3f1f0',
      100: '#baddda',
      200: '#8fc7c3',
      300: '#6ab1ab',
      400: '#56a099',
      500: '#4c8f87',
      600: '#46827a',
      700: '#41736b',
      800: '#3c625c',
      900: '#2f4741',
      A100: '#cbe6d6',
      A200: '#abd6bd',
      A400: '#74bb91',
      A700: '#4e8e67',
    },
    secondary: {
      main: '#a0565d',
      dark: '#d9808d',
      A100: '#c2dced',
      A200: '#a5c2d8',
      A400: '#6e95b1',
      A700: '#3a5f77',
      50: '#f7e7ea',
      100: '#efc4cc',
      200: '#e4a0ac',
      300: '#d9808d',
      400: '#cf6e78',
      500: '#c76367',
      600: '#b65d63',
      700: '#a0565d',
      800: '##8a5058',
      900: '#60464c',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    body1: {
      fontSize: '1.2rem',
      color: '#3c625c',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#064b40',
      contrastText: '#e3f1f0',
    },
    secondary: {
      main: '#900002',
      contrastText: '#e3f1e9',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
  },
});

export { theme, darkTheme };
