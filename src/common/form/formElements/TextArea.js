import React from 'react'
import PropTypes from 'prop-types'

import invalid from '../../assets/images/invalid.svg'

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
