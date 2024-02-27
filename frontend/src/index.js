import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './i18n'; 
import { I18nextProvider } from 'react-i18next'; 
import i18n from './i18n'; 
// Create a MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#a8a8a8', 
    },
    background: {
      dark: '#00000', 
      white:'#ffffff'
    },
    text: {
      dark: '#00000', 
      white: '#ffffff',
    },
  },
});


// Render the root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
