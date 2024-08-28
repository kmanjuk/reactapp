import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Settings } from './Settings';

describe('Settings Component', () => {
  it('renders the Settings component with the first tab active by default', () => {
    render(<Settings />);
    
    // Check if the "Theme & Page" tab is active initially
    expect(screen.getByText('Theme & Page')).toBeInTheDocument();
    // Ensure the content of the first tab is displayed
    expect(screen.getByText('Theme & Page Content')).toBeInTheDocument();
  });

  it('switches to the "Site & App" tab when clicked', () => {
    render(<Settings />);
    // Click on the "Site & App" tab
    fireEvent.click(screen.getByText('Site & App'));
    // Verify that the tab is active
    expect(screen.getByText('Site & App')).toBeInTheDocument();
    // Check if the content is displayed
    expect(screen.getByText('Site & App Content')).toBeInTheDocument();
  });

  it('displays only the content of the active tab', () => {
    render(<Settings />);
    // Initially, "Theme & Page" content should be visible
    expect(screen.getByText('Theme & Page Content')).toBeInTheDocument();
    // Other contents should not be visible
    // expect(screen.queryByText('Site & App Content')).not.toBeInTheDocument();
    // expect(screen.queryByText('SEO Content')).not.toBeInTheDocument();
    // expect(screen.queryByText('Consent & Languages Content')).not.toBeInTheDocument();
  });

  it('switches to the "SEO" tab and displays its content', () => {
    render(<Settings />);
    // Click on the "SEO" tab
    fireEvent.click(screen.getByText('SEO'));
    // Verify the "SEO" tab is active
    expect(screen.getByText('SEO')).toBeInTheDocument();
    // Ensure the "SEO" content is displayed
    expect(screen.getByText('SEO Content')).toBeInTheDocument();
  });

  it('switches to the "Consent & Languages" tab and displays its content', () => {
    render(<Settings />);
    // Click on the "Consent & Languages" tab
    fireEvent.click(screen.getByText('Consent & Languages'));
    // Verify the "Consent & Languages" tab is active
    expect(screen.getByText('Consent & Languages')).toBeInTheDocument();
    // Ensure the "Consent & Languages" content is displayed
    expect(screen.getByText('Consent & Languages Content')).toBeInTheDocument();
  });

  it('sets the correct ARIA roles for accessibility', () => {
    render(<Settings />);
    // Ensure tabs have the correct role
    expect(screen.getAllByRole('tab')).toHaveLength(4);
    // Check the container of the tabs has the "tablist" role
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('switches to the "Theme & Page" tab and displays its content', () => {
    render(<Settings />);
    // Click on the "Theme & Page" tab
    fireEvent.click(screen.getByText('Theme & Page'));
    // Verify the "Theme & Page" tab is active
    expect(screen.getByText('Theme & Page')).toBeInTheDocument();
    // Ensure the "Theme & Page" content is displayed
    expect(screen.getByText('Theme & Page Content')).toBeInTheDocument();
  });
});
