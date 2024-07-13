import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const Text = ({ pageData }) => {
  const queryParams = new URLSearchParams(window.location.search)
  const editMode = queryParams.get('edit')
  return editMode ? (
    <ReactQuill theme="snow" value={pageData.text.text} />
  ) : (
    <div>{pageData.text.text}</div>
  )
}

Text.propTypes = {
  pageData: PropTypes.object.isRequired,
}
