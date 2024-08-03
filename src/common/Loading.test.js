// Loading.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './Loading';
import * as uiHelper from '../lib/uiHelper';

// Mock uiHelper's mainUILoad function
jest.spyOn(uiHelper, 'mainUILoad').mockImplementation(() => {});

describe('Loading Component', () => {
  const envData = {
    REACT_APP_PRIMARY_COLOR: '#ff0000',
    REACT_APP_SECONDARY_COLOR: '#00ff00',
    REACT_APP_THEME_FAVICON: '/favicon.ico',
  };
  const appDataParsed = {
    webSettings: {
      'webSettings-defaultSpinner': 'lds-facebook',
    },
  };

  test('calls mainUILoad with correct parameters', () => {
    render(<Loading envData={envData} appDataParsed={appDataParsed} />);
    
    expect(uiHelper.mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    );
  });

  test('renders with default spinner when appDataParsed is not provided', () => {
    const { container } = render(<Loading envData={envData} />);
    const defaultSpinner = container.querySelector('.lds-dual-ring');

    expect(defaultSpinner).toBeInTheDocument();
  });

  test('renders with custom spinner class from appDataParsed', () => {
    const { container } = render(<Loading envData={envData} appDataParsed={appDataParsed} />);
    const customSpinner = container.querySelector('.lds-facebook');

    expect(customSpinner).toBeInTheDocument();
  });
});
