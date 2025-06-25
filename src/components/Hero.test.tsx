import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  test('renders hero section with main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('<coder>')).toBeInTheDocument();
  });

  test('renders profile image with alt text', () => {
    render(<Hero />);
    
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('placeholder'));
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
});