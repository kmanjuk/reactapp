import * as Y from 'yup'
export function createYupSchema(schema, config) {
  const { name, validationType, validations = [] } = config
  if (!Y[validationType]) {
    return schema
  }
  let validator = Y[validationType]()
  validations.forEach((validation) => {
    const { params, type } = validation
    if (!validator[type]) {
      return
    }
    validator = validator[type](...params)
  })
  schema[name] = validator
  return schema
}
