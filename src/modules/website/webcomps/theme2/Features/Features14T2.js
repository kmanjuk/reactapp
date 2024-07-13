import React from 'react'
import PropTypes from 'prop-types'

export const Features14 = (props) => {
  try {
    return (
      <div className="spacer feature14">
        <div className="container">
          <div id="feature14-html">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="m-t-20 m-b-30">{props.pageData.header.header}</h2>
                <p>{props.pageData.text.text}</p>
                <p>{props.pageData.text2.text2}</p>
              </div>
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div
                    key={index}
                    className={`col-lg-${item.sizelg.sizelg} col-md-${item.sizemd.sizemd} wrap-feature14-box`}
                  >
                    <div className="aos-init" data-aos="flip-left" data-aos-duration={1200}>
                      <img
                        className="rounded img-responsive"
                        src={item.image.image}
                        alt="FeatureImage"
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

Features14.propTypes = {
  pageData: PropTypes.object.isRequired,
}
