import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const heroElement = screen.getByText(/coder/i);
  expect(heroElement).toBeInTheDocument();
});
