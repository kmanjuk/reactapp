import React from 'react'
import PropTypes from 'prop-types'
import { useCreateCall } from '../../../../../lib/api/create'

export const Contact1T2 = (props) => {
  const errState = { error: false }

  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const createCallMutation = useCreateCall()
  const authSess = localStorage.getItem('authenticateSession')
    ? JSON.parse(localStorage.getItem('authenticateSession'))
    : null

  const sendMessage = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    data['userId'] = authSess.session.user.userId
    data['appId'] = props.appVariables.REACT_APP_APP_ID
    data['tenantId'] = props.appVariables.REACT_APP_TENANT_ID
    data['orgId'] = props.appVariables.REACT_APP_ORG_ID

    await createCallMutation
      .mutateAsync({
        url: props.appVariables.REACT_APP_API_URL,
        apiEndpoint: 'usermessage',
        data: data, //data,
        messageTitle: 'modSchema.message.title',
        message: 'modSchema.message.message',
        noConfirmation: true,
      })
      .then(() => {
        setSuccessMsg(true)
      })
      .catch(() => setErrorMsg(true))
  }

  try {
    return (
      <div className="theme2-contact1 theme2-spacer">
        <div className="theme2-col-md-12">
          <iframe
            title="contactMap"
            src={props.pageData.content.content.mapURL}
            width="100%"
            height={450}
            frameBorder={0}
            style={{ border: '0' }}
          />
        </div>
        <div className="theme2-container">
          <div className="theme2-row">
            <div className="theme2-container">
              <div className="theme2-spacer">
                <div className="theme2-row theme2-m-0">
                  <div className="theme2-col-lg-7">
                    <div className="theme2-contact-box theme2-p-r-40">
                      {authSess === null && (
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
                            className="theme2-btn theme2-btn-primary"
                            onClick={() => props.setLoginModal(true)}
                          >
                            Login
                          </span>
                        </div>
                      )}

                      <div
                        style={{
                          zIndex: '2',
                          filter: authSess !== null && authSess.session?.user ? '' : 'blur(2px)',
                          WebkitFilter:
                            authSess !== null && authSess.session?.user ? '' : 'blur(2px)',
                          pointerEvents: authSess !== null && authSess.session?.user ? '' : 'none',
                        }}
                      >
                        {/* <Form
													schema={props.webSettings['webSettings-contactForm']}
													isAdd={true}
													crud={4}
													setIsAdd={props.setIsAdd}
													session={props.authData.session}
													appVariables={props.appVariables}
												/> */}
                        {successMsg && (
                          <div
                            className="theme2-alert theme2-alert-success theme2-alert-dismissible theme2-fade theme2-show"
                            role="alert"
                          >
                            Thank you for your message, we'll get back to you as soon as possible.
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                              onClick={() => setSuccessMsg(false)}
                            >
                              <span aria-hidden="false">&times</span>
                            </button>
                          </div>
                        )}
                        {errorMsg && (
                          <div
                            className="theme2-alert theme2-alert-danger theme2-alert-dismissible theme2-fade theme2-show"
                            role="alert"
                          >
                            Something went wrong, please try again!
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                              onClick={() => setErrorMsg(false)}
                            >
                              <span aria-hidden="true">&times</span>
                            </button>
                          </div>
                        )}
                        <form name="contact-form" onSubmit={(e) => sendMessage(e)}>
                          <div className="theme2-contact-form-inner">
                            <div className="theme2-form-group theme2-control-group mb-4">
                              <input
                                type="text"
                                name="subject"
                                id="cf-subject"
                                className="theme2-form-control"
                                style={{
                                  pointerEvents:
                                    authSess !== null && authSess.session?.user ? '' : 'none',
                                }}
                                placeholder="Subject"
                              />
                            </div>
                            <div className="theme2-form-group theme2-control-group mb-4">
                              <textarea
                                name="message"
                                id="cf-message"
                                rows={10}
                                className="theme2-form-control"
                                placeholder="Write message"
                                style={{
                                  pointerEvents:
                                    authSess !== null && authSess.session?.user ? '' : 'none',
                                  height: '160px',
                                }}
                                defaultValue={''}
                              />
                            </div>
                            <div className="theme2-form-group">
                              <input
                                name="btn-submit"
                                id="btn-submit"
                                className="theme2-btn theme2-btn-primary theme2-btn-block theme2-control-group"
                                defaultValue="Submit"
                                type="submit"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="theme2-col-lg-5">
                    <div
                      className="theme2-detail-box theme2-p-40 theme2-bg-info aos-init"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <h2 className="theme2-text-white">
                        {props.pageData.content.content.addressHeader}
                      </h2>
                      <p className="theme2-text-white theme2-m-t-30 theme2-op-8">
                        {props.pageData.content.content.phone}
                        <br /> {props.pageData.content.content.email}
                      </p>
                      <p className="theme2-text-white theme2-op-8">
                        {props.pageData.content.content.address}
                      </p>
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
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Contact1T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}
