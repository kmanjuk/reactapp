import React from 'react';
import { renderHook } from '@testing-library/react';
import { useCreateCall, useCreateImageCall } from './create'; // Adjust import path based on your project structure
import { axios } from '../axios'; // Mocked Axios instance
import { queryClient } from '../../lib/reactQueryClient'; // Mocked query client instance

// Mock Axios module
jest.mock('../axios', () => ({
  axios: {
    post: jest.fn(),
  },
}));

// Mock query client instance
jest.mock('../../lib/reactQueryClient', () => ({
  queryClient: {
    invalidateQueries: jest.fn(),
    setQueryData: jest.fn(),
  },
}));

// Test useCreateCall hook
describe('useCreateCall hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('executes mutation and handles onSuccess', async () => {
    axios.post.mockResolvedValueOnce({ data: { id: 1, name: 'Test' } });
    const { result, waitForNextUpdate } = renderHook(() => useCreateCall({ url: '/api', apiEndpoint: 'data' }));
    
    const mutationResult = await result.current.mutateAsync({ params: '/123', data: { name: 'Updated' } });
    
    expect(mutationResult).toEqual({ id: 1, name: 'Test' });
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('data');
  });

  test('handles onError and sets previous data', async () => {
    axios.post.mockRejectedValueOnce(new Error('API Error'));
    const previousData = { id: 1, name: 'Previous Data' };
    const { result, waitForNextUpdate } = renderHook(() => useCreateCall({ url: '/api', apiEndpoint: 'data' }));
    
    result.current.mutateAsync({ params: '/123', data: { name: 'Updated' }, context: { previousCall: previousData } });

    await waitForNextUpdate();
    
    expect(queryClient.setQueryData).toHaveBeenCalledWith('data', previousData);
  });
});

// Test useCreateImageCall hook
describe('useCreateImageCall hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('executes mutation and handles onSuccess for image', async () => {
    axios.post.mockResolvedValueOnce({ data: { id: 1, name: 'Test Image' } });
    const { result, waitForNextUpdate } = renderHook(() => useCreateImageCall({ url: '/api', apiEndpoint: 'image' }));
    
    const mutationResult = await result.current.mutateAsync({ params: '/456', data: { name: 'Updated Image' } });
    
    expect(mutationResult).toEqual({ id: 1, name: 'Test Image' });
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('image');
  });

  test('handles onError and sets previous data for image', async () => {
    axios.post.mockRejectedValueOnce(new Error('API Error'));
    const previousData = { id: 1, name: 'Previous Image' };
    const { result, waitForNextUpdate } = renderHook(() => useCreateImageCall({ url: '/api', apiEndpoint: 'image' }));
    
    result.current.mutateAsync({ params: '/456', data: { name: 'Updated Image' }, context: { previousCall: previousData } });

    await waitForNextUpdate();
    
    expect(queryClient.setQueryData).toHaveBeenCalledWith('image', previousData);
  });
});
