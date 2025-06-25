import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Featured from './Featured';

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
    
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Creative Portfolio')).toBeInTheDocument();
  });

  test('renders project descriptions', () => {
    render(<Featured />);
    
    expect(screen.getByText(/A full-featured e-commerce platform/i)).toBeInTheDocument();
    expect(screen.getByText(/A collaborative task management application/i)).toBeInTheDocument();
    expect(screen.getByText(/A beautiful weather dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/A modern, responsive portfolio website/i)).toBeInTheDocument();
  });

  test('renders technology stacks', () => {
    render(<Featured />);
    
    expect(screen.getAllByText('React')).toHaveLength(4);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('Chart.js')).toBeInTheDocument();
  });

  test('renders achievements section', () => {
    render(<Featured />);
    
    expect(screen.getByText('Recognition & Achievements')).toBeInTheDocument();
    expect(screen.getByText('Best Frontend Project')).toBeInTheDocument();
    expect(screen.getByText('Open Source Contributor')).toBeInTheDocument();
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
  });

  test('demo buttons open external links', () => {
    render(<Featured />);
    
    const demoButtons = screen.getAllByText('Live Demo');
    fireEvent.click(demoButtons[0]);
    
    expect(window.open).toHaveBeenCalledWith('https://example.com', '_blank');
  });

  test('code buttons open GitHub links', () => {
    render(<Featured />);
    
    const codeButtons = screen.getAllByText('View Code');
    fireEvent.click(codeButtons[0]);
    
    expect(window.open).toHaveBeenCalledWith('https://github.com/brandonestrada', '_blank');
  });
});