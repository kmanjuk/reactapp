import React from 'react'
import PropTypes from 'prop-types'

export const Features8 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature8">
        <div className="container">
          <div id="feature8-html">
            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-6">
                <small className="text-info">{props.pageData.subtext.subtext}</small>
                <h3>{props.pageData.header.header}</h3>
                <p>{props.pageData.text.text}</p>

                <ul className="list-block m-b-30">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <li key={item}>
                        <i className="sl-icon-check text-info"></i>
                        {item.text.text}
                      </li>
                    ))}
                </ul>
              </div>
              {/* Column */}

              <div className="col-lg-6">
                <div className="p-20">
                  <img
                    src={props.pageData.image.image}
                    alt="Featureimage"
                    className="img-responsive img-shadow aos-init"
                    data-aos="flip-right"
                    data-aos-duration={1200}
                  />
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

Features8.propTypes = {
  pageData: PropTypes.object.isRequired,
}
