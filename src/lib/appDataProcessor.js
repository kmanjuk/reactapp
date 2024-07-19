/**
 * @class appDataProcessor
 * @description Filter out settings and seo, other than parsing routes and appElements data
 * @function appDataProcessor
 * @param {object} appData reponse data from appData api call.
 * @returns {object} object.
 */
export const appDataProcessor = (appData) => {
  if (!appData.data.formData || appData.data.formData.length <= 0) {
    return null
  }
  const routesData = appData.data?.formData[0]
    ? JSON.parse(appData.data?.formData[0].routesData)
    : []
  const applicationSchema = appData.data?.formData[0]
    ? JSON.parse(appData.data?.formData[0].appElementsData)
    : {}

  const appSettings =
    applicationSchema.length > 0 &&
    applicationSchema.filter((f) => 'appSettings' in f)[0].appSettings
  const webSettings =
    applicationSchema.length > 0 &&
    applicationSchema.filter((f) => 'webSettings' in f)[0].webSettings
  const seo = applicationSchema.length > 0 && applicationSchema.filter((f) => 'seo' in f)[0].seo
  return { routesData, applicationSchema, appSettings, webSettings, seo }
}
