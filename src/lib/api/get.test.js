import React from 'react';
import { renderHook } from '@testing-library/react';
import { useGetQuery, useGetMutate, useGetPageCall, useGetSPAPageCall } from './get'; // Adjust import path based on your project structure
import axios from '../axios'; // Mocked Axios instance

// Mock Axios module
jest.mock('../axios', () => ({
  axios: {
    get: jest.fn(),
  },
}));

// Test useGetQuery hook
describe('useGetQuery hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches data correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: 'Test' } });
    const { result, waitForNextUpdate } = renderHook(() => useGetQuery({ apiURL: '/api', apiEndpoint: 'data', enabled: true }));
    
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.data).toEqual({ id: 1, name: 'Test' });
    expect(result.current.isLoading).toBe(false);
  });

  test('handles error correctly', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    const { result, waitForNextUpdate } = renderHook(() => useGetQuery({ apiURL: '/api', apiEndpoint: 'data', enabled: true }));
    
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.error.message).toBe('API Error');
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });
});

// Test useGetMutate hook
describe('useGetMutate hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('executes mutation correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: 'Test' } });
    const { result } = renderHook(() => useGetMutate());
    
    const mutationResult = await result.current.mutateAsync({ apiURL: '/api/data' });
    
    expect(mutationResult).toEqual({ id: 1, name: 'Test' });
    expect(axios.get).toHaveBeenCalledWith('/api/data');
  });
});

// Test useGetPageCall hook
describe('useGetPageCall hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches data with correct parameters', async () => {
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: 'Test' } });
    const { result, waitForNextUpdate } = renderHook(() => useGetPageCall({ apiURL: '/api', apiEndpoint: 'data', id: 1, pageName: 'Test Page', enabled: true }));
    
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.data).toEqual({ id: 1, name: 'Test' });
    expect(axios.get).toHaveBeenCalledWith('/api/data?pageId=1&pageName=TestPage');
  });
});

// Test useGetSPAPageCall hook
describe('useGetSPAPageCall hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches SPA page data with correct parameters', async () => {
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: 'Test' } });
    const { result, waitForNextUpdate } = renderHook(() => useGetSPAPageCall({ apiURL: '/api', apiEndpoint: 'data', homePage: 'Home Page', enabled: true }));
    
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    
    expect(result.current.data).toEqual({ id: 1, name: 'Test' });
    expect(axios.get).toHaveBeenCalledWith('/api/data?pageName=HomePage');
  });
});
