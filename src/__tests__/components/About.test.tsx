import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../../components/About';

describe('About', () => {
  test('renders about section with main heading', () => {
    render(<About />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Get to know who I am and what drives my passion for development')).toBeInTheDocument();
  });

  test('renders my story section', () => {
    render(<About />);
    
    expect(screen.getByText('My Story')).toBeInTheDocument();
    expect(screen.getByText(/I'm a passionate full-stack developer/i)).toBeInTheDocument();
  });

  test('renders technical skills section', () => {
    render(<About />);
    
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument();
  });

  test('renders frontend skills', () => {
    render(<About />);
    
    expect(screen.getByText('React & TypeScript')).toBeInTheDocument();
    expect(screen.getByText('HTML5 & CSS3')).toBeInTheDocument();
    expect(screen.getByText('JavaScript (ES6+)')).toBeInTheDocument();
  });

  test('renders experience section', () => {
    render(<About />);
    
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Frontend developer - intern')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  test('renders experience details', () => {
    render(<About />);
    
    expect(screen.getByText('Hilton • 2024 - Present')).toBeInTheDocument();
    expect(screen.getByText('Hilton • 2022 - 2024')).toBeInTheDocument();
    expect(screen.getByText('Kudo Care Medical• 2021 - 2023')).toBeInTheDocument();
  });
});