import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home start button', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /let's start/i })).toBeInTheDocument();
});
