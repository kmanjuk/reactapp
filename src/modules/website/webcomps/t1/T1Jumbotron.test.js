// T1Jumbotron.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Jumbotron } from './T1Jumbotron'; // Adjust the import path based on your project structure
import { BrowserRouter } from 'react-router-dom';

describe('T1Jumbotron component', () => {
  const mockPageData = {
    content: {
      content: {
        header: 'Stay Updated',
        text: 'Subscribe to our newsletter for the latest updates.',
        buttonLink: '/subscribe',
        buttonName: 'Subscribe Now',
      },
    },
  };

  it('renders the header correctly', () => {
    render(
      <BrowserRouter>
        <T1Jumbotron pageData={mockPageData} />
      </BrowserRouter>
    );

    const headerElement = screen.getByText('Stay Updated');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the text content correctly', () => {
    render(
      <BrowserRouter>
        <T1Jumbotron pageData={mockPageData} />
      </BrowserRouter>
    );

    const textElement = screen.getByText('Subscribe to our newsletter for the latest updates.');
    expect(textElement).toBeInTheDocument();
  });

  it('renders the button correctly with the correct link and name', () => {
    render(
      <BrowserRouter>
        <T1Jumbotron pageData={mockPageData} />
      </BrowserRouter>
    );

    const buttonElement = screen.getByRole('link', { name: /subscribe now/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', mockPageData.content.content.buttonLink);
  });
});
