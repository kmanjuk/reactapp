import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Landing } from './Landing';

test('toggles login modal on login button click', () => {
  const { getByText, queryByText } = render(
    <Landing envData={{ REACT_APP_THEME_LOGO: 'logo.png' }} isLocalEnvironment="true" isLoggedIn={false} />
  );

  // Check that the login modal is not rendered initially
  expect(queryByText(/Login/i)).toBeInTheDocument();
  expect(queryByText(/Login to your account/i)).not.toBeInTheDocument();

  // Click on login button
  fireEvent.click(getByText(/Login/i));

  // Check that the login modal is now rendered
  expect(queryByText(/Login to your account/i)).toBeInTheDocument();
});
