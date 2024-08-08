import { renderHook, act } from '@testing-library/react-hooks'
import { useMutation } from 'react-query'
import axios from '../axios'
import { useNotificationStore } from '../../store/notifications'
import { useUpdateCall, updateCall } from './update'
import { queryClient } from '../../lib/reactQueryClient'

jest.mock('react-query', () => ({
  useMutation: jest.fn(),
  queryClient: {
    setQueryData: jest.fn(),
    invalidateQueries: jest.fn(),
  },
}))

jest.mock('../axios')
jest.mock('../../store/notifications')

describe('useUpdateCall', () => {
  const call = {
    url: 'http://example.com',
    apiEndpoint: 'update',
    id: '123',
    params: '?test=true',
    data: { key: 'value' },
    messageTitle: 'Update Call',
    message: 'Call was successful',
  }

  beforeEach(() => {
    useNotificationStore.mockReturnValue({
      addNotification: jest.fn(),
    })
    useMutation.mockImplementation((mutationFn, options) => ({
      mutate: jest.fn(() => mutationFn(call)),
      ...options,
    }))
  })

  it('should call updateCall function and handle success', async () => {
    axios.put.mockResolvedValue({ data: { success: true } })
    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateCall(call, { config: { onSuccess: jest.fn() } }),
    )

    await act(async () => {
      result.current.mutate(call)
      await waitForNextUpdate()
    })

    expect(axios.put).toHaveBeenCalledWith(
      `${call.url}/${call.apiEndpoint}/${call.id}${call.params}`,
      call.data,
    )
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith(
      call.parentAPI ? call.parentAPI : call.apiEndpoint,
    )
    expect(result.current.onSuccess).toHaveBeenCalled()
    expect(useNotificationStore().addNotification).toHaveBeenCalledWith({
      type: 'success',
      title: call.messageTitle,
      message: call.message,
    })
  })

  it('should handle error', async () => {
    const errorMessage = 'Network Error'
    axios.put.mockRejectedValue(new Error(errorMessage))
    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateCall(call, { config: { onError: jest.fn() } }),
    )

    await act(async () => {
      result.current.mutate(call)
      await waitForNextUpdate()
    })

    expect(useNotificationStore().addNotification).toHaveBeenCalledWith({
      type: 'error',
      title: call.messageTitle,
      message: errorMessage,
    })
    expect(result.current.onError).toHaveBeenCalled()
  })

  it('should rollback on error', async () => {
    const errorMessage = 'Network Error'
    axios.put.mockRejectedValue(new Error(errorMessage))
    const previousCall = { key: 'previousValue' }
    queryClient.setQueryData.mockImplementationOnce(() => previousCall)

    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateCall(call, { config: { onError: jest.fn() } }),
    )

    await act(async () => {
      result.current.mutate(call)
      await waitForNextUpdate()
    })

    expect(queryClient.setQueryData).toHaveBeenCalledWith(call.apiEndpoint, previousCall)
  })
})
