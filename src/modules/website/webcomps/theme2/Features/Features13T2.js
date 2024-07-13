import React from 'react'
import PropTypes from 'prop-types'

export const Features13 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature13">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature13-html">
            {/* Row  */}
            <div className="row m-t-40">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div key={index} className={`col-lg-${item.sizelg.sizelg} wrap-feature13-box`}>
                    <div
                      className="card card-shadow aos-init"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <ul className="img-inline">
                        <li className="half-width">
                          <img
                            src={item.image.image}
                            alt="Featureimage"
                            className="img-responsive rounded"
                          />
                        </li>
                        <li className="p-20 half-width">
                          <h5 className="font-medium m-t-10">
                            <a href={item.link.link} className="linking">
                              {item.title.title} <i className="ti-arrow-right" />
                            </a>
                          </h5>
                          <p className="m-t-20">{item.text.tex}</p>
                        </li>
                      </ul>
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

Features13.propTypes = {
  pageData: PropTypes.object.isRequired,
}
