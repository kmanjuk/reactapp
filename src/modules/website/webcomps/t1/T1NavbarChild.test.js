import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { T1NavbarChild } from './T1NavbarChild'; // Adjust the import path based on your project structure

describe('T1NavbarChild', () => {
  const mockNav = {
    name: 'Parent Nav',
    childItems: [
      { link: '/child1', name: 'Child 1' },
      { link: '/child2', name: 'Child 2' },
    ],
  };

  test('renders parent nav name', () => {
    const { getByText } = render(<T1NavbarChild nav={mockNav} navIndex={0} />);
    const parentLink = getByText(mockNav.name);
    expect(parentLink).toBeInTheDocument();
  });

  test('initially hides child items', () => {
    const { queryByText } = render(<T1NavbarChild nav={mockNav} navIndex={0} />);
    const child1 = queryByText('Child 1');
    const child2 = queryByText('Child 2');
    expect(child1).not.toBeInTheDocument();
    expect(child2).not.toBeInTheDocument();
  });

  test('expands child items on parent link click', () => {
    const { getByText, queryByText } = render(<T1NavbarChild nav={mockNav} navIndex={0} />);
    const parentLink = getByText(mockNav.name);
    fireEvent.click(parentLink);

    const child1 = queryByText('Child 1');
    const child2 = queryByText('Child 2');
    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });

  test('collapses child items on parent link click again', () => {
    const { getByText, queryByText } = render(<T1NavbarChild nav={mockNav} navIndex={0} />);
    const parentLink = getByText(mockNav.name);

    // First click to expand
    fireEvent.click(parentLink);

    // Second click to collapse
    fireEvent.click(parentLink);

    const child1 = queryByText('Child 1');
    const child2 = queryByText('Child 2');
    expect(child1).not.toBeInTheDocument();
    expect(child2).not.toBeInTheDocument();
  });
});
