import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import { useDispatch } from 'react-redux';
import store from '../../redux/store';

// Mock the react-redux useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Dashboard Component', () => {
  beforeEach(() => {
    // Mock the useDispatch hook to return a mock dispatch function
    useDispatch.mockReturnValue(jest.fn());
  });

  test('renders the Dispatch Function', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    expect(useDispatch).toHaveBeenCalledWith();
  });

});
