// T1Hero.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Hero } from './T1Hero'; // Adjust the import path based on your project structure
import { BrowserRouter } from 'react-router-dom';

describe('T1Hero component', () => {
  const mockPageData = {
    content: {
      content: {
        bgImage: 'https://example.com/image.jpg',
        header: 'Welcome to <strong>Our Site</strong>',
        text: 'This is a description text for the hero section.',
        isButton: true,
        buttonLink: '/get-started',
        buttonName: 'Get Started',
      },
    },
  };

  it('renders the background image correctly', () => {
    render(
      <BrowserRouter>
        <T1Hero pageData={mockPageData} />
      </BrowserRouter>
    );

    const heroElement = screen.getByRole('heading', { level: 1 }).closest('.t1-single-slider');
    expect(heroElement).toHaveStyle(`background-image: url(${mockPageData.content.content.bgImage})`);
  });

  it('renders the header correctly with HTML parsing', () => {
    render(
      <BrowserRouter>
        <T1Hero pageData={mockPageData} />
      </BrowserRouter>
    );

    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toHaveTextContent('Welcome to Our Site');
    expect(headerElement.querySelector('strong')).toBeInTheDocument();
  });

  it('renders the text content correctly', () => {
    render(
      <BrowserRouter>
        <T1Hero pageData={mockPageData} />
      </BrowserRouter>
    );

    const textElement = screen.getByText('This is a description text for the hero section.');
    expect(textElement).toBeInTheDocument();
  });

  it('renders the button correctly when isButton is true', () => {
    render(
      <BrowserRouter>
        <T1Hero pageData={mockPageData} />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('link', { name: /get started/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', mockPageData.content.content.buttonLink);
  });

  it('does not render the button when isButton is false', () => {
    const mockPageDataNoButton = {
      ...mockPageData,
      content: {
        content: {
          ...mockPageData.content.content,
          isButton: false,
        },
      },
    };

    render(
      <BrowserRouter>
        <T1Hero pageData={mockPageDataNoButton} />
      </BrowserRouter>
    );

    const buttonElement = screen.queryByRole('link', { name: /get started/i });
    expect(buttonElement).not.toBeInTheDocument();
  });
});
