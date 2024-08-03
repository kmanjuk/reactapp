import Axios from 'axios'

//Creating new Axios instance with custom config
/**
 * @class Axios
 * @description An instance of axios
 * @function axios
 * @param {string} baseURL api end point url
 * @param {boolean} withCredentials boolean whether to use creadentials
 * @returns {object} response data object
 */
export const axios = Axios.create({
  baseURL: '',
  withCredentials: true,
})

//axios request interceptor uses authRequestInterceptor function to configure requests
axios.interceptors.request.use(authRequestInterceptor)

//axios response interceptor
axios.interceptors.response.use(
  (response) => {
    //if success, return data
    return response.data
  },
  (error) => {
    //in case of error, return empty object along with error description
    return Promise.reject(error)
  },
)

function authRequestInterceptor(config) {
  //get user session object stored in localStorage
  const authenticate = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null
  const localToken = authenticate !== null ? authenticate.state?.authentication : null
  const token = localToken && localToken !== null ? localToken.tokenObject : null

  //check if token exists and add auth headers to requests
  if (token !== null) {
    config.headers.authorization = `Bearer ${token}`
    config.headers.tokenSource = localStorage.getItem('auth') && authenticate.state?.tokenSource
  }

  //add Accept header
  config.headers.Accept = 'application/json'
  return config
}
