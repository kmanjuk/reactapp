import { render } from '@testing-library/react';
import AppLayoutHeader from './AppLayoutHeader';

test('renders AppLayoutHeader without crashing', () => {
  render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: '', REACT_APP_THEME_LOGO: '' }}
      authDetails={{}}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );
});

test('renders the logo correctly', () => {
  const { getByAltText } = render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: 'favicon.png', REACT_APP_THEME_LOGO: 'logo.png' }}
      authDetails={{}}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );

  expect(getByAltText('logo-sm-dark')).toHaveAttribute('src', 'favicon.png');
  expect(getByAltText('logo-lg-dark')).toHaveAttribute('src', 'logo.png');
});

test('toggles dark mode correctly', () => {
  const { getByRole } = render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: '', REACT_APP_THEME_LOGO: '' }}
      authDetails={{}}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );

  const button = getByRole('button', { name: /toggle dark mode/i });
  expect(document.documentElement).not.toHaveAttribute('data-bs-theme', 'dark');

  button.click();

  expect(document.documentElement).toHaveAttribute('data-bs-theme', 'dark');
});

test('shows login button when not logged in', () => {
  const { getByRole } = render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: '', REACT_APP_THEME_LOGO: '' }}
      authDetails={{ loggedIn: false }}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );

  expect(getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('shows user dropdown when logged in', () => {
  const authDetails = {
    loggedIn: true,
    session: {
      user: {
        userFullName: 'John Doe',
        profile: { photos: [{ value: 'avatar.png' }] },
      },
    },
    role: 'Admin',
  };

  const { getByText } = render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: '', REACT_APP_THEME_LOGO: '' }}
      authDetails={authDetails}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );

  expect(getByText(/John Doe/i)).toBeInTheDocument();
  expect(getByText(/Admin/i)).toBeInTheDocument();
});

test('shows and hides logo based on window width', () => {
  // Initial render with desktop width
  global.innerWidth = 1024;
  const { getById } = render(
    <AppLayoutHeader
      envData={{ REACT_APP_THEME_FAVICON: '', REACT_APP_THEME_LOGO: '' }}
      authDetails={{}}
      setToggleLoginModal={() => {}}
      setToggleMenu={() => {}}
      toggleMenu={false}
    />
  );

  expect(getById('brandLogo')).not.toHaveStyle('display: block');

  // Change window width to mobile size
  global.innerWidth = 500;
  global.dispatchEvent(new Event('resize'));

  expect(getById('brandLogo')).toHaveStyle('display: block');
});
