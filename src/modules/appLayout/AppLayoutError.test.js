import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { AppLayoutError } from './AppLayoutError';

describe('AppLayoutError Component', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <AppLayoutError />
      </BrowserRouter>
    );

  test('renders the error message and icon', () => {
    renderComponent();

    // Check if the error title is rendered
    expect(screen.getByText('An Error Occured!')).toBeInTheDocument();

    // Check if the error description is rendered
    expect(screen.getByText('Something went wrong and an error occured!')).toBeInTheDocument();

  });

  test('renders the Home and My Profile buttons with correct links', () => {
    renderComponent();

    // Check if the Home button is rendered with correct text and link
    const homeButton = screen.getByRole('link', { name: /home/i });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveAttribute('href', '/');

    // Check if the My Profile button is rendered with correct text and link
    const profileButton = screen.getByRole('link', { name: /my profile/i });
    expect(profileButton).toBeInTheDocument();
    expect(profileButton).toHaveAttribute('href', '/console/my-profile');
  });
});
