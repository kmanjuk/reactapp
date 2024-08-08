import React from 'react'
import PropTypes from 'prop-types'
import invalid from '../../../assets/images/invalid.svg'

/**
 * InputFile component renders a file input field with validation and error handling.
 * @module form/InputFile
 * @description InputFile component renders a file input field with validation and error handling.
 * @example
 * const field = { name: 'file', placeholder: 'Upload file', size: 12, hidden: false }
 * const errors = {}
 * const register = () => {}
 * return (
 *   <InputFile
 *     field={field}
 *     errors={errors}
 *     register={register}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field.
 * @param {string} props.field.placeholder - The placeholder text for the input field.
 * @param {number} props.field.size - The size of the input field.
 * @param {boolean} props.field.hidden - Whether the field should be hidden.
 * @param {Object} props.errors - The errors object for form validation.
 * @param {function} props.register - The function to register the input field.
 *
 * @returns {React.Element} The InputFile component.
 */
export const InputFile = ({ field, errors, register }) => {
  try {
    return (
      <div
        className={`trtui-col-md-${field.size} trtui-has-validation`}
        style={{ display: field.hidden ? 'none' : 'block' }}
      >
        <label className="trtui-form-control-label">{field.placeholder}</label>
        <div className="trtui-input-group trtui-has-validation">
          <input
            type="file"
            className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
            style={{
              color: '#000000',
              paddingRight: 'calc(1.5em + 1rem)',
              backgroundImage: errors[field.name] && `url("${invalid}")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right calc(0.375em + 0.25rem) center',
              backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
            }}
            {...register(field.name)}
          />
          {errors[field.name] && (
            <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
          )}
        </div>
      </div>
    )
  } catch (err) {
    return <div>Error</div>
  }
}

InputFile.propTypes = {
  field: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}
