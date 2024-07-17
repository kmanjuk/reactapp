// T1Documents.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Documents } from './T1Documents'; // Adjust the import path based on your project structure
import { BrowserRouter } from 'react-router-dom';

describe('T1Documents component', () => {
  const mockPageData = {
    content: {
      content: {
        documents: [
          {
            name: 'Category 1',
            files: [
              { name: 'Document 1-1', link: '/path/to/document1-1.pdf' },
              { name: 'Document 1-2', link: '/path/to/document1-2.pdf' },
            ],
          },
          {
            name: 'Category 2',
            files: [
              { name: 'Document 2-1', link: '/path/to/document2-1.pdf' },
              { name: 'Document 2-2', link: '/path/to/document2-2.pdf' },
            ],
          },
        ],
      },
    },
  };

  it('renders the document categories correctly', () => {
    render(
      <BrowserRouter>
        <T1Documents pageData={mockPageData} />
      </BrowserRouter>
    );

    const category1 = screen.getByText('Category 1');
    const category2 = screen.getByText('Category 2');

    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
  });

  it('renders the documents of the first category by default', () => {
    render(
      <BrowserRouter>
        <T1Documents pageData={mockPageData} />
      </BrowserRouter>
    );

    const document1_1 = screen.getByText('Document 1-1');
    const document1_2 = screen.getByText('Document 1-2');

    expect(document1_1).toBeInTheDocument();
    expect(document1_2).toBeInTheDocument();
  });

  it('renders the documents of the selected category', () => {
    render(
      <BrowserRouter>
        <T1Documents pageData={mockPageData} />
      </BrowserRouter>
    );

    const category2 = screen.getByText('Category 2');
    fireEvent.click(category2);

    const document2_1 = screen.getByText('Document 2-1');
    const document2_2 = screen.getByText('Document 2-2');

    expect(document2_1).toBeInTheDocument();
    expect(document2_2).toBeInTheDocument();
  });

  it('renders the download links correctly', () => {
    render(
      <BrowserRouter>
        <T1Documents pageData={mockPageData} />
      </BrowserRouter>
    );

    const document1_1Link = screen.getByText('Document 1-1').closest('a');
    const document1_2Link = screen.getByText('Document 1-2').closest('a');

    expect(document1_1Link).toHaveAttribute('href', '/path/to/document1-1.pdf');
    expect(document1_2Link).toHaveAttribute('href', '/path/to/document1-2.pdf');
    expect(document1_1Link).toHaveAttribute('download');
    expect(document1_2Link).toHaveAttribute('download');
  });
});
