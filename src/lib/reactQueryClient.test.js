import { queryClient } from './reactQueryClient'; // Adjust import based on your file structure
import { QueryClient } from 'react-query';

describe('queryClient configuration', () => {
  test('should create a QueryClient instance with default options', () => {
    // Assert that queryClient is an instance of QueryClient
    expect(queryClient).toBeInstanceOf(QueryClient);

    // Assert defaultOptions are correctly set
    const defaultOptions = queryClient.getDefaultOptions();
    expect(defaultOptions.queries.useErrorBoundary).toBe(true);
    expect(defaultOptions.queries.refetchOnWindowFocus).toBe(false);
    expect(defaultOptions.queries.retry).toBe(false);
    expect(defaultOptions.queries.sideNavbar).toBe(false);
  });
});
