import axios from 'axios'

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
      throw new Error('authentication has been failed!')
    })
    .then(async (resObject) => {
      //localStorage.setItem('loggedIn', true)
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
      const defaultRole = tres.data.formData.user.userRoles.filter((f) => f.roleName === 'AppUser')
      await setAuthentication({
        resObject: resObject,
        tokenSource: 'passport',
        session: tres,
        role: defaultRole[0].roleName,
        roleId: defaultRole[0].roleId,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
