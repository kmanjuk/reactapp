import React from 'react'
import PropTypes from 'prop-types'

export const Features7 = (props) => {
  try {
    return (
      <div className="spacer feature7">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature7-html">
            {/* Row  */}
            <div className="row m-t-40 justify-content-center">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div
                    key={index}
                    className={`col-lg-${item.sizelg.sizelg} col-md-${item.sizemd.sizemd} wrap-feature7-box`}
                  >
                    <div className="aos-init" data-aos="flip-left" data-aos-duration={1200}>
                      <img
                        className="rounded img-responsive"
                        src={item.image.image}
                        alt="Featureimage"
                      />
                      <div className="m-t-30">
                        <h5 className="font-medium">{item.title.title}</h5>
                        <p className="m-t-20">{item.text.text}</p>
                        <a href={item.link.link} className="linking">
                          {item.linkText.linkText} <i className="ti-arrow-right" />
                        </a>
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

Features7.propTypes = {
  pageData: PropTypes.object.isRequired,
}
