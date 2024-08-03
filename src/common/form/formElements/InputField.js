import React from 'react'
import PropTypes from 'prop-types'
import { default as dayjs } from 'dayjs'

import invalid from '../../../assets/images/invalid.svg'

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
