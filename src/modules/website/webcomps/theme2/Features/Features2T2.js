import React from 'react'
import PropTypes from 'prop-types'

export const Features2 = (props) => {
  try {
    return (
      <div className="spacer feature2">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature2-html">
            {/* Row  */}
            <div className="row m-t-40 justify-content-center">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div
                    key={index}
                    className={`col-lg-${item.sizelg.sizelg} col-md-${item.sizemd.sizemd} wrap-feature2-box`}
                  >
                    <div
                      className="card card-shadow aos-init aos-animate"
                      data-aos="flip-left"
                      data-aos-duration={1200}
                    >
                      <img className="card-img-top" src={item.image.image} alt="Feature" />
                      <div className="card-body text-center">
                        <h5 className="font-medium">{item.title.title}</h5>
                        <p className="m-t-20">{item.text.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

Features2.propTypes = {
  pageData: PropTypes.object.isRequired,
}
