import { renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import MockAdapter from 'axios-mock-adapter'
import { axios } from '../axios'
import { useGetQuery, useGetPageCall, useGetSPAPageCall } from './get'

// Create a mock instance of axios
const mock = new MockAdapter(axios)
const queryClient = new QueryClient()

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useGetQuery', () => {
  afterEach(() => {
    mock.reset()
  })

  it('fetches successfully data from an API', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'data' }
    const data = { data: 'Test data' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}`).reply(200, data)

    const { result, waitFor } = renderHook(() => useGetQuery(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(data)
  })

  it('handles error state', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'data' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}`).reply(500)

    const { result, waitFor } = renderHook(() => useGetQuery(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeTruthy()
  })
})

describe('useGetPageCall', () => {
  afterEach(() => {
    mock.reset()
  })

  it('fetches page data successfully', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'pageData', id: 1, pageName: 'Home Page' }
    const data = { data: 'Page Data' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}?pageId=1&pageName=HomePage`).reply(200, data)

    const { result, waitFor } = renderHook(() => useGetPageCall(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(data)
  })

  it('handles error state', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'pageData', id: 1, pageName: 'Home Page' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}?pageId=1&pageName=HomePage`).reply(500)

    const { result, waitFor } = renderHook(() => useGetPageCall(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeTruthy()
  })
})

describe('useGetSPAPageCall', () => {
  afterEach(() => {
    mock.reset()
  })

  it('fetches SPA page data successfully', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'spaPageData', homePage: 'Home Page' }
    const data = { data: 'SPA Page Data' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}?pageName=HomePage`).reply(200, data)

    const { result, waitFor } = renderHook(() => useGetSPAPageCall(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(data)
  })

  it('handles error state', async () => {
    const call = { apiURL: 'https://api.example.com', apiEndpoint: 'spaPageData', homePage: 'Home Page' }
    mock.onGet(`${call.apiURL}/${call.apiEndpoint}?pageName=HomePage`).reply(500)

    const { result, waitFor } = renderHook(() => useGetSPAPageCall(call, { config: { enabled: true } }), {
      wrapper,
    })

    await waitFor(() => result.current.isError)

    expect(result.current.error).toBeTruthy()
  })
})
