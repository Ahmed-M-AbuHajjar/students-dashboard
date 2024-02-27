import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

// Mock dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

// Mock ThemeProvider to provide the theme
jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'),
  ThemeProvider: jest.fn(({ children }) => children),
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset mock state for each test
    jest.clearAllMocks();
  });

  test('renders Navbar correctly', () => {
    // Mock useSelector to return necessary state
    useSelector.mockReturnValueOnce(true); // loggedIn
    useSelector.mockReturnValueOnce(false); // isMobile

    // Mock theme object
    const theme = {
      breakpoints: {
        down: jest.fn().mockReturnValue('md'),
      },
    };

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Provider>
    );


  });

});
