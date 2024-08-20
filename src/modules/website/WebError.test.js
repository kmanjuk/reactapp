// WebError.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WebError } from './WebError';

describe('WebError Component', () => {
  test('renders without crashing', () => {
    render(<WebError />);
    const containerElement = screen.getByText(/Could not load element properly/i);
    expect(containerElement).toBeInTheDocument();
  });

  test('displays the correct error message', () => {
    render(<WebError />);
    const errorMessage = screen.getByText('Could not load element properly');
    expect(errorMessage).toBeInTheDocument();
  });

  test('has the correct container styling', () => {
    render(<WebError />);
    const containerElement = screen.getByText(/Could not load element properly/i).closest('div');
    expect(containerElement).toHaveStyle({
      height: '5rem',
      backgroundColor: '#d6cece',
    });
  });

  test('checks for the correct column and row layout', () => {
    render(<WebError />);
    const rowElement = screen.getByText(/Could not load element properly/i).closest('.row');
    expect(rowElement).toBeInTheDocument();

    const colElement = screen.getByText(/Could not load element properly/i).closest('.col-12');
    expect(colElement).toBeInTheDocument();
  });

  test('checks if the text is centered', () => {
    render(<WebError />);
    const colElement = screen.getByText(/Could not load element properly/i).closest('.col-12');
    expect(colElement).toHaveClass('text-center');
  });
});
