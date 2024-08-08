import React from 'react'
import PropTypes from 'prop-types'

import invalid from '../../../assets/images/invalid.svg'

/**
 * TextArea component renders a customizable textarea input field.
 *
 * @module form/TextArea
 * @description TextArea component renders a customizable textarea input field.
 * @example
 * const field = {
 *   name: 'description',
 *   placeholder: 'Enter description',
 *   size: 6,
 *   hidden: false,
 *   type: 'text'
 * }
 * const errors = {}
 * const register = () => {}
 * const isAdd = true
 * const defaultData = { description: 'Default text' }
 * return (
 *   <TextArea
 *     field={field}
 *     errors={errors}
 *     register={register}
 *     isAdd={isAdd}
 *     defaultData={defaultData}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field.
 * @param {string} props.field.placeholder - The placeholder text for the input field.
 * @param {number} props.field.size - The size of the input field.
 * @param {boolean} props.field.hidden - Whether the field should be hidden.
 * @param {string} props.field.type - The type of the input field.
 * @param {Object} props.errors - The object containing form validation errors.
 * @param {function} props.register - The function to register the input field.
 * @param {boolean} props.isAdd - Whether the form is in add mode.
 * @param {Object} props.defaultData - The default data object.
 *
 * @returns {React.Element} The TextArea component.
 */
export const TextArea = ({ field, errors, register, isAdd, defaultData }) => {
  try {
    return (
      <div
        className={`trtui-col-md-${field.size}`}
        style={{ display: field.hidden ? 'none' : 'block' }}
      >
        <label className="trtui-form-label">{field.placeholder}</label>
        {isAdd ? (
          <>
            <textarea
              type={field.type}
              className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
              placeholder={field.placeholder}
              {...register(field.name)}
              style={{
                paddingRight: 'calc(1.5em + 1rem)',
                backgroundImage: errors[field.name] && `url("${invalid}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
              }}
            ></textarea>
            {errors[field.name] && (
              <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
            )}
          </>
        ) : (
          <>
            <textarea
              type={field.type}
              className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
              placeholder={field.placeholder}
              {...register(field.name)}
              style={{
                paddingRight: 'calc(1.5em + 1rem)',
                backgroundImage: errors[field.name] && `url("${invalid}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
              }}
            >
              {defaultData[field.name]}
            </textarea>
            {errors[field.name] && (
              <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
            )}
          </>
        )}
      </div>
    )
  } catch (err) {
    return <div>Error</div>
  }
}

TextArea.propTypes = {
  field: PropTypes.object.isRequired,
  isAdd: PropTypes.bool.isRequired,
  defaultData: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}
