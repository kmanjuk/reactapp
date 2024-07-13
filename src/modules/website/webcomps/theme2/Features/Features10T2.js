import React from 'react'
import PropTypes from 'prop-types'

export const Features10 = (props) => {
  try {
    return (
      <div className="feature10">
        <div id="feature10-html">
          <div className="row">
            {/* column  */}
            {props.pageData.childItems.length > 0 &&
              props.pageData.childItems.map((item, index) => (
                <div key={index} className={`col-lg-${item.sizelg.sizelg} bg-megna`}>
                  <div className="wrap-feature10-box text-center">
                    <div className="display-4 m-b-20">
                      {/* <i className={item.icon.icon}/> */}
                      <i className={`icon-${item.icon.icon}`} />
                    </div>
                    <small className="op-8">{item.subtitle.subtitle}</small>
                    <h4 className="box-title">{item.title.title}</h4>
                    <p className="op-8">{item.text.text}</p>
                    <a
                      className="btn btn-outline-light btn-md btn-arrow"
                      data-bs-toggle="collapse"
                      href={item.buttonLink.buttonLink}
                    >
                      <span>
                        {item.buttonname.buttonname} <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
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

Features10.propTypes = {
  pageData: PropTypes.object.isRequired,
}
