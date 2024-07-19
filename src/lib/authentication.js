import axios from 'axios'

export const getUser = async ({ isLocalEnvironment, setAuthentication }) => {
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
      console.log(resObject)
      if (!localStorage.getItem('authenticateSession')) {
        getUserSession(isLocalEnvironment)
      }

      await setAuthentication(
        {
          name: resObject.user.profile.displayName,
          email: resObject.user.profile.emails[0].value,
          profileImg: resObject.user.profile.photos[0].value,
          tokenObject: resObject.tokenObject,
          profile: {},
        },
        'passport',
        resObject,
        '',
        '',
      )
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getUserSession = async (isLocalEnvironment) => {
  const authDetails = {}
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
      const authSession = {}

      authSession['session'] = tres.data.formData
      const defaultRole = tres.data.formData.user.userRoles.filter((f) => f.roleName === 'AppUser')
      authDetails['role'] = defaultRole[0].roleName
      authDetails['roleId'] = defaultRole[0].roleId
      authSession['role'] = defaultRole[0].roleName
      authSession['roleId'] = defaultRole[0].roleId

      localStorage.setItem('authenticateSession', JSON.stringify(authSession))
    })
    .catch((err) => {
      console.log(err)
    })
}
