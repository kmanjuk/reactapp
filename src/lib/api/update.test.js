import { act } from 'react'
import { renderHook } from '@testing-library/react'
import { useMutation } from 'react-query'
import { axios } from '../axios'
import { updateCall, useUpdateCall } from './update'
import { useNotificationStore } from '../../store/notifications'
import { queryClient } from '../../lib/reactQueryClient'

jest.mock('../axios')
jest.mock('../../store/notifications')
jest.mock('react-query', () => ({
  useMutation: jest.fn(),
}))
jest.mock('../../lib/reactQueryClient', () => ({
  queryClient: {
    setQueryData: jest.fn(),
    invalidateQueries: jest.fn(),
  },
}))

describe('updateCall', () => {
  it('should make a PUT request with the correct URL and data', async () => {
    const call = {
      url: 'https://example.com/api',
      apiEndpoint: 'resource',
      id: '123',
      params: '?param=value',
      data: { name: 'test' },
    }

    axios.put.mockResolvedValue({ data: { success: true } })

    const response = await updateCall(call)

    expect(axios.put).toHaveBeenCalledWith(
      'https://example.com/api/resource/123?param=value',
      { name: 'test' }
    )
    expect(response.data).toEqual({ success: true })
  })

  it('should log the call object to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const call = {
      url: 'https://example.com/api',
      apiEndpoint: 'resource',
      id: '123',
      params: '?param=value',
      data: { name: 'test' },
    }

    updateCall(call)

    expect(consoleSpy).toHaveBeenCalledWith(call)

    consoleSpy.mockRestore()
  })
})

describe('useUpdateCall', () => {
  beforeEach(() => {
    useMutation.mockImplementation((fn, config) => ({
      mutate: fn,
      ...config,
    }))

    useNotificationStore.mockReturnValue({
      addNotification: jest.fn(),
    })
  })

  it('should call the updateCall function when the mutation is invoked', async () => {
    const call = {
      url: 'https://example.com/api',
      apiEndpoint: 'resource',
      id: '123',
      params: '?param=value',
      data: { name: 'test' },
    }
    const { result } = renderHook(() => useUpdateCall(call))

    await act(async () => {
      await result.current.mutate(call)
    })

    expect(axios.put).toHaveBeenCalledWith(
      'https://example.com/api/resource/123?param=value',
      { name: 'test' }
    )
  })

  it('should handle errors correctly', async () => {
    const call = {
      url: 'https://example.com/api',
      apiEndpoint: 'resource',
      id: '123',
      params: '?param=value',
      data: { name: 'test' },
      messageTitle: 'Error Title',
    }
    const errorMessage = 'Request failed'

    axios.put.mockRejectedValue(new Error(errorMessage))

    const addNotification = jest.fn()
    useNotificationStore.mockReturnValue({ addNotification })

    const { result } = renderHook(() => useUpdateCall(call))

    await act(async () => {
      await result.current.mutate(call)
    })

    expect(addNotification).toHaveBeenCalledWith({
      type: 'error',
      title: 'Error Title',
      message: errorMessage,
    })
  })

  it('should invalidate queries on success', async () => {
    const call = {
      url: 'https://example.com/api',
      apiEndpoint: 'resource',
      id: '123',
      params: '?param=value',
      data: { name: 'test' },
      messageTitle: 'Success Title',
      message: 'Update successful',
    }

    axios.put.mockResolvedValue({ data: { success: true } })

    const addNotification = jest.fn()
    useNotificationStore.mockReturnValue({ addNotification })

    const { result } = renderHook(() => useUpdateCall(call))

    await act(async () => {
      await result.current.mutate(call)
    })

    expect(queryClient.invalidateQueries).toHaveBeenCalledWith('resource')
    expect(addNotification).toHaveBeenCalledWith({
      type: 'success',
      title: 'Success Title',
      message: 'Update successful',
    })
  })
})
