import React from 'react'
import PropTypes from 'prop-types'

export const Features19 = (props) => {
  try {
    return (
      <div className="spacer feature19 p-b-0">
        <div className="container">
          {/* row  */}
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
              <div id="feature19-html">
                <div className="row text-inverse">
                  <div className="col-md-6 m-t-30">
                    <ul className="list-block">
                      {props.pageData.childItems.length > 0 &&
                        props.pageData.childItems.map((item, index) => (
                          <li>
                            <i key={index} className={`sl-icon-${item.icon.icon} font-20`} />{' '}
                            <span>{item.text.text}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="col-md-6 m-t-30">
                    <ul className="list-block">
                      {props.pageData.features.length > 0 &&
                        props.pageData.features.map((fitem, fIndex) => (
                          <li>
                            <i key={fIndex} className={`sl-icon-${fitem.ficon.ficon} font-20`} />{' '}
                            <span>{fitem.ftitle.ftitle}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-t-40 m-b-30">
                  <a
                    className="btn btn-info-gradiant btn-md btn-arrow"
                    data-bs-toggle="collapse"
                    href="#f19"
                  >
                    <span>
                      {props.pageData.button.button} <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src={props.pageData.image.image}
                alt="FeatureImage"
                data-aos="fade-up"
                data-aos-duration={3000}
                data-aos-offset={500}
                className="aos-init"
              />
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

Features19.propTypes = {
  pageData: PropTypes.object.isRequired,
}
