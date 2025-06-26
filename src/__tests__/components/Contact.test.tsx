import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../../components/Contact';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  send: jest.fn(),
}));

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact section with main heading', () => {
    render(<Contact />);
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText("Let's discuss your next project or just say hello")).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('brandoniestrada@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Dallas, TX')).toBeInTheDocument();
    expect(screen.getAllByText('Email')).toHaveLength(2); // One in contact info, one in form
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  test('renders contact form with all fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<Contact />);
    
    const githubLink = screen.getByText('GitHub').closest('a');
    const linkedinLink = screen.getByText('LinkedIn').closest('a');
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/brandonestrada');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/brandonestrada');
  });

  test('updates form fields when user types', () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const subjectInput = screen.getByLabelText('Subject') as HTMLInputElement;
    const messageInput = screen.getByLabelText('Message') as HTMLTextAreaElement;
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(subjectInput.value).toBe('Test Subject');
    expect(messageInput.value).toBe('Test message');
  });

  test('form submission shows loading state', async () => {
    const emailjs = require('@emailjs/browser');
    emailjs.send.mockResolvedValue({});
    
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test message' } });
    
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Send Message')).toBeInTheDocument();
    });
  });
});