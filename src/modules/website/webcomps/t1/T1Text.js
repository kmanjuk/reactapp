import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

/**
 * Renders a text section for the T1 theme.
 *
 * @module ThemeT1/T1Text
 * @description Renders a text section for the T1 theme.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the text section.
 * @param {Object} props.pageData.content - Content data for the page.
 * @param {Object} props.pageData.content.content - Content data for the text section.
 * @param {string} props.pageData.content.content.header - Header for the text section.
 * @param {string} props.pageData.content.content.text - HTML text for the text section.
 * @returns {JSX.Element} The rendered text section.
 */
export const T1Text = ({ pageData }) => {
  return (
    <section className="t1-news-single section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-12">
                <div className="t1-single-main">
                  <h1 className="t1-news-title">{pageData.content.content.header}</h1>
                  <div className="t1-news-text">{parse(pageData.content.content.text)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Text.propTypes = {
  /**
   * Data for rendering the text section.
   */
  pageData: PropTypes.shape({
    content: PropTypes.shape({
      content: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
