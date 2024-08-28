// T1Footer1.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Footer1 } from './T1Footer1'; // Adjust the import path based on your project structure
import { BrowserRouter } from 'react-router-dom';

describe('T1Footer1 component', () => {
  const mockPageData = {
    content: {
      content: {
        header: 'Footer Header',
        text: 'Footer text content goes here.',
        social: [
          { icon: 'facebook', link: 'https://facebook.com' },
          { icon: 'twitter', link: 'https://twitter.com' },
        ],
        links: [
          {
            title: 'Quick Links',
            size: 'col-lg-3 col-md-6 col-12',
            childLinks: [
              { name: 'Home', link: '/' },
              { name: 'About Us', link: '/about' },
            ],
          },
          {
            title: 'More Links',
            size: 'col-lg-3 col-md-6 col-12',
            childLinks: [
              { name: 'Services', link: '/services' },
              { name: 'Contact', link: '/contact' },
            ],
          },
        ],
        copyrightPref: 'All Rights Reserved',
        copyright: '2024 Thulisha Reddy Technologies',
      },
    },
  };

  it('renders the footer header and text', () => {
    render(
      <BrowserRouter>
        <T1Footer1 pageData={mockPageData} />
      </BrowserRouter>
    );

    expect(screen.getByText('Footer Header')).toBeInTheDocument();
    expect(screen.getByText('Footer text content goes here.')).toBeInTheDocument();
  });

  it('renders the social links correctly', () => {
    render(
      <BrowserRouter>
        <T1Footer1 pageData={mockPageData} />
      </BrowserRouter>
    );

    // const facebookLink = screen.getByText('https://facebook.com');
    // const twitterLink = screen.getByText('https://twitter.com');

    // expect(facebookLink).toBeInTheDocument();
    // expect(twitterLink).toBeInTheDocument();
    expect(screen.getAllByRole('link',{class:'fa fa-facebook'})[0]).toHaveAttribute('href', 'https://facebook.com')
    expect(screen.getAllByRole('link',{class:'fa fa-twitter'})[1]).toHaveAttribute('href', 'https://twitter.com')
  });

  it('renders the footer links correctly', () => {
    render(
      <BrowserRouter>
        <T1Footer1 pageData={mockPageData} />
      </BrowserRouter>
    );

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();

    expect(screen.getByText('More Links')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the copyright information correctly', () => {
    render(
      <BrowserRouter>
        <T1Footer1 pageData={mockPageData} />
      </BrowserRouter>
    );

    expect(screen.getByText('© All Rights Reserved 2024 Thulisha Reddy Technologies')).toBeInTheDocument();
  });
});
