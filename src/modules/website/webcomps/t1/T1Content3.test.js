// T1Content3.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Content3 } from './T1Content3'; // Adjust the import path based on your project structure

describe('T1Content3 component', () => {
  const mockPageData = {
    content: {
      content: {
        header1: 'Why Choose Us?',
        text1: 'We offer the best services in the industry.',
        header2: 'Our Benefits',
        text2: 'We provide excellent customer support and premium features.',
        image: 'https://example.com/image.jpg',
      },
    },
  };

  it('renders the headers and texts correctly', () => {
    render(<T1Content3 pageData={mockPageData} />);

    const header1Element = screen.getByText('Why Choose Us?');
    const text1Element = screen.getByText('We offer the best services in the industry.');
    const header2Element = screen.getByText('Our Benefits');
    const text2Element = screen.getByText('We provide excellent customer support and premium features.');

    expect(header1Element).toBeInTheDocument();
    expect(text1Element).toBeInTheDocument();
    expect(header2Element).toBeInTheDocument();
    expect(text2Element).toBeInTheDocument();
  });

  it('renders the background image correctly', () => {
    render(<T1Content3 pageData={mockPageData} />);

    const backgroundImageElement = screen.getByTestId('backgroundImage');
    
    expect(backgroundImageElement).toHaveStyle(`background-image: url(${mockPageData.content.content.image})`);
  });
});
