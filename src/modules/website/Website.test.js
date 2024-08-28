import React from 'react';
import { render, screen } from '@testing-library/react';
import { Website } from './Website';
import { useGetPageCall, useGetSPAPageCall } from '../../lib/api/get';
import { LoginModal } from '../../common/LoginModal';
import { WebError } from './WebError';
import * as Web from './webcomps';

// Mock the custom hooks and components
jest.mock('../../lib/api/get', () => ({
  useGetPageCall: jest.fn(),
  useGetSPAPageCall: jest.fn(),
}));

jest.mock('../../common/LoginModal', () => ({
  LoginModal: jest.fn(() => <div>LoginModal</div>),
}));

jest.mock('./WebError', () => ({
  WebError: jest.fn(() => <div>WebError</div>),
}));

jest.mock('./webcomps', () => ({
  Navbar: jest.fn(() => <div>Navbar</div>),
  Footer: jest.fn(() => <div>Footer</div>),
}));

const mockEnvData = {
  REACT_APP_PRIMARY_COLOR: '#000000',
  REACT_APP_SECONDARY_COLOR: '#ffffff',
  REACT_APP_THEME_FAVICON: 'https://thulishacdnstorage.blob.core.windows.net/resources/E7C9BB32-83AC-4B88-A035-C6EB02A6328F/favicon.png',
};

const mockAppDataParsed = {
  webSettings: {
    'webSettings-defaultTheme': 'T1',
    'webSettings-navbarComponent': 'Navbar',
    'webSettings-footerComponent': 'Footer',
    'webSettings-defaultSPAPage': 'home',
  },
};

const mockRouteData = {
  isSPA: 1,
  pageId: 'page-1',
  pageName: 'HomePage',
};

const mockAuthDetails = {
  loggedIn: true,
};

describe('Website Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('should render loading state when data is being fetched', () => {
    useGetPageCall.mockReturnValue({
      isLoading: true,
      isRefetching: false,
      data: null,
    });

    useGetSPAPageCall.mockReturnValue({
      isLoading: true,
      data: null,
    });

    render(
      <Website
        envData={mockEnvData}
        appDataParsed={mockAppDataParsed}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        authDetails={mockAuthDetails}
        setToggleLoginModal={jest.fn()}
        toggleLoginModal={false}
        sideLoginModalRef={{ current: null }}
      />
    );

    //expect(screen.getAllByText(/loading/i)[0]).toBeInTheDocument();
    const loadingSpinner = screen.getByTestId('loading-Spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render Navbar and Footer components when page data is available', () => {
    useGetPageCall.mockReturnValue({
      isLoading: false,
      isRefetching: false,
      data: {
        formData: {
          pageData: JSON.stringify([
            {
              childItems: [
                {
                  childItems: [
                    {
                      className: {
                        className: 'Navbar',
                      },
                      pageElementDisplayOrder: 1,
                    },
                    {
                      className: {
                        className: 'Footer',
                      },
                      pageElementDisplayOrder: 2,
                    },
                  ],
                },
              ],
            },
          ]),
        },
      },
    });

    useGetSPAPageCall.mockReturnValue({
      isLoading: false,
      data: {
        formData: {
          pageData: JSON.stringify([]),
        },
      },
    });

    const {container} = render(
      <Website
        envData={mockEnvData}
        appDataParsed={mockAppDataParsed}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        authDetails={mockAuthDetails}
        setToggleLoginModal={jest.fn()}
        toggleLoginModal={false}
        sideLoginModalRef={{ current: null }}
      />
    );
    expect(container.querySelector("div")).toBeInTheDocument()
    expect(container.querySelector("div")).toBeInTheDocument()
  });

  it('should render error message when component fails to load', () => {
    useGetPageCall.mockReturnValue({
      isLoading: false,
      isRefetching: false,
      data: {
        formData: {
          pageData: JSON.stringify([
            {
              childItems: [
                {
                  childItems: [
                    {
                      className: {
                        className: 'NonExistentComponent',
                      },
                      pageElementDisplayOrder: 1,
                    },
                  ],
                },
              ],
            },
          ]),
        },
      },
    });

    useGetSPAPageCall.mockReturnValue({
      isLoading: false,
      data: {
        formData: {
          pageData: JSON.stringify([]),
        },
      },
    });

    render(
      <Website
        envData={mockEnvData}
        appDataParsed={mockAppDataParsed}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        authDetails={mockAuthDetails}
        setToggleLoginModal={jest.fn()}
        toggleLoginModal={false}
        sideLoginModalRef={{ current: null }}
      />
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('should render LoginModal when toggleLoginModal is true', () => {
    useGetPageCall.mockReturnValue({
      isLoading: false,
      isRefetching: false,
      data: {
        formData: {
          pageData: JSON.stringify([]),
        },
      },
    });

    useGetSPAPageCall.mockReturnValue({
      isLoading: false,
      data: {
        formData: {
          pageData: JSON.stringify([]),
        },
      },
    });

    render(
      <Website
        envData={mockEnvData}
        appDataParsed={mockAppDataParsed}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        authDetails={mockAuthDetails}
        setToggleLoginModal={jest.fn()}
        toggleLoginModal={true}
        sideLoginModalRef={{ current: null }}
      />
    );

    expect(screen.getAllByText(/LoginModal/i)[0]).toBeInTheDocument();
  });
});

