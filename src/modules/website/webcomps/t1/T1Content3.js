import React from 'react'
import PropTypes from 'prop-types'

/**
 * Content section displaying "why choose us" information with text and an image.
 *
 * This component is used to present reasons for choosing the service or product.
 * It includes a main header and text, with additional header, text, and an image on the right side.
 *
 * @module ThemeT1/T1Content3
 * @description This component is used to present reasons for choosing the service or product.
 * It includes a main header and text, with additional header, text, and an image on the right side.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the content section.
 * @param {Object} props.pageData.content - Content of the section.
 * @param {Object} props.pageData.content.content - Details of the section content.
 * @param {string} props.pageData.content.content.header1 - The main header text for the section.
 * @param {string} props.pageData.content.content.text1 - The main text content of the section.
 * @param {string} props.pageData.content.content.header2 - The secondary header text for the section.
 * @param {string} props.pageData.content.content.text2 - The secondary text content of the section.
 * @param {string} props.pageData.content.content.image - The URL of the image to be displayed on the right side.
 * @returns {JSX.Element} The rendered component.
 */
export const T1Content3 = ({ pageData }) => {
  return (
    <section className="t1-why-choose t1-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title" style={{ padding: '0 25px' }}>
              <h2>{pageData.content.content.header1}</h2>
              <p>{pageData.content.content.text1}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="t1-choose-left">
              <h3>{pageData.content.content.header2}</h3>
              <p>{pageData.content.content.text2}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="t1-choose-right"
              style={{
                backgroundImage: `url(${pageData.content.content.image})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content3.propTypes = {
  pageData: PropTypes.object.isRequired,
}
