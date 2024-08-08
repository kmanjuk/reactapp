/**
 * Processes application data to extract routes, settings, and schema.
 *
 * @function
 * @param {Object} appData - The application data object containing form data.
 * @returns {Object|null} An object containing parsed routes data, application schema, app settings, web settings, and SEO settings, or null if no form data is present.
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
