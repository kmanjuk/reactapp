import React from 'react'
import PropTypes from 'prop-types'

export const Features47 = (props) => {
  try {
    return (
      <div className="spacer feature47">
        <div className="container">
          <div id="feature47-html">
            <div className="row wrap-feature47-box">
              <div className="col-md-6 align-self-center">
                <div className="max-500 m-auto">
                  {' '}
                  <h2 className="title font-bold">{props.pageData.header.header}</h2>
                  <h6 className="subtitle">{props.pageData.text.text}</h6>
                  <ul className="list-block with-underline font-medium m-t-30 m-b-20 text-dark">
                    {props.pageData.childItems.length > 0 &&
                      props.pageData.childItems.map((item, index) => (
                        <li>
                          <i className="sl-icon-check text-success" />{' '}
                          <span>{item.title.title} </span>
                        </li>
                      ))}
                  </ul>
                  <a
                    className="btn btn-info-gradiant btn-md btn-arrow m-t-20 m-b-20"
                    data-bs-toggle="collapse"
                    href="#f47"
                  >
                    <span>
                      {props.pageData.button.button}
                      <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 ms-auto">
                <div
                  className="card card-shadow aos-init"
                  data-aos="flip-up"
                  data-aos-duration={1200}
                >
                  <img className="card-img-top" src={props.pageData.image.image} alt="Image" />
                  <div className="card-body">
                    <div className="p-20">
                      <h3 className="font-light f-47-line">{props.pageData.text2.text2}</h3>
                    </div>
                  </div>
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

Features47.propTypes = {
  pageData: PropTypes.object.isRequired,
}
