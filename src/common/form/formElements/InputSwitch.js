import React from 'react'
import PropTypes from 'prop-types'

import '../../../assets/css/switch.css'

/**
 * Checkbox component renders a customizable checkbox input.
 *
 * @module form/InputSwitch/Checkbox
 * @description Checkbox component renders a customizable checkbox input.
 * @example
 * const fnClick = (checked) => console.log(checked);
 * const fnChange = (checked) => console.log(checked);
 * const field = { name: 'exampleField' };
 * const register = () => {};
 * return (
 *   <Checkbox
 *     fnClick={fnClick}
 *     fnChange={fnChange}
 *     checked={true}
 *     register={register}
 *     field={field}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {function} props.fnClick - Function to handle click events.
 * @param {function} props.fnChange - Function to handle change events.
 * @param {boolean} props.checked - Whether the checkbox is checked.
 * @param {function} props.register - Function to register the input field.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field.
 *
 * @returns {React.Element} The Checkbox component.
 */
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

Checkbox.propTypes = {
  fnClick: PropTypes.func.isRequired,
  field: PropTypes.object.isRequired,
  fnChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

/**
 * InputSwitch component renders a toggle switch input.
 *
 * @module form/InputSwitch
 * @description InputSwitch component renders a toggle switch input.
 * @example
 * const field = {
 *   name: 'switchField',
 *   placeholder: 'Toggle Switch',
 *   size: 6,
 *   hidden: false,
 *   defaultValue: false
 * }
 * const register = () => {}
 * const isAdd = true
 * const defaultData = {}
 * return (
 *   <InputSwitch
 *     field={field}
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
 * @param {boolean} props.field.defaultValue - The default value of the switch.
 * @param {boolean} props.isAdd - Whether the form is in add mode.
 * @param {Object} props.defaultData - The default data object.
 * @param {function} props.register - The function to register the input field.
 *
 * @returns {React.Element} The InputSwitch component.
 */
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
