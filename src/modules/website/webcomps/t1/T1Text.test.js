import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import { T1Text } from './T1Text';

// Mock page data for testing
const pageData = {
  content: {
    content: {
      header: 'Welcome to Our Website!',
      text: '<p>This is a sample text for our website. <strong>Enjoy your stay!</strong></p>',
    },
  },
};

describe('T1Text Component', () => {
  it('renders the header correctly', () => {
    const { getByText } = render(<T1Text pageData={pageData} />);
    expect(getByText('Welcome to Our Website!')).toBeInTheDocument();
  });

  it('renders the parsed HTML content correctly', () => {
    const { getByText } = render(<T1Text pageData={pageData} />);
    expect(getByText('This is a sample text for our website.')).toBeInTheDocument();
    expect(getByText('Enjoy your stay!')).toBeInTheDocument();
  });
});
