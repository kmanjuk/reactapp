import React from 'react'
import PropTypes from 'prop-types'

/**
 * Content section component for Theme T1.
 *
 * This component displays a section with a title and a paragraph of text.
 * It uses data from `pageData` to populate the header and text content.
 *
 * @module ThemeT1/T1Content1
 * @description This component displays a section with a title and a paragraph of text.
 * It uses data from `pageData` to populate the header and text content.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the content section, including header and text.
 * @returns {JSX.Element} The rendered component.
 */
export const T1Content1 = ({ pageData }) => {
  return (
    <section className="t1-Feautes t1-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title" style={{ padding: '0' }}>
              <h2 className="t1-why-choose t1-choose-left">{pageData.content.content.header}</h2>
              <hr />
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content1.propTypes = {
  pageData: PropTypes.object.isRequired,
}
