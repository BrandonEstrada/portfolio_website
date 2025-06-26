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
    
    expect(screen.getByText(/Page views:/)).toBeInTheDocument();
    expect(screen.getByText('👁️')).toBeInTheDocument();
  });

  test('renders footer links', () => {
    render(<Footer />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brandonestrada');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/brandonestrada');
  });

  test('increments view count on component mount', () => {
    localStorageMock.getItem.mockReturnValue('5');
    
    render(<Footer />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('portfolioViewCount');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('portfolioViewCount', '6');
  });

  test('initializes view count when localStorage is empty', () => {
    localStorageMock.getItem.mockReturnValue(null);
    
    render(<Footer />);
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('portfolioViewCount', '1');
  });

  test('displays formatted view count', () => {
    localStorageMock.getItem.mockReturnValue('1234');
    
    render(<Footer />);
    
    expect(screen.getByText(/Page views: 1,235/)).toBeInTheDocument();
  });
});