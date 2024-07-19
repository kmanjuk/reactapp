import React from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { AppProvider } from './AppProvider';
import { queryClient } from './lib/reactQueryClient';

describe('AppProvider Component', () => {
  it('renders children and loading indicator correctly', () => {
    const { getByText, getByTestId } = render(
      <AppProvider>
        <div>Child Component</div>
      </AppProvider>
    );

    // Ensure children are rendered
    expect(getByText('Child Component')).toBeInTheDocument();

    // Ensure loading indicator is rendered
    expect(getByTestId('global-loader')).toBeInTheDocument();
    expect(getByTestId('global-loader')).toHaveTextContent('LOADING.........');
  });

  it('provides QueryClientProvider with queryClient', () => {
    const { container } = render(
      <AppProvider>
        <div>Child Component</div>
      </AppProvider>
    );

    // Ensure QueryClientProvider is rendered and has the queryClient prop
    const queryClientProvider = container.querySelector('QueryClientProvider');
    expect(queryClientProvider).toBeInTheDocument();
    expect(queryClientProvider).toHaveAttribute('client', queryClient);
  });

  // Add more test cases for edge cases, prop types, etc.
});
