import React from 'react'
import PropTypes from 'prop-types'
import icon1 from '../../../../assets/images/icon1.png'
import icon2 from '../../../../assets/images/icon2.png'
import icon3 from '../../../../assets/images/icon3.png'
import { Form } from '../../../form'

export const Contact3 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="contact3 mini-spacer">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row m-0">
                <div className="col-lg-6">
                  <div
                    className="card-shadow aos-init"
                    data-aos="flip-left"
                    data-aos-duration={1200}
                  >
                    <img src={props.pageData.formBG.formBG} alt="formBG" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-box m-l-30">
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
                <div className="col-lg-12">
                  <div className="card m-t-40">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="card-body d-flex no-block c-detail p-l-0">
                          <div className="m-r-20 align-self-center">
                            <img src={icon1} alt={icon1} />
                          </div>
                          <div className>
                            <h6 className="font-medium">Address</h6>
                            <p className>{props.pageData.address.address}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-body d-flex no-block c-detail">
                          <div className="m-r-20 align-self-center">
                            <img src={icon2} alt={icon2} />
                          </div>
                          <div className>
                            <h6 className="font-medium">Phone</h6>
                            <p className>{props.pageData.phone.phone}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="card-body d-flex no-block c-detail">
                          <div className="m-r-20 align-self-center">
                            <img src={icon3} alt={icon3} />
                          </div>
                          <div className>
                            <h6 className="font-medium">Email</h6>
                            <p className>{props.pageData.email.email}</p>
                          </div>
                        </div>
                      </div>
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

Contact3.propTypes = {
  pageData: PropTypes.object.isRequired,
}
