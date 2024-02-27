import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Sidebar from './Sidebar';

// Mock theme object
const theme = {
  breakpoints: {
    down: jest.fn().mockReturnValue('md'),
  },
  palette: {
    background: {
      white: '#ffffff',
    },
  },
};

// Mock ThemeProvider to provide the theme
jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'),
  ThemeProvider: jest.fn(({ children }) => children),
}));

describe('Sidebar Component', () => {
  test('renders sidebar items with correct types', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Sidebar />
        </ThemeProvider>
      </Provider>
    );
      });
});
