import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Landing } from './Landing';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the environment data and props
const mockEnvData = {
  REACT_APP_THEME_LOGO: 'logo-url',
};

const mockIsLocalEnvironment = 'local';

// Mock the LoginModal component
jest.mock('../../common/LoginModal', () => ({
  LoginModal: ({ setToggleLoginModal }) => (
    <div data-testid="login-modal">
      <button onClick={() => setToggleLoginModal(false)}>Close</button>
    </div>
  ),
}));

describe('Landing Component', () => {
  test('renders the Landing component with the correct elements', () => {
    render(
      <Router>
        <Landing
          envData={mockEnvData}
          isLocalEnvironment={mockIsLocalEnvironment}
          isLoggedIn={false}
        />
      </Router>
    );

    // Check for the logo images
    const logoImages = screen.getAllByAltText(/logo/i);
    expect(logoImages).toHaveLength(2); // Expecting two logos (dark and light)

    // Check for the "Login" button
    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();

    // Check for the "Contact Web Admin" link
    const contactLink = screen.getByText(/contact web admin/i);
    expect(contactLink).toBeInTheDocument();
  });

  test('renders the "Logout" button when user is logged in', () => {
    render(
      <Router>
        <Landing
          envData={mockEnvData}
          isLocalEnvironment={mockIsLocalEnvironment}
          isLoggedIn={true}
        />
      </Router>
    );

    // Check for the "Logout" button
    const logoutButton = screen.getByText(/logout/i);
    expect(logoutButton).toBeInTheDocument();

    // Check for the "My Profile" button
    const profileButton = screen.getByText(/my profile/i);
    expect(profileButton).toBeInTheDocument();
  });

  test('toggles the login modal when the "Login" button is clicked', () => {
    render(
      <Router>
        <Landing
          envData={mockEnvData}
          isLocalEnvironment={mockIsLocalEnvironment}
          isLoggedIn={false}
        />
      </Router>
    );

    // Open the login modal
    const loginButton = screen.getByText(/login/i);
    fireEvent.click(loginButton);

    // Check if the login modal is displayed
    const loginModal = screen.getByTestId('login-modal');
    expect(loginModal).toBeInTheDocument();

    // Close the login modal
    const closeButton = screen.getByText(/close/i);
    fireEvent.click(closeButton);

    // Check if the login modal is closed
    expect(loginModal).not.toBeInTheDocument();
  });

  test('does not display the "Login" button when user is logged in', () => {
    render(
      <Router>
        <Landing
          envData={mockEnvData}
          isLocalEnvironment={mockIsLocalEnvironment}
          isLoggedIn={true}
        />
      </Router>
    );

    // Check that the "Login" button is not present
    const loginButton = screen.queryByText(/login/i);
    expect(loginButton).not.toBeInTheDocument();
  });
});
