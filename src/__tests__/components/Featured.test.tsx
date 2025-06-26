import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Featured from '../../components/Featured';

// Mock window.open
Object.defineProperty(window, 'open', {
  value: jest.fn(),
  writable: true,
});

describe('Featured', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders featured section with main heading', () => {
    render(<Featured />);
    
    expect(screen.getByText('Featured Work')).toBeInTheDocument();
    expect(screen.getByText('Highlighting my best and most impactful projects')).toBeInTheDocument();
  });

  test('renders featured projects', () => {
    render(<Featured />);
    
    expect(screen.getByText('CMS system')).toBeInTheDocument();
  });

  test('renders project descriptions', () => {
    render(<Featured />);
    
    expect(screen.getByText(/CMS for a medical company/i)).toBeInTheDocument();
  });

  test('renders technology stacks', () => {
    render(<Featured />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MySQL')).toBeInTheDocument();
  });


});