import React from 'react'
import PropTypes from 'prop-types'

import invalid from '../../assets/images/invalid.svg'

export const InputFile = ({ field, errors, register }) => {
  try {
    return (
      <div
        className={`trtui-col-md-${field.size} trtui-has-validation`}
        style={{ display: field.hidden ? 'none' : 'block' }}
      >
        <label className="trtui-form-control-label">{field.placeholder}</label>
        <div className="trtui-input-group trtui-has-validation">
          {/* <label className="trtui-input-group-text" htmlFor="inputGroupFile01">Upload</label> */}
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
