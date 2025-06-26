import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

// Mock fetch for CountAPI
global.fetch = jest.fn();

describe('Footer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset localStorage mock to return null by default
    localStorageMock.getItem.mockReturnValue(null);
    // Reset fetch mock
    (global.fetch as jest.MockedFunction<typeof fetch>).mockClear();
  });

  test('renders footer with copyright information', () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: 100 }),
    } as Response);
    
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Brandon Estrada. All rights reserved.`)).toBeInTheDocument();
  });

  test('renders view counter', () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: 100 }),
    } as Response);
    
    render(<Footer />);
    
    expect(screen.getByText(/Global views:|Loading views.../)).toBeInTheDocument();
    expect(screen.getByText('👁️')).toBeInTheDocument();
  });

  test('renders footer links', () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: 100 }),
    } as Response);
    
    render(<Footer />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brandonestrada');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/brandonestrada');
  });

  test('fetches global view count from API', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: 1234 }),
    } as Response);
    
    render(<Footer />);
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://api.countapi.xyz/hit/brandonestrada.com/visits');
    });
  });

  test('renders with default loading state', () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockImplementation(() => new Promise(() => {})); // Never resolves
    
    render(<Footer />);
    
    // Just verify the component renders with loading text or basic state
    expect(screen.getByText(/Loading views\.\.\.|Global views:/)).toBeInTheDocument();
  });
});