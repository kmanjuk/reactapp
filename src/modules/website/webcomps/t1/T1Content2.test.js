// T1Content2.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { T1Content2 } from './T1Content2'; // Adjust the import path based on your project structure

describe('T1Content2 component', () => {
  const mockPageDataWithButton = {
    content: {
      content: {
        header: 'Join Us Now!',
        text: 'Become a member and enjoy exclusive benefits.',
        isButton: true,
        buttonLink: '/signup',
        buttonName: 'Sign Up',
      },
    },
  };

  const mockPageDataWithoutButton = {
    content: {
      content: {
        header: 'Learn More About Us',
        text: 'Discover our services and offers.',
        isButton: false,
      },
    },
  };

  it('renders the header and text correctly', () => {
    render(
      <MemoryRouter>
        <T1Content2 pageData={mockPageDataWithButton} />
      </MemoryRouter>
    );

    const headerElement = screen.getByText('Join Us Now!');
    const textElement = screen.getByText('Become a member and enjoy exclusive benefits.');

    expect(headerElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('renders the button when isButton is true', () => {
    render(
      <MemoryRouter>
        <T1Content2 pageData={mockPageDataWithButton} />
      </MemoryRouter>
    );

    const buttonElement = screen.getByText('Sign Up');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.closest('a')).toHaveAttribute('href', '/signup');
  });

  it('does not render the button when isButton is false', () => {
    render(
      <MemoryRouter>
        <T1Content2 pageData={mockPageDataWithoutButton} />
      </MemoryRouter>
    );

    const buttonElement = screen.queryByText('Sign Up');

    expect(buttonElement).not.toBeInTheDocument();
  });
});
