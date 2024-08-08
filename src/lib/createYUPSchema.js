import * as Y from 'yup'

/**
 * Creates a Yup validation schema based on the provided configuration.
 *
 * This function dynamically builds and adds validation rules to a Yup schema based on the given configuration.
 *
 * @param {Object} schema - The Yup schema object to which validations will be added.
 * @param {Object} config - Configuration object for defining the validation rules.
 * @param {string} config.name - The name of the schema field to which the validator will be assigned.
 * @param {string} config.validationType - The type of validation to apply (e.g., 'string', 'number').
 * @param {Array<Object>} [config.validations=[]] - An array of validation rules to apply. Each rule should be an object with:
 *   @param {string} type - The type of validation method to call on the validator (e.g., 'min', 'max').
 *   @param {Array} params - Parameters for the validation method.
 *
 * @returns {Object} The updated Yup schema with the added validation rules.
 *
 * @example
 * const schema = {};
 * const config = {
 *   name: 'age',
 *   validationType: 'number',
 *   validations: [
 *     { type: 'min', params: [18] },
 *     { type: 'max', params: [65] }
 *   ]
 * };
 * const updatedSchema = createYupSchema(schema, config);
 * // updatedSchema will now include the 'age' field with validation rules.
 */
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
