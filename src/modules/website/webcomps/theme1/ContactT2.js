import React from 'react'
import PropTypes from 'prop-types'

import { useCreateCall } from '../../../../lib/api/create'

export const ContactT2 = ({ pageData, authSession, appVariables, setLoginModal }) => {
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
    data['appId'] = appVariables.REACT_APP_APP_ID
    data['tenantId'] = appVariables.REACT_APP_TENANT_ID
    data['orgId'] = appVariables.REACT_APP_ORG_ID

    await createCallMutation
      .mutateAsync({
        url: appVariables.REACT_APP_API_URL,
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
  return (
    <>
      <div
        className="theme1-inner-banner-small theme1-banner-fixed-top-small theme1-bg-fade-overlay theme1-yit-parallax-bg theme1-yit-cover-bg"
        style={{ backgroundImage: `url(${pageData.content.content.headerBg})` }}
      >
        <div className="theme1-container">
          <div className="theme1-row">
            <div className="theme1-col-xl-8 theme1-col-md-8 theme1-col-lg-8 theme1-mx-auto">
              <div className="theme1-inner-banner-content theme1-last-p-none theme1-text-center theme1-white-color-text">
                <h4 className="text-white">{pageData.content.content.headerTitle}</h4>
                <p>{pageData.content.content.headerText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="theme1-section-h-space theme1-section-v-space theme1-xs-space-none">
        <div className="theme1-container-fluid">
          <div className="theme1-yit-feature theme1-style-1 theme1-text-center theme1-last-p-none">
            <div className="theme1-row theme1-no-gutter">
              <div className="theme1-col-xl-3 theme1-col-lg-3 theme1-col-md-6">
                <div className="theme1-yit-feature-item theme1-mt-0 theme1-mb-0 theme1-pad-60-all theme1-pink-color-bg theme1-flex-full-height">
                  <div className="theme1-yit-display-centrize">
                    <div className="theme1-yit-display-v-centrize">
                      <i className="ti-location-pin theme1-icon-medium theme1-mb-20" />
                      <h6 className="theme1-mb-10 text-white">Address</h6>
                      <p>{pageData.content.content.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme1-col-xl-3 theme1-col-lg-3 theme1-col-md-6">
                <div className="theme1-yit-feature-item theme1-mt-0 theme1-mb-0 theme1-pad-60-all theme1-blue-color-bg theme1-flex-full-height">
                  <div className="theme1-yit-display-centrize">
                    <div className="theme1-yit-display-v-centrize">
                      <i className="ti-email theme1-icon-medium theme1-mb-20" />
                      <h6 className="theme1-mb-10 text-white">Email</h6>
                      <a
                        className="theme1-link-white"
                        href={`mailto:${pageData.content.content.email}`}
                      >
                        {pageData.content.content.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme1-col-xl-3 theme1-col-lg-3 theme1-col-md-6">
                <div className="theme1-yit-feature-item theme1-mt-0 theme1-mb-0 theme1-pad-60-all theme1-green-color-bg theme1-flex-full-height">
                  <div className="theme1-yit-display-centrize">
                    <div className="theme1-yit-display-v-centrize">
                      <i className="ti-mobile theme1-icon-medium theme1-mb-20" />
                      <h6 className="theme1-mb-10 text-white">Phone</h6>
                      <a className="theme1-link-white" href={pageData.content.content.phone}>
                        {pageData.content.content.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="theme1-col-xl-3 theme1-col-lg-3 theme1-col-md-6">
                <div className="theme1-yit-feature-item theme1-mt-0 theme1-mb-0 theme1-pad-60-all theme1-indigo-color-bg theme1-flex-full-height">
                  <div className="theme1-yit-display-centrize">
                    <div className="theme1-yit-display-v-centrize">
                      <i className="ti-time theme1-icon-medium theme1-mb-20" />
                      <h6 className="theme1-mb-10 text-white">Child Care Timings</h6>
                      <p>{pageData.content.content.timings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="theme1-section-h-space theme1-section-v-space theme1-xs-space-none"
        id="contact"
      >
        <div className="theme1-container-fluid">
          <div className="theme1-row theme1-no-gutters">
            <div className="theme1-col-lg-6 theme1-col-md-12 theme1-col-xl-6 theme1-mx-auto theme1-align-items-center">
              {!authSession && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    zIndex: '1',
                    margin: '-25px 0 0 -25px',
                  }}
                  onClick={() => setLoginModal(true)}
                >
                  <span role="img" className="theme1-btn theme1-btn-primary">
                    Login
                  </span>
                </div>
              )}
              <div
                className="theme1-yit-cotact-form theme1-common-form theme1-pad-50-all theme1-input-style-1 theme1-light-grey-color-bg"
                style={{
                  zIndex: '2',
                  filter: authSession ? '' : 'blur(2px)',
                  WebkitFilter: authSession ? '' : 'blur(2px)',
                  pointerEvents: authSession ? '' : 'none',
                }}
              >
                {successMsg && (
                  <div
                    className="theme1-alert theme1-alert-success theme1-alert-dismissible theme1-fade theme1-show"
                    role="alert"
                  >
                    Thank you for your message, we'll get back to you as soon as possible.
                    <button
                      type="button"
                      className="theme1-close"
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
                    className="theme1-alert theme1-alert-danger theme1-alert-dismissible theme1-fade theme1-show"
                    role="alert"
                  >
                    Something went wrong, please try again!
                    <button
                      type="button"
                      className="theme1-close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setErrorMsg(false)}
                    >
                      <span aria-hidden="true">&times</span>
                    </button>
                  </div>
                )}
                <form name="contact-form" onSubmit={(e) => sendMessage(e)}>
                  <div className="theme1-contact-form-inner">
                    <div className="theme1-form-group theme1-control-group">
                      <input
                        type="text"
                        name="subject"
                        id="cf-subject"
                        className="theme1-form-control"
                        style={{
                          pointerEvents: authSession ? '' : 'none',
                        }}
                        placeholder="Subject"
                      />
                    </div>
                    <div className="theme1-form-group theme1-control-group">
                      <textarea
                        name="message"
                        id="cf-message"
                        rows={10}
                        className="theme1-form-control"
                        placeholder="Write message"
                        style={{
                          pointerEvents: authSession ? '' : 'none',
                          height: '160px',
                        }}
                        defaultValue={''}
                      />
                    </div>
                    <div className="theme1-form-group">
                      <input
                        name="btn-submit"
                        id="btn-submit"
                        className="theme1-btn theme1-btn-rounded theme1-btn-block theme1-control-group"
                        defaultValue="Submit"
                        type="submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="theme1-col-lg-6 theme1-col-md-12 theme1-col-xl-6">
              <div className="theme1-flex-full-height">
                <div
                  id="demo-map"
                  className="theme1-google-map theme1-flex-full-height theme1-parallax-bg"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <iframe
                    title="contactMap"
                    src={pageData.content.content.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ContactT2.propTypes = {
  pageData: PropTypes.object.isRequired,
}
