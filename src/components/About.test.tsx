import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  test('renders about section with main heading', () => {
    render(<About />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Get to know who I am and what drives my passion for development')).toBeInTheDocument();
  });

  test('renders my story section', () => {
    render(<About />);
    
    expect(screen.getByText('My Story')).toBeInTheDocument();
    expect(screen.getByText(/I'm a passionate front-end developer/i)).toBeInTheDocument();
  });

  test('renders technical skills section', () => {
    render(<About />);
    
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
  });

  test('renders frontend skills', () => {
    render(<About />);
    
    expect(screen.getByText('React & TypeScript')).toBeInTheDocument();
    expect(screen.getByText('HTML5 & CSS3')).toBeInTheDocument();
    expect(screen.getByText('JavaScript (ES6+)')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
  });

  test('renders experience section', () => {
    render(<About />);
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Web Developer')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer')).toBeInTheDocument();
  });

  test('renders experience details', () => {
    render(<About />);
    
    expect(screen.getByText('Tech Company • 2022 - Present')).toBeInTheDocument();
    expect(screen.getByText('Digital Agency • 2021 - 2022')).toBeInTheDocument();
    expect(screen.getByText('Startup • 2020 - 2021')).toBeInTheDocument();
  });
});