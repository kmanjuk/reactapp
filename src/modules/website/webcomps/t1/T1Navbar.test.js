// T1Navbar.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Navbar } from './T1Navbar'; // Adjust the import path based on your project structure
import { BrowserRouter } from 'react-router-dom';

describe('T1Navbar component', () => {
  const mockPageData = {
    content: {
      content: {
        isTopBar: true,
        topBarLinks: [
          { name: 'Home', link: '/' },
          { name: 'About', link: '/about' },
        ],
        topBarPhone: '123-456-7890',
        topBarEmail: 'info@example.com',
        logo: '/logo.png',
        logoTitle: 'Logo',
        navLinks: [
          { name: 'Home', link: '/', childItems: [] },
          { name: 'Services', link: '/services', childItems: [{ name: 'Consulting', link: '/services/consulting' }] },
        ],
      },
    },
  };

  const mockUserLogout = jest.fn();
  const mockSetLoginModal = jest.fn();

  it('renders the top bar correctly', () => {
    render(
      <BrowserRouter>
        <T1Navbar
          authSession={null}
          setLoginModal={mockSetLoginModal}
          userLogout={mockUserLogout}
          pageData={mockPageData}
        />
      </BrowserRouter>
    );

    const topBarLinks = screen.getAllByRole('link');
    expect(topBarLinks).toHaveLength(2);
    expect(topBarLinks[0]).toHaveTextContent('Home');
    expect(topBarLinks[1]).toHaveTextContent('About');

    const topBarPhone = screen.getByText('123-456-7890');
    expect(topBarPhone).toBeInTheDocument();

    const topBarEmail = screen.getByRole('link', { name: /info@example.com/i });
    expect(topBarEmail).toBeInTheDocument();
  });

  it('renders the main navigation links correctly', () => {
    render(
      <BrowserRouter>
        <T1Navbar
          authSession={null}
          setLoginModal={mockSetLoginModal}
          userLogout={mockUserLogout}
          pageData={mockPageData}
        />
      </BrowserRouter>
    );

    const mainNavLinks = screen.getAllByRole('link');
    expect(mainNavLinks).toHaveLength(4); // Home, About (top bar), Home, Services

    const homeLink = screen.getAllByRole('link', { name: /home/i })[1];
    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
  });

  it('renders the user profile and logout links correctly when authenticated', () => {
    const mockAuthSession = { user: 'testUser' };

    render(
      <BrowserRouter>
        <T1Navbar
          authSession={mockAuthSession}
          setLoginModal={mockSetLoginModal}
          userLogout={mockUserLogout}
          pageData={mockPageData}
        />
      </BrowserRouter>
    );

    const profileLink = screen.getByRole('link', { title: /my profile/i });
    const logoutLink = screen.getByRole('link', { title: /logout/i });

    expect(profileLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();

    fireEvent.click(logoutLink);
    expect(mockUserLogout).toHaveBeenCalledTimes(1);
  });

  it('renders the login link correctly when not authenticated', () => {
    render(
      <BrowserRouter>
        <T1Navbar
          authSession={null}
          setLoginModal={mockSetLoginModal}
          userLogout={mockUserLogout}
          pageData={mockPageData}
        />
      </BrowserRouter>
    );

    const loginLink = screen.getByRole('link', { title: /login/i });
    expect(loginLink).toBeInTheDocument();

    fireEvent.click(loginLink);
    expect(mockSetLoginModal).toHaveBeenCalledWith(true);
  });
});
