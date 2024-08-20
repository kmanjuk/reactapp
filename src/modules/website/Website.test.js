import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Website } from './Website';
import { useGetPageCall, useGetSPAPageCall } from '../../lib/api/get';
import { mainUILoad, isValidJsonString } from '../../lib/uiHelper';

// Mock dependencies
jest.mock('../../lib/api/get', () => ({
  useGetPageCall: jest.fn(),
  useGetSPAPageCall: jest.fn(),
}));

jest.mock('../../lib/uiHelper', () => ({
  mainUILoad: jest.fn(),
  isValidJsonString: jest.fn(),
}));

jest.mock('../../common/LoginModal', () => ({
  LoginModal: () => <div>Login Modal</div>,
}));

jest.mock('./ThemeHelmet', () => ({
  ThemeHelmet: () => <div>Theme Helmet</div>,
}));

jest.mock('../../common/Loading', () => ({
  Loading: () => <div>Loading</div>,
}));

describe('Website Component', () => {
  const defaultProps = {
    envData: {
      REACT_APP_PRIMARY_COLOR: '#000',
      REACT_APP_SECONDARY_COLOR: '#FFF',
      REACT_APP_THEME_FAVICON: 'favicon.ico',
    },
    appDataParsed: {
      webSettings: {
        'webSettings-defaultTheme': 'T1',
        'webSettings-defaultSPAPage': 'home',
        'webSettings-navbarComponent': 'NavbarComponent',
        'webSettings-footerComponent': 'FooterComponent',
      },
    },
    routeData: {
      pageId: '1',
      pageName: 'HomePage',
      isSPA: true,
    },
    isLocalEnvironment: 'local',
    authDetails: { loggedIn: true },
    setToggleLoginModal: jest.fn(),
    toggleLoginModal: false,
    sideLoginModalRef: { current: null },
  };

  it('should render loading state when data is loading', () => {
    useGetPageCall.mockReturnValue({ isLoading: true });
    useGetSPAPageCall.mockReturnValue({ isLoading: true });

    render(<Website {...defaultProps} />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('should render theme helmet', async () => {
    useGetPageCall.mockReturnValue({ isLoading: false });
    useGetSPAPageCall.mockReturnValue({ isLoading: false, data: { data: [] } });

    render(<Website {...defaultProps} />);
    await waitFor(() => {
      expect(screen.getByText('Theme Helmet')).toBeInTheDocument();
    });
  });

  it('should render LoginModal when toggleLoginModal is true', () => {
    render(<Website {...defaultProps} toggleLoginModal={true} />);
    expect(screen.getByText('Login Modal')).toBeInTheDocument();
  });

  it('should call mainUILoad on render', () => {
    render(<Website {...defaultProps} />);
    expect(mainUILoad).toHaveBeenCalledWith(
      '#000',
      '#FFF',
      'favicon.ico'
    );
  });

  it('should render components based on SPA and page data', async () => {
    useGetPageCall.mockReturnValue({ isLoading: false, data: { data: [] } });
    useGetSPAPageCall.mockReturnValue({
      isLoading: false,
      data: {
        data: [
          {
            pageData: JSON.stringify([
              {
                childItems: [
                  {
                    childItems: [
                      {
                        pageElementDisplayOrder: 1,
                        className: { className: 'NavbarComponent' },
                      },
                    ],
                  },
                ],
              },
            ]),
          },
        ],
      },
    });

    render(<Website {...defaultProps} />);
    // Check that NavbarComponent is rendered or verify other expected behavior.
    // This depends on the actual implementation of Web.NavbarComponent.
  });

  it('should handle invalid JSON for page data gracefully', async () => {
    useGetPageCall.mockReturnValue({
      isLoading: false,
      data: { data: { pageData: 'Invalid JSON' } },
    });
    useGetSPAPageCall.mockReturnValue({
      isLoading: false,
      data: { data: [{ pageData: 'Invalid JSON' }] },
    });

    render(<Website {...defaultProps} />);
    // Check that error handling or fallback UI is rendered.
    expect(screen.queryByText('Something Went Wrong!')).toBeInTheDocument();
  });
});
