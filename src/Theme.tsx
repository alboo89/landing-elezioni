import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#56A099',
    },
    secondary: {
      main: '#a0565d',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
  },
});

export default theme;
