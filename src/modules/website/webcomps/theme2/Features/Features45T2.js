import React from 'react'
import PropTypes from 'prop-types'

export const Features45 = (props) => {
  try {
    return (
      <div className="spacer feature45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div className="wrap-feature45-box">
            <div className="row">
              <div className="col-lg-12">
                {/* Tabs */}
                <nav className="nav f45-tab" id="myTab4">
                  {/* Tabs */}
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <a
                        key={index}
                        className="nav-item nav-link active"
                        id="wp-tab"
                        data-bs-toggle="tab"
                        href="#wp-hos"
                        aria-expanded="true"
                      >
                        <i className="hidden-sm-up icon-Monitor-4" />{' '}
                        <span className="hidden-sm-down">{item.title.title}</span>
                      </a>
                    ))}
                  {/* Tabs */}

                  {/* Tabs */}
                </nav>
                {/* Tabs content */}
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="wp-hos"
                    role="tabpanel"
                    aria-labelledby="wp-tab"
                  >
                    <div className="row">
                      <div className="col-lg-5 m-t-40">
                        <span className="label label-danger label-rounded">
                          {props.pageData.label.label}
                        </span>
                        <h3 className="title">{props.pageData.title1.title1}</h3>
                        <h6 className="subtitle">{props.pageData.subtitle.subtitle}</h6>
                      </div>
                      <div className="col-lg-6 ms-auto m-t-40">
                        <img
                          src={props.pageData.image.image}
                          className="img-fluid rounded"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*  */}
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

Features45.propTypes = {
  pageData: PropTypes.object.isRequired,
}
