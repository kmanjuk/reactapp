const authenticateSession =
  localStorage.getItem('authenticateSession') &&
  JSON.parse(localStorage.getItem('authenticateSession'))

export const httpParams = {
  publicParams: (envData) => {
    return `?tenantId=${envData.REACT_APP_TENANT_ID}&appId=${envData.REACT_APP_APP_ID}&orgId=${envData.REACT_APP_ORG_ID}`
  },
  privateParams: (envData) => {
    return `?tenantId=${envData.REACT_APP_TENANT_ID}&appId=${envData.REACT_APP_APP_ID}&orgId=${
      envData.REACT_APP_ORG_ID
    }&roleId=${authenticateSession?.roleId && authenticateSession?.roleId}`
  },
}
