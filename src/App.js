import React from 'react';
import Main from './views/Main';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//https://material-ui.com/customization/color/#color-tool
//https://material.io/resources/color/

//TODO: Put theme in its own module
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#1b5e20',
      dark: '#1b1b1b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffca28',
      dark: '#ba000d',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: [
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
    ].join(',')
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  );
}

export default App;