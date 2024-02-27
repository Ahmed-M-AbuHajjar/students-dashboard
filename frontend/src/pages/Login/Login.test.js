import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Importing necessary functions
import { useDispatch } from 'react-redux';
import Login from './Login';
import { logIn } from '../../redux/store/authActions';

// Mock useDispatch from react-redux
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Login Component', () => {

  test('dispatches logIn action when login button is clicked', () => {
    // Mock the useDispatch hook to return a mock dispatch function
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Render the Login component
    render(<Login />);

    // Click the login button
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    // Check if useDispatch was called with the logIn action
    expect(mockDispatch).toHaveBeenCalledWith(logIn());
  });
});
