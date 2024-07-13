import React from 'react'
import PropTypes from 'prop-types'
import { Form } from '../../../form'

export const Contact4 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="bg-info contact4">
        <div className="container">
          {/* Row  */}
          <div className="row">
            <div className="container">
              <div className="col-lg-6 contact-box">
                <div className="aos-init" data-aos="fade-right" data-aos-duration={1200}>
                  {props.isLoggedIn !== true && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        zIndex: '1',
                        margin: '-25px 0 0 -25px',
                      }}
                    >
                      <span
                        role="img"
                        className="btn btn-primary"
                        onClick={() => props.auth.setAuthModal(true)}
                      >
                        Login
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      zIndex: '2',
                      filter: props.isLoggedIn ? '' : 'blur(2px)',
                      WebkitFilter: props.isLoggedIn === true ? '' : 'blur(2px)',
                      pointerEvents: props.isLoggedIn === true ? '' : 'none',
                    }}
                  >
                    <Form
                      schema={props.webSettings['webSettings-contactForm']}
                      isAdd={true}
                      crud={4}
                      setIsAdd={props.setIsAdd}
                      session={props.authData.session}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-image p-r-0">
              <iframe
                title="map"
                src={props.pageData.mapURL.mapURL}
                width="100%"
                height={600}
                frameBorder={0}
                style={{ border: '0' }}
                allowFullScreen
                data-aos="fade-left"
                data-aos-duration={3000}
                className="aos-init"
              />
            </div>
          </div>
          {/* Row  */}
        </div>
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

Contact4.propTypes = {
  pageData: PropTypes.object.isRequired,
}
