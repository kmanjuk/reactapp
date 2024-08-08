import Axios from 'axios'

/**
 * Creates a new Axios instance with custom configuration for get calls.
 *
 * @constant {Object} axiosget
 * @description An instance of Axios with a base URL and credentials set.
 * @param {string} baseURL - The base URL for the Axios instance.
 * @param {boolean} withCredentials - Whether to include credentials with requests.
 * @returns {Object} The Axios instance with custom configuration.
 */
export const axios = Axios.create({
  baseURL: '',
  withCredentials: true,
})

// Axios request interceptor uses authRequestInterceptor function to configure requests
axios.interceptors.request.use(authRequestInterceptor)

// Axios response interceptor
axios.interceptors.response.use(
  /**
   * Handles successful responses from the server.
   *
   * @function
   * @param {Object} response - The response object from the server.
   * @returns {Object} The data from the response.
   */
  (response) => {
    return response.data
  },
  /**
   * Handles errors in responses from the server.
   *
   * @function
   * @param {Object} error - The error object from the server.
   * @returns {Promise} A promise that is rejected with the error.
   */
  (error) => {
    const resp = { formData: [], error }
    return resp
  },
)

/**
 * Configures requests by adding authentication headers and other default headers.
 *
 * @function
 * @param {Object} config - The Axios request configuration object.
 * @returns {Object} The updated Axios request configuration object.
 */
function authRequestInterceptor(config) {
  // Get user session object stored in localStorage
  const authenticate = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null
  const localToken = authenticate !== null ? authenticate.state?.authentication : null
  const token = localToken && localToken !== null ? localToken.tokenObject : null

  // Check if token exists and add auth headers to requests
  if (token !== null) {
    config.headers.authorization = `Bearer ${token}`
    config.headers.tokenSource = localStorage.getItem('auth') && authenticate.state?.tokenSource
  }

  // Add Accept header
  config.headers.Accept = 'application/json'
  return config
}
