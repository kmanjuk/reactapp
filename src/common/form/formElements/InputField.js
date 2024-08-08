import React from 'react'
import PropTypes from 'prop-types'
import { default as dayjs } from 'dayjs'
import invalid from '../../../assets/images/invalid.svg'

/**
 * InputField component renders an input field with various configurations.
 * @module form/InputField
 * @description InputField component renders an input field with various configurations.
 * @example
 * const field = { name: 'example', type: 'text', placeholder: 'Enter text' }
 * const errors = {}
 * const register = () => {}
 * const isAdd = true
 * const defaultData = {}
 * return (
 *   <InputField
 *     field={field}
 *     errors={errors}
 *     register={register}
 *     isAdd={isAdd}
 *     defaultData={defaultData}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {Object} field - The field configuration object.
 * @param {string} field.name - The name of the field.
 * @param {string} field.type - The type of the input field.
 * @param {string} field.placeholder - The placeholder text for the input field.
 * @param {boolean} field.hidden - Whether the field should be hidden.
 * @param {boolean} field.disabled - Whether the field should be disabled.
 * @param {boolean} field.defaultValue - The default value of the field.
 * @param {boolean} field.hasPrefix - Whether the field has a prefix.
 * @param {string} field.prefixKey - The key for the prefix value in defaultData.
 * @param {number} field.size - The size of the input field.
 * @param {boolean} field.noValueDisplay - Whether to display no value.
 * @param {boolean} field.noAutocomplete - Whether to disable autocomplete.
 * @param {Array} field.obj - Array of keys to access nested values in defaultData.
 * @param {Object} defaultData - The default data object.
 * @param {Object} errors - The errors object for form validation.
 * @param {boolean} isAdd - Flag indicating if the form is in add mode.
 * @param {function} register - The function to register the input field.
 *
 * @returns {React.Element} The InputField component.
 */
export const InputField = ({ field, errors, register, isAdd, defaultData }) => {
  let defDate = !isAdd && defaultData[field.name]
  let defVal
  if (field.defaultValue) {
    defVal = field.defaultValue
  }
  if (!isAdd) {
    if (field.valFromObj) {
      defVal = defaultData[field.obj[0]][field.obj[1]]
    } else {
      defVal = defaultData[field.name]
    }
  }
  if (!isAdd && field.type === 'date') {
    defDate = dayjs(defDate).format('YYYY-MM-DD')
    defDate = defDate.toString()
  }

  try {
    return (
      <div
        className={`trtui-col-md-${field.size}`}
        style={{ display: field.hidden ? 'none' : 'block' }}
      >
        <label className="trtui-form-label">{field.placeholder}</label>
        {isAdd ? (
          <>
            {field.defaultValue ? (
              <input
                type={field.type}
                className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
                style={{
                  color: '#000000',
                  paddingRight: 'calc(1.5em + 1rem)',
                  backgroundImage: errors[field.name] && `url("${invalid}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                  backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
                }}
                placeholder={field.placeholder}
                {...register(field.name)}
                disabled={field.disabled}
                defaultValue={defVal}
              />
            ) : (
              <input
                type={field.type}
                className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
                style={{
                  color: '#000000',
                  paddingRight: 'calc(1.5em + 1rem)',
                  backgroundImage: errors[field.name] && `url("${invalid}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                  backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
                }}
                placeholder={field.placeholder}
                {...register(field.name)}
                disabled={field.disabled}
              />
            )}

            {errors[field.name] && (
              <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
            )}
          </>
        ) : (
          <>
            <div className="trtui-input-group trtui-has-validation">
              {field.hasPrefix && (
                <span className="trtui-input-group-text">{defaultData[field.prefixKey]}</span>
              )}
              <input
                type={field.type}
                className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
                style={{
                  color: '#000000',
                  paddingRight: 'calc(1.5em + 1rem)',
                  backgroundImage: errors[field.name] && `url("${invalid}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                  backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
                }}
                placeholder={field.placeholder}
                {...register(field.name)}
                defaultValue={field.noValueDisplay ? '' : defDate || defVal}
                autoComplete={field.noAutocomplete ? 'new-password' : ''}
                disabled={field.disabled}
              />
              {errors[field.name] && (
                <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
              )}
            </div>
          </>
        )}
      </div>
    )
  } catch (err) {
    return <div>Error</div>
  }
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  defaultData: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isAdd: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
}
