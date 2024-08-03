import React from 'react'
import PropTypes from 'prop-types'

import '../../../assets/css/switch.css'

const Checkbox = ({ fnClick, fnChange, checked = false, register, field }) => (
  <label className="toggle-control trtui-mb-5">
    <input
      type="checkbox"
      onClick={(e) => {
        if (fnClick !== undefined) fnClick(e.target.checked)
      }}
      onChange={(e) => {
        if (fnChange !== undefined) fnChange(e.target.checked)
      }}
      checked={checked}
      {...register(field.name)}
    />
    <span className="control"></span>
  </label>
)

export const InputSwitch = ({ field, register, isAdd, defaultData }) => {
  const [switchButton, setSwitchButton] = React.useState(
    isAdd ? field.defaultValue : defaultData[field.name],
  )

  try {
    return (
      <div
        className={`trtui-col-md-${field.size}`}
        style={{ display: field.hidden ? 'none' : 'block' }}
      >
        <label className="trtui-form-label">{field.placeholder}</label>
        <br />
        <Checkbox
          title="Click"
          fnClick={() => setSwitchButton(!switchButton)}
          checked={switchButton}
          register={register}
          field={field}
        />
      </div>
    )
  } catch (err) {
    return <div>Error</div>
  }
}

InputSwitch.propTypes = {
  field: PropTypes.object.isRequired,
  isAdd: PropTypes.bool.isRequired,
  defaultData: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}
Checkbox.propTypes = {
  fnClick: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  fnChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}
