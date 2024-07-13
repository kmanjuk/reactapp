import React from 'react'
import PropTypes from 'prop-types'

export const Features41 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature41">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              {' '}
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature41-html">
            {/* Row  */}
            <div className="row m-t-40 wrap-feature41-box">
              {/* Column */}
              <div className="col-lg-4 col-md-5">
                <ul className="nav vtab f41-tab">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <li key={index} className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          href="#home"
                          aria-controls="home"
                          aria-expanded="true"
                        >
                          <div className="display-5 t-icon">
                            <i className={`icon-${item.icon.icon} `} />
                          </div>
                          <div>
                            <h5 className="m-b-0">{item.title.title}</h5>
                            <h6 className="subtitle">{item.text3.text3}</h6>
                          </div>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              {/* Column */}
              {/* Column */}
              <div className="col-lg-7 col-md-7 ms-auto">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {' '}
                    <img
                      src={props.pageData.image.image}
                      alt="Image"
                      className="rounded img-fluid"
                    />
                    <p className="m-t-40">{props.pageData.text2.text2}</p>{' '}
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f41"
                    >
                      <span>
                        {props.pageData.button.button}
                        <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {' '}
                    <img
                      src="assets/images/features/feature41/img2.jpg"
                      alt="trt"
                      className="rounded img-fluid"
                    />
                    <p className="m-t-40">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>{' '}
                    <a
                      className="btn btn-success-gradiant text-white btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f41"
                    >
                      <span>
                        View Feature41 code <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="dropdown1"
                    role="tabpanel"
                    aria-labelledby="dropdown1-tab"
                  >
                    {' '}
                    <img
                      src="assets/images/features/feature41/img3.jpg"
                      alt="trt"
                      className="rounded img-fluid"
                    />
                    <p className="m-t-40">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>{' '}
                    <a
                      className="btn btn-success-gradiant text-white btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f41"
                    >
                      <span>
                        View Feature41 code <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                  <div className="tab-pane fade" id="ssd" role="tabpanel" aria-labelledby="ssd-tab">
                    <img
                      src="assets/images/features/feature41/img4.jpg"
                      alt="trt"
                      className="rounded img-fluid"
                    />
                    <p className="m-t-40">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>{' '}
                    <a
                      className="btn btn-success-gradiant text-white btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f41"
                    >
                      <span>
                        View Feature41 code <i className="ti-arrow-right" />
                      </span>
                    </a>
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

Features41.propTypes = {
  pageData: PropTypes.object.isRequired,
}
