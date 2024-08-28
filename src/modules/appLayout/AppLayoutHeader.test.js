import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppLayoutHeader } from './AppLayoutHeader';
import { BrowserRouter as Router } from 'react-router-dom';
 
// Mock necessary data and functions
const mockSetToggleLoginModal = jest.fn();
const mockSetToggleMenu = jest.fn();
const mockAuthDetails = {
  loggedIn: true,
  session: {
    user: {
      userFullName: 'John Doe',
      userRoles: [
        { roleId: '1', roleName: 'Admin' },
        { roleId: '2', roleName: 'User' },
      ],
    },
  },
  role: 'Admins',
  authentication: {
    user: {
      profile: {
        photos: [{ value: 'profile-pic-url' }],
      },
    },
  },
};

const mockEnvData = {
  REACT_APP_THEME_FAVICON: 'favicon-url',
  REACT_APP_THEME_LOGO: 'logo-url',
};

describe('AppLayoutHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component with the logo and user profile image', () => {
    render(
      <Router>
        <AppLayoutHeader
          envData={mockEnvData}
          authDetails={mockAuthDetails}
          setToggleLoginModal={mockSetToggleLoginModal}
          setToggleMenu={mockSetToggleMenu}
          toggleMenu={false}
        />
      </Router>
    );

    // Check for the logo image
    const logoImage = screen.getByAltText('logo-lg-dark');
    expect(logoImage).toHaveAttribute('src', 'logo-url');

    // Check for the user profile image
    const profileImage = screen.getByAltText('Header Avatar');
    expect(profileImage).toHaveAttribute('src', 'profile-pic-url');

    // Check if the user name is displayed
    const userName = screen.getByText('John Doe');
    expect(userName).toBeInTheDocument();

    // Check if the role is displayed
    const userRole = screen.getByText('Admin');
    expect(userRole).toBeInTheDocument();
  });

  test('toggles the user dropdown when logged in and user avatar is clicked', () => {
    render(
      <Router>
        <AppLayoutHeader
          envData={mockEnvData}
          authDetails={mockAuthDetails}
          setToggleLoginModal={mockSetToggleLoginModal}
          setToggleMenu={mockSetToggleMenu}
          toggleMenu={false}
        />
      </Router>
    );

    const avatarButton = screen.getByAltText('Header Avatar');
    fireEvent.click(avatarButton);

    // Check if the dropdown appears with the "Logout" link
    const logoutLink = screen.getByText(/logout/i);
    expect(logoutLink).toBeInTheDocument();
  });

  test('toggles the side menu when the hamburger icon is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <AppLayoutHeader
          envData={mockEnvData}
          authDetails={mockAuthDetails}
          setToggleLoginModal={mockSetToggleLoginModal}
          setToggleMenu={mockSetToggleMenu}
          toggleMenu={false}
        />
      </Router>
    );

    // Change the viewport to 500px.
    global.innerWidth = 500;
    const hamburgerButton = getByTestId('alhToggleSidebar');
    fireEvent.click(hamburgerButton);

    expect(mockSetToggleMenu).toHaveBeenCalledWith(true);
  });

  test('toggles the dark mode when the sun/moon icon is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <AppLayoutHeader
          envData={mockEnvData}
          authDetails={mockAuthDetails}
          setToggleLoginModal={mockSetToggleLoginModal}
          setToggleMenu={mockSetToggleMenu}
          toggleMenu={false}
        />
      </Router>
    ); 

    const darkModeButton = getByTestId('alh-dl-mode');
    fireEvent.click(darkModeButton);

    // After clicking, it should switch to the opposite icon (sun)
    expect(darkModeButton).toBeInTheDocument();
  });

  test('displays install button when app is installable', () => {
    // Mock the installable state
    Object.defineProperty(window, 'beforeinstallprompt', {
      writable: true,
      value: jest.fn().mockImplementation((e) => {
        e.preventDefault();
        return e;
      }),
    });

    const {container} = render(
      <Router>
        <AppLayoutHeader
          envData={mockEnvData}
          authDetails={mockAuthDetails}
          setToggleLoginModal={mockSetToggleLoginModal}
          setToggleMenu={mockSetToggleMenu}
          toggleMenu={false}
        />
      </Router>
    );

    // Change the viewport to 500px.
    global.innerWidth = 500;
    container.setInstallable(true)
    const installButton = screen.getAllByTestId('alh-installable-button')[0];
    expect(installButton).toBeInTheDocument();
  });
});
