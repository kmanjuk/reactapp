// T1Team.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Team } from './T1Team'; // Adjust the import path based on your project structure

describe('T1Team component', () => {
  const mockPageData = {
    content: {
      content: {
        header: 'Our Team',
        text: 'Meet our dedicated team members.',
        team: [
          { name: 'Alice Johnson', designation: 'CEO', image: '/images/alice.jpg', size: 'col-lg-4 col-md-6 col-12' },
          { name: 'Bob Smith', designation: 'CTO', image: '/images/bob.jpg', size: 'col-lg-4 col-md-6 col-12' },
          { name: 'Charlie Brown', designation: 'CFO', image: '/images/charlie.jpg', size: 'col-lg-4 col-md-6 col-12' },
        ],
      },
    },
  };

  it('renders the section header and text correctly', () => {
    render(<T1Team pageData={mockPageData} />);
    
    const header = screen.getByText('Our Team');
    const text = screen.getByText('Meet our dedicated team members.');
    
    expect(header).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('renders the correct number of team members', () => {
    render(<T1Team pageData={mockPageData} />);
    
    const teamMembers = screen.getAllByRole('img');
    
    expect(teamMembers).toHaveLength(3);
  });

  it('renders the team member details correctly', () => {
    render(<T1Team pageData={mockPageData} />);
    
    const alice = screen.getAllByAltText('')[0];
    const bob = screen.getAllByAltText('')[1];
    const charlie = screen.getAllByAltText('')[2];
    
    expect(alice).toHaveAttribute('src', '/images/alice.jpg');
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('CEO')).toBeInTheDocument();
    
    expect(bob).toHaveAttribute('src', '/images/bob.jpg');
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('CTO')).toBeInTheDocument();
    
    expect(charlie).toHaveAttribute('src', '/images/charlie.jpg');
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    expect(screen.getByText('CFO')).toBeInTheDocument();
  });
});
