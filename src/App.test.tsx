import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock localStorage for Footer component
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

// Mock fetch for global counter
global.fetch = jest.fn();

test('renders portfolio app', () => {
  render(<App />);
  const heroElement = screen.getByText(/coder/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders footer with view counter', () => {
  render(<App />);
  expect(screen.getByText(/Global views:|Loading views.../)).toBeInTheDocument();
  const currentYear = new Date().getFullYear();
  expect(screen.getByText(`© ${currentYear} Brandon Estrada. All rights reserved.`)).toBeInTheDocument();
});
