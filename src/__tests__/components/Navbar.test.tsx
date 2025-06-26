import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    });
  });

  test('renders navbar with logo and navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('</>')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /featured/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<Navbar />);
    
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  test('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navbar />);
    
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    expect(navLinks).not.toHaveClass('mobile-open');
    
    fireEvent.click(mobileToggle!);
    
    expect(navLinks).toHaveClass('mobile-open');
  });

  test('navigation links have correct href attributes', () => {
    render(<Navbar />);
    
    const githubLink = screen.getByLabelText('GitHub');
    const linkedinLink = screen.getByLabelText('LinkedIn');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brandonestrada');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/brandonestrada');
  });
});