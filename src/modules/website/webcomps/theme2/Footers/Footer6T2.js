import React from 'react'
import PropTypes from 'prop-types'

export const Footer6 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="footer6-html">
        <footer className="footer6 bg-inverse spacer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="d-flex no-block m-b-10 text-white">
                  <div className="display-7 m-r-20 ">
                    <i className="icon-Phone-2" />
                  </div>
                  <div className="info">
                    <span className="db m-t-5">{props.pageData.phone.phone}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex no-block m-b-10">
                  <div className="display-7 m-r-20 text-white">
                    <i className="icon-Mail" />
                  </div>
                  <div className="info">
                    <a
                      href={`mailto:${props.pageData.email.email}`}
                      className="db white-link m-t-5"
                    >
                      {props.pageData.email.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ms-auto">
                <div className="ms-auto round-social dark">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1SocialLinks' && (
                        <a
                          key={linkIndex}
                          href={link.link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fa fa-${link.icon.icon}`} />
                        </a>
                      ),
                  )}
                </div>
              </div>
              <div className="col-md-12 b-t m-t-40">
                <div className="p-t-20">{props.pageData.copyright.copyright}</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Footer6.propTypes = {
  pageData: PropTypes.object.isRequired,
}
