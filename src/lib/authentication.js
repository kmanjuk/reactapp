import axios from 'axios'

/**
 * Fetches user authentication status and updates authentication state.
 *
 * @function
 * @param {Object} params - The parameters for the function.
 * @param {string} params.isLocalEnvironment - The base URL for the local environment.
 * @param {Function} params.setAuthentication - Function to update authentication state.
 * @param {Object} params.authDetails - Current authentication details.
 * @returns {Promise<void>}
 */
export const getUser = async ({ isLocalEnvironment, setAuthentication, authDetails }) => {
  await fetch(isLocalEnvironment + '/auth/login/success', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json()
      throw new Error('Authentication has failed!')
    })
    .then(async (resObject) => {
      // If user profile ID is present and no authentication details are set, fetch user session
      if (
        resObject.user?.profile?.id &&
        !authDetails.roleId &&
        !authDetails.role &&
        !authDetails.session
      ) {
        getUserSession({ isLocalEnvironment, resObject, setAuthentication })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

/**
 * Fetches user session data and updates authentication state.
 *
 * @function
 * @param {Object} params - The parameters for the function.
 * @param {string} params.isLocalEnvironment - The base URL for the local environment.
 * @param {Object} params.resObject - The response object from the authentication check.
 * @param {Function} params.setAuthentication - Function to update authentication state.
 * @returns {Promise<void>}
 */
const getUserSession = async ({ isLocalEnvironment, resObject, setAuthentication }) => {
  await axios
    .get(isLocalEnvironment + '/authenticateSession', {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
    .then(async (tres) => {
      // Extract the default user role from the session data
      const defaultRole = tres.data.formData.user.userRoles.filter((f) => f.roleName === 'AppUser')
      await setAuthentication({
        resObject: resObject,
        tokenSource: 'passport',
        session: tres.data.formData,
        role: defaultRole[0].roleName,
        roleId: defaultRole[0].roleId,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
