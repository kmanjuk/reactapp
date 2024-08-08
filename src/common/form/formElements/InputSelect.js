import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { useController } from 'react-hook-form'

import invalid from '../../../assets/images/invalid.svg'
import InputAutocomplete from './inputAutocomplete'

/**
 * InputSelect component renders a select input field with optional autocomplete functionality.
 * It supports both standard and asynchronous loading of options.
 *
 * @module form/InputSelect
 * @description InputSelect component renders a select input field with optional autocomplete functionality.
 * @example
 * const field = {
 *   name: 'selectField',
 *   placeholder: 'Choose an option',
 *   size: 6,
 *   hidden: false,
 *   isAutocomplete: false,
 *   optionArrayDependency: [],
 *   valFromObjOfParentData: false,
 *   valFromObj: false,
 *   optionAPIDependencyChild: false,
 *   optionAPIDependency: false
 * }
 * const errors = {}
 * const register = () => {}
 * const control = {}
 * const mainData = {}
 * const defaultData = {}
 * const parentData = {}
 * return (
 *   <InputSelect
 *     field={field}
 *     errors={errors}
 *     register={register}
 *     control={control}
 *     mainData={mainData}
 *     defaultData={defaultData}
 *     parentData={parentData}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.field - The field configuration object.
 * @param {string} props.field.name - The name of the field.
 * @param {string} props.field.placeholder - The placeholder text for the input field.
 * @param {number} props.field.size - The size of the input field.
 * @param {boolean} props.field.hidden - Whether the field should be hidden.
 * @param {boolean} props.field.isAutocomplete - Whether the field should use autocomplete.
 * @param {Array} props.field.optionArrayDependency - Array of options for the select field.
 * @param {boolean} props.field.valFromObjOfParentData - Whether to get values from parent data.
 * @param {boolean} props.field.valFromObj - Whether to get values from main data.
 * @param {boolean} props.field.optionAPIDependencyChild - API dependency for child options.
 * @param {boolean} props.field.optionAPIDependency - API dependency for options.
 * @param {Object} props.errors - The errors object for form validation.
 * @param {function} props.register - The function to register the input field.
 * @param {Object} props.control - The control object from react-hook-form.
 * @param {Object} props.mainData - The main data object.
 * @param {Object} props.defaultData - The default data object.
 * @param {Object} props.parentData - The parent data object.
 *
 * @returns {React.Element} The InputSelect component.
 */
export const InputSelect = ({
  field,
  errors,
  register,
  control,
  mainData,
  defaultData,
  parentData,
}) => {
  const {
    field: { value: fieldValue, onChange: fieldOnChange, ...restField },
  } = useController({ name: field.name, control })

  const options = [
    { id: 1, value: 'chocolate', name: 'Chocolate' },
    { id: 2, value: 'strawberry', name: 'Strawberry' },
    { id: 3, value: 'vanilla', name: 'Vanilla' },
  ]

  try {
    if (field.isAutocomplete) {
      const searchOptions = []
      field.optionAPIDependency &&
        JSON.parse(localStorage.getItem('authent')).state.dependeciesFormAPIS[
          field.compOptionAPIDependency
        ]?.formData.map((option) =>
          searchOptions.push({
            value: option[field.compId],
            label: option[field.compName],
          }),
        )
      return (
        <div
          className={`trtui-form-group trtui-col-md-${field.size} trtui-has-validation`}
          style={{ display: field.hidden ? 'none' : 'block' }}
        >
          <label className="trtui-form-control-label">{field.placeholder}</label>
          <Select
            className="select-input"
            placeholder={field.placeholder}
            isClearable
            options={searchOptions}
            value={fieldValue ? searchOptions.find((x) => x.value === fieldValue) : fieldValue}
            onChange={(option) => fieldOnChange(option ? option.value : option)}
            {...restField}
          />
          {errors[field.name] && (
            <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
          )}
        </div>
      )
    } else {
      return (
        <div
          className={`trtui-form-group trtui-col-md-${field.size} trtui-has-validation`}
          style={{ display: field.hidden ? 'none' : 'block' }}
        >
          <label className="trtui-form-control-label">{field.placeholder}</label>
          {field.isAutocomplete ? (
            <InputAutocomplete
              register={register}
              field={field}
              errors={errors}
              suggestions={options}
            />
          ) : (
            <select
              className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
              style={{
                paddingRight: 'calc(1.5em + 1rem)',
                backgroundImage: errors[field.name] && `url("${invalid}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right calc(0.375em + 0.25rem) center',
                backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
              }}
              {...register(field.name)}
              defaultValue={defaultData ? defaultData[field.name] : null}
            >
              <option>Select {field.placeholder}...</option>
              {field.optionArrayDependency &&
                field.compOptionArrayDependency.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.id}>
                    {option.name}
                  </option>
                ))}
              {field.valFromObjOfParentData &&
                parentData[field.obj[0]] &&
                parentData[field.obj[0]].map((option, optionIndex) => (
                  <option key={optionIndex} value={option[field.compId]}>
                    {option[field.obj[1]]}
                  </option>
                ))}
              {field.valFromObj &&
                mainData[field.obj[0]] &&
                mainData[field.obj[0]].map((option, optionIndex) => (
                  <option key={optionIndex} value={option[field.compId]}>
                    {option[field.obj[1]]}
                  </option>
                ))}
              {field.optionAPIDependencyChild &&
                JSON.parse(localStorage.getItem('authent')).state.dependeciesFormAPIS[
                  field.compOptionAPIDependencyChild
                ]?.formData.map((option, optionIndex) => (
                  <option key={optionIndex} value={option[field.childData][field.compId]}>
                    {option[field.childData][field.compName]}
                  </option>
                ))}
              {field.optionAPIDependency &&
                JSON.parse(localStorage.getItem('authent')).state.dependeciesFormAPIS[
                  field.compOptionAPIDependency
                ]?.formData.map((option, optionIndex) => (
                  <option key={optionIndex} value={option[field.compId]}>
                    {option[field.compName]}
                  </option>
                ))}
            </select>
          )}
          {errors[field.name] && (
            <div className="trtui-invalid-feedback">{errors[field.name].message}</div>
          )}
        </div>
      )
    }
  } catch (err) {
    return <div>Error</div>
  }
}

InputSelect.propTypes = {
  field: PropTypes.object.isRequired,
  defaultData: PropTypes.object.isRequired,
  parentData: PropTypes.object.isRequired,
  mainData: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}
