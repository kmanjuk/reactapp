import { renderHook, act } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import MockAdapter from 'axios-mock-adapter'
import { axios } from '../axios'
import { useCreateCall, useCreateImageCall } from './create'
import { queryClient } from '../../lib/reactQueryClient'

// Create a mock instance of axios
const mock = new MockAdapter(axios)
const testQueryClient = new QueryClient()

const wrapper = ({ children }) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
)

describe('useCreateCall', () => {
  afterEach(() => {
    mock.reset()
  })

  it('posts data successfully', async () => {
    const call = { url: 'https://api.example.com', apiEndpoint: 'data', data: { test: 'data' }, params: '' }
    const responseData = { data: 'Test data' }
    mock.onPost(`${call.url}/${call.apiEndpoint}${call.params}`).reply(200, responseData)

    const { result, waitFor } = renderHook(() => useCreateCall(call, { config: {} }), { wrapper })

    act(() => {
      result.current.mutate(call)
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(responseData)
  })

  it('handles error state', async () => {
    const call = { url: 'https://api.example.com', apiEndpoint: 'data', data: { test: 'data' }, params: '' }
    mock.onPost(`${call.url}/${call.apiEndpoint}${call.params}`).reply(500)

    const { result, waitFor } = renderHook(() => useCreateCall(call, { config: {} }), { wrapper })

    act(() => {
      result.current.mutate(call)
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeTruthy()
  })
})

describe('useCreateImageCall', () => {
  afterEach(() => {
    mock.reset()
  })

  it('posts image data successfully', async () => {
    const call = { url: 'https://api.example.com', apiEndpoint: 'image', data: { test: 'image data' }, params: '' }
    const responseData = { data: 'Image data' }
    mock.onPost(`${call.url}/${call.apiEndpoint}${call.params}`).reply(200, responseData)

    const { result, waitFor } = renderHook(() => useCreateImageCall(call, { config: {} }), { wrapper })

    act(() => {
      result.current.mutate(call)
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(responseData)
  })

  it('handles error state', async () => {
    const call = { url: 'https://api.example.com', apiEndpoint: 'image', data: { test: 'image data' }, params: '' }
    mock.onPost(`${call.url}/${call.apiEndpoint}${call.params}`).reply(500)

    const { result, waitFor } = renderHook(() => useCreateImageCall(call, { config: {} }), { wrapper })

    act(() => {
      result.current.mutate(call)
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeTruthy()
  })
})
