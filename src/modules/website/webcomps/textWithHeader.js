import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const TextWithHeader = ({ pageData }) => {
  const queryParams = new URLSearchParams(window.location.search)
  const editMode = queryParams.get('edit')
  const authSession = localStorage.getItem('authenticateSession') || null
  const [text, setText] = React.useState(pageData.content.content)
  const [isCopied, setIsCopied] = React.useState(false)
  const editorTools = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  }
  const setTextToCopy = (data) => {
    setIsCopied(false)
    let processData = data
    processData = processData.replaceAll('"', "'")
    setText(processData)
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
  }
  return (
    <div className="container-fluid">
      {editMode && JSON.parse(authSession).role === 'AppAdmin' ? (
        <>
          <div className="text-center">
            <button
              onClick={copyToClipboard}
              className={`btn btn-${isCopied ? 'success' : 'primary'}`}
            >
              {isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
            </button>
          </div>
          <ReactQuill
            theme="snow"
            onChange={(content, delta, source, editor) => setTextToCopy(editor.getHTML())}
            modules={editorTools}
            value={text}
          />
        </>
      ) : (
        <>{parse(text)}</>
      )}
    </div>
  )
}

TextWithHeader.propTypes = {
  pageData: PropTypes.object.isRequired,
}
