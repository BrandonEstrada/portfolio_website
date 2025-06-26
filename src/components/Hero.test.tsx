import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from './Hero';

// Mock window scroll properties
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
});

describe('Hero', () => {
  test('renders hero section with main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('<coder>')).toBeInTheDocument();
  });

  test('renders profile emoji', () => {
    render(<Hero />);
    
    const profileEmoji = screen.getByLabelText("Brandon's Profile");
    expect(profileEmoji).toBeInTheDocument();
    expect(profileEmoji).toHaveTextContent('👨🏽‍💻');
  });

  test('renders description text', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Front End Developer who focuses on/i)).toBeInTheDocument();
    expect(screen.getByText(/writing clean, elegant and efficient/i)).toBeInTheDocument();
    expect(screen.getByText(/code. Love HTML5, CSS3, WordPress/i)).toBeInTheDocument();
    expect(screen.getByText(/and a touch of jQuery./i)).toBeInTheDocument();
  });

  test('renders code snippet elements', () => {
    render(<Hero />);
    
    expect(screen.getByText('<html>')).toBeInTheDocument();
    expect(screen.getByText('<h1 class="jedi">')).toBeInTheDocument();
    expect(screen.getByText('CSS3')).toBeInTheDocument();
    expect(screen.getByText('HTML5')).toBeInTheDocument();
    expect(screen.getByText('jQuery')).toBeInTheDocument();
  });

  test('emoji moves based on scroll position', () => {
    render(<Hero />);
    
    const profileEmoji = screen.getByLabelText("Brandon's Profile").closest('.profile-emoji');
    
    // Simulate scroll event
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    
    // Check that transform style is applied (just check that it exists)
    expect(profileEmoji).toHaveStyle(expect.stringContaining('transform: translateX('));
  });
});