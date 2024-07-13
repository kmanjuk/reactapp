import React from 'react'
import PropTypes from 'prop-types'
import { Form } from '../../../form'

export const Contact2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className="contact2"
        style={{ backgroundImage: `url(${props.pageData.imageBG.imageBG})` }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div
                className="card card-shadow aos-init"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-40">
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
                  <div className="col-lg-4 bg-image m-0">
                    <div
                      className="detail-box"
                      style={{
                        width: '100%',
                        'background-image': `url(${props.pageData.formBG.formBG})`,
                        'background-size': 'cover',
                      }}
                    >
                      <h5 className="text-white font-light m-b-30">
                        {props.pageData.addressHeader.addressHeader}
                      </h5>
                      <p className="text-white op-7">{props.pageData.address.address}</p>
                      <h5 className="text-white font-light m-b-30 m-t-40">Call Us</h5>
                      <p className="text-white op-7">{props.pageData.phone.phone}</p>
                      <h5 className="text-white font-light m-b-30 m-t-40">Email</h5>
                      <p className="text-white op-7">{props.pageData.email.email}</p>
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

Contact2.propTypes = {
  pageData: PropTypes.object.isRequired,
}
