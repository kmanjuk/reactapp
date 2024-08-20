import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Settings } from './Settings';

describe('Settings Component', () => {
  it('renders the Settings component with the first tab active by default', () => {
    render(<Settings />);
    // Check if the "Theme & Page" tab is active initially
    expect(screen.getByText('Theme & Page')).toHaveClass('trtui-active');
    // Ensure the content of the first tab is displayed
    expect(screen.getByText('Theme & Page').closest('.trtui-tab-pane')).toHaveClass('trtui-active trtui-show');
  });

  it('switches to the "Site & App" tab when clicked', () => {
    render(<Settings />);
    // Click on the "Site & App" tab
    fireEvent.click(screen.getByText('Site & App'));
    // Verify that the tab is active
    expect(screen.getByText('Site & App')).toHaveClass('trtui-active');
    // Check if the content is displayed
    expect(screen.getByText('Site & App').closest('.trtui-tab-pane')).toHaveClass('trtui-active trtui-show');
    // Verify the first tab is not active
    expect(screen.queryByText('Theme & Page')).not.toHaveClass('trtui-active');
  });

  it('displays only the content of the active tab', () => {
    render(<Settings />);
    // Initially, "Theme & Page" content should be visible
    expect(screen.getByText('Theme & Page').closest('.trtui-tab-pane')).toHaveClass('trtui-active trtui-show');
    // Other contents should not be visible
    expect(screen.queryByText('Site & App')).not.toBeInTheDocument();
    expect(screen.queryByText('SEO')).not.toBeInTheDocument();
    expect(screen.queryByText('Consent & Languages')).not.toBeInTheDocument();
  });

  it('switches to the "SEO" tab and displays its content', () => {
    render(<Settings />);
    // Click on the "SEO" tab
    fireEvent.click(screen.getByText('SEO'));
    // Verify the "SEO" tab is active
    expect(screen.getByText('SEO')).toHaveClass('trtui-active');
    // Ensure the "SEO" content is displayed
    expect(screen.getByText('SEO').closest('.trtui-tab-pane')).toHaveClass('trtui-active trtui-show');
  });

  it('sets the correct ARIA roles for accessibility', () => {
    render(<Settings />);
    // Ensure tabs have the correct role
    expect(screen.getAllByRole('tab')).toHaveLength(4);
    // Check the container of the tabs has the "tablist" role
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });
});
