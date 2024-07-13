import React from 'react'
import PropTypes from 'prop-types'

export const Features38 = (props) => {
  try {
    return (
      <div className="feature37 wrap-feature38-box">
        <div id="feature38-html">
          <div className="row bg-orange">
            <div className="container">
              <div className="col-lg-6 po-absolute">
                {' '}
                <img src={props.pageData.image.image} alt="Image" className="img-fluid" />
              </div>
              <div className="container">
                <div className="row spacer">
                  <div className="col-lg-6">
                    <div className="p-20">
                      {' '}
                      <h2 className="title text-white text-uppercase">
                        {props.pageData.header.header}
                      </h2>
                      <p className="text-white op-8">
                        {props.pageData.text.text}{' '}
                        <a
                          className="linking text-white font-medium"
                          data-bs-toggle="collapse"
                          href="#f38"
                        >
                          {props.pageData.learnmore.learnmore} <i className="ti-arrow-right" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card card-shadow">
              <div className="container p-20">
                <div className="row">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div className={`col-lg-${item.sizelg.sizelg} col-md-4`}>
                        <div className="d-flex no-block m-t-10 m-b-10">
                          <div className="display-4 m-r-20">
                            <i className={`icon-${item.icon.icon} text-success-gradiant `} />
                          </div>
                          <div className>
                            <h2 className="m-b-0 font-light">{item.percentage.percentage}</h2>
                            <h6 className="subtitle">{item.subtitle.subtitle}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
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

Features38.propTypes = {
  pageData: PropTypes.object.isRequired,
}
