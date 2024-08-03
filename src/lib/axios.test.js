import MockAdapter from 'axios-mock-adapter'
import { axios } from './axios'  // Adjust the import according to your file structure

describe('Axios instance', () => {
  let mock

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should add authorization headers if token exists', async () => {
    const token = 'test-token'
    const authenticateSession = {
      state: {
        authentication: {
          tokenObject: token,
        },
        tokenSource: 'local',
      },
    }
    localStorage.setItem('authenticateSession', JSON.stringify(authenticateSession))

    mock.onGet('/test').reply(200, { data: 'success' })

    const response = await axios.get('/test')

    expect(response).toEqual({ data: 'success' })
    expect(mock.history.get[0].headers.authorization).toBe(`Bearer ${token}`)
    expect(mock.history.get[0].headers.tokenSource).toBe('local')

    localStorage.removeItem('authenticateSession')
  })

  it('should not add authorization headers if token does not exist', async () => {
    localStorage.removeItem('authenticateSession')

    mock.onGet('/test').reply(200, { data: 'success' })

    const response = await axios.get('/test')

    expect(response).toEqual({ data: 'success' })
    expect(mock.history.get[0].headers.authorization).toBeUndefined()
  })

  it('should handle response success', async () => {
    mock.onGet('/test').reply(200, { data: 'success' })

    const response = await axios.get('/test')

    expect(response).toEqual({ data: 'success' })
  })

  it('should handle response error', async () => {
    const errorResponse = {
      response: {
        status: 404,
        data: { message: 'Not Found' },
      },
    }
    mock.onGet('/test').reply(() => {
      return [404, { message: 'Not Found' }]
    })

    const response = await axios.get('/test')

    expect(response).toEqual({ formData: [], error: errorResponse })
  })
})
