// T1Content1.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Content1 } from './T1Content1'; // Adjust the import path based on your project structure

describe('T1Content1 component', () => {
  const mockPageData = {
    content: {
      content: {
        header: 'Why Choose Us?',
        text: 'We offer the best services in the industry.',
      },
    },
  };

  it('renders the header correctly', () => {
    render(<T1Content1 pageData={mockPageData} />);

    const headerElement = screen.getByText('Why Choose Us?');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the text correctly', () => {
    render(<T1Content1 pageData={mockPageData} />);

    const textElement = screen.getByText('We offer the best services in the industry.');
    expect(textElement).toBeInTheDocument();
  });
});
