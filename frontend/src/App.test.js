import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.tsx';

test('renders Dashboard component when logged in', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  // Wait for Dashboard component to appear asynchronously
  await waitFor(() => {
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument(); // Ensure Dashboard component is rendered
  });
});

