import axiosInstance, { axios } from './axios-get'
import MockAdapter from 'axios-mock-adapter'

describe('Axios Instance Tests', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
    localStorage.clear()
  })

  afterEach(() => {
    mock.reset()
  })

  it('should attach the authorization header if token is present', async () => {
    // Mock the localStorage data
    const mockAuthData = {
      state: {
        authentication: {
          tokenObject: 'mockToken123'
        },
        tokenSource: 'mockSource'
      }
    }
    localStorage.setItem('auth', JSON.stringify(mockAuthData))

    // Mock response for the API call
    mock.onGet('/test-endpoint').reply(200, { message: 'Success' })

    // Perform the GET request
    const response = await axios.get('/test-endpoint')

    // Check the request headers
    expect(mock.history.get[0].headers.authorization).toBe('Bearer mockToken123')
    expect(mock.history.get[0].headers.tokenSource).toBe('mockSource')
    expect(mock.history.get[0].headers.Accept).toBe('application/json')

    // Verify the response data
    expect(response).toEqual({ message: 'Success' })
  })

  it('should handle errors and return a standardized response', async () => {
    // Mock response for the API call
    mock.onGet('/test-endpoint').reply(500, { message: 'Internal Server Error' })

    // Perform the GET request
    const response = await axios.get('/test-endpoint')

    // Verify the error response structure
    expect(response).toEqual({
      formData: [],
      error: expect.any(Object)
    })
  })

  it('should not attach the authorization header if no token is present', async () => {
    // Mock response for the API call
    mock.onGet('/test-endpoint').reply(200, { message: 'No auth header needed' })

    // Perform the GET request
    const response = await axios.get('/test-endpoint')

    // Check the request headers
    expect(mock.history.get[0].headers.authorization).toBeUndefined()
    expect(mock.history.get[0].headers.tokenSource).toBeUndefined()

    // Verify the response data
    expect(response).toEqual({ message: 'No auth header needed' })
  })

  it('should handle different HTTP methods correctly', async () => {
    // Mock responses for different methods
    mock.onPost('/test-post').reply(201, { message: 'Resource created' })
    mock.onPut('/test-put').reply(200, { message: 'Resource updated' })
    mock.onDelete('/test-delete').reply(204)

    // Perform the POST request
    const postResponse = await axios.post('/test-post', { data: 'test' })
    expect(postResponse).toEqual({ message: 'Resource created' })

    // Perform the PUT request
    const putResponse = await axios.put('/test-put', { data: 'update' })
    expect(putResponse).toEqual({ message: 'Resource updated' })

    // Perform the DELETE request
    const deleteResponse = await axios.delete('/test-delete')
    expect(deleteResponse).toBeUndefined()
  })

  it('should remove sensitive data from auth when making requests', async () => {
    const mockAuthData = {
      state: {
        authentication: {
          tokenObject: 'mockToken123',
        },
        userFamily: 'shouldNotBeSent',
        userLogins: 'shouldNotBeSent',
      }
    }
    localStorage.setItem('auth', JSON.stringify(mockAuthData))

    // Mock response for the API call
    mock.onGet('/test-endpoint').reply(200, { message: 'Success' })

    // Perform the GET request
    const response = await axios.get('/test-endpoint')

    // Verify that sensitive data is not sent in the request
    expect(mock.history.get[0].headers.authorization).toBe('Bearer mockToken123')
    expect(mock.history.get[0].data).not.toContain('userFamily')
    expect(mock.history.get[0].data).not.toContain('userLogins')
  })
})
