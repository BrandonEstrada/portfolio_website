import React from 'react';
import { render, screen } from '@testing-library/react';
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
  });

  test('renders footer with copyright information', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Brandon Estrada. All rights reserved.`)).toBeInTheDocument();
  });

  test('renders view counter', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Global views:|Loading views.../)).toBeInTheDocument();
    expect(screen.getByText('👁️')).toBeInTheDocument();
  });

  test('renders footer links', () => {
    render(<Footer />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brandonestrada');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/brandonestrada');
  });

  test('fetches global view count from API', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ value: 1234 }),
    } as Response);
    
    render(<Footer />);
    
    expect(mockFetch).toHaveBeenCalledWith('https://api.countapi.xyz/hit/brandonestrada.com/visits');
  });

  test('falls back to localStorage when API fails', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockRejectedValueOnce(new Error('API Error'));
    localStorageMock.getItem.mockReturnValue('5');
    
    render(<Footer />);
    
    await new Promise(resolve => setTimeout(resolve, 0)); // Wait for async
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('portfolioViewCount');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('portfolioViewCount', '6');
  });

  test('displays formatted global view count', async () => {
    const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
    mockFetch.mockResolvedValueOnce({
      json: async () => ({ value: 1234 }),
    } as Response);
    
    render(<Footer />);
    
    await new Promise(resolve => setTimeout(resolve, 0)); // Wait for async
    
    expect(screen.getByText(/Global views: 1,234/)).toBeInTheDocument();
  });
});