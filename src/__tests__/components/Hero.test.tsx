import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../../components/Hero';

// Mock window scroll properties
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
});

describe('Hero', () => {
  test('renders hero section with main title', () => {
    render(<Hero />);
    
    expect(screen.getByText('Brandon Estrada')).toBeInTheDocument();
  });

  test('renders profile image with alt text', () => {
    render(<Hero />);
    
    const profileImage = screen.getByAltText('Brandon Estrada - Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/profile.jpg');
  });

  test('renders description text', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Software Engineer dedicated to/i)).toBeInTheDocument();
    expect(screen.getByText(/learning new technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/and improving every day/i)).toBeInTheDocument();
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