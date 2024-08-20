import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Helmet } from 'react-helmet';
import { ThemeHelmet } from './ThemeHelmet';

describe('ThemeHelmet Component', () => {
  test('loads the correct stylesheets when defaultTheme is "T1"', () => {
    render(<ThemeHelmet defaultTheme="T1" />);

    const helmet = Helmet.peek();
    const linkTags = helmet.linkTags;

    // Check if the correct number of stylesheets are loaded
    expect(linkTags).toHaveLength(4);

    // Verify each stylesheet link
    expect(linkTags[0].href).toBe(
      'https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/bootstrap.min.css'
    );
    expect(linkTags[1].href).toBe(
      'https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/css/normalize.css'
    );
    expect(linkTags[2].href).toBe(
      'https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/style.css'
    );
    expect(linkTags[3].href).toBe(
      'https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/css/responsive.css'
    );
  });

  test('renders nothing when defaultTheme is not "T1"', () => {
    render(<ThemeHelmet defaultTheme="T2" />);

    const helmet = Helmet.peek();
    const linkTags = helmet.linkTags;

    // Check that no stylesheets are loaded
    expect(linkTags).toHaveLength(0);
  });
});
