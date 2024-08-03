import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import invalid from '../../assets/images/invalid.svg'

export const InputAutocomplete = ({ suggestions = [], field, errors, register }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState('')

  const onChange = (e) => {
    const userInput = e.currentTarget.value

    const filteredSuggestions = suggestions.filter(
      (suggestion) => suggestion['name'].toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    )

    setActiveSuggestion(0)
    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true)
    setUserInput(userInput)
  }

  const onClick = (e) => {
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setUserInput(e.currentTarget.innerText)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setUserInput(filteredSuggestions[activeSuggestion])
      setActiveSuggestion(0)
      setShowSuggestions(false)
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }
      setActiveSuggestion(activeSuggestion - 1)
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }
      setActiveSuggestion(activeSuggestion + 1)
    }
  }

  let suggestionsListComponent

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className

            if (index === activeSuggestion) {
              className = 'suggestion-active'
            }

            return (
              <li className={className} key={suggestion.id} onClick={onClick}>
                {suggestion.name}
              </li>
            )
          })}
        </ul>
      )
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions, you&apos;re on your own!</em>
        </div>
      )
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        style={{
          color: '#000000',
          paddingRight: 'calc(1.5em + 1rem)',
          backgroundImage: errors[field.name] && `url("${invalid}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right calc(0.375em + 0.25rem) center',
          backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
        }}
        onKeyDown={onKeyDown}
        value={userInput}
        {...register(field.name, { onChange: onChange })}
        className={`trtui-form-control ${errors[field.name] && 'trtui-is-invalid'}`}
        autoComplete="off"
      />
      {suggestionsListComponent}
    </Fragment>
  )
}

InputAutocomplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  field: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
}

InputAutocomplete.defaultProps = {
  suggestions: [],
}
