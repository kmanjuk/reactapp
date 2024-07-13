import React from 'react'
import PropTypes from 'prop-types'

export const Features16 = (props) => {
  try {
    return (
      <div className="feature16">
        <div id="feature16-html">
          <div className="row wrap-feature-16">
            <div
              className="col-lg-6"
              style={{
                background: `url(${props.pageData.image.image}) center`,
                'background-size': 'cover',
              }}
            ></div>
            <div className="col-lg-6 bg-info-gradiant text-white">
              <div className="with-text">
                <h2 className="text-white m-t-30 m-b-30">{props.pageData.header.header}</h2>
                <p className="op-7">{props.pageData.text.text}</p>

                <ul className="list-block m-b-30">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <li>
                        <i key={index} className="sl-icon-check" /> <span>{item.text.text}</span>
                      </li>
                    ))}
                </ul>
                <a
                  href={props.pageData.buttonLink.buttonLink}
                  className="btn btn-outline-light btn-md btn-arrow"
                  data-bs-toggle="collapse"
                >
                  <span>
                    {props.pageData.button.button}
                    <i className="ti-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features16.propTypes = {
  pageData: PropTypes.object.isRequired,
}
