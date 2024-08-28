import React from 'react'
import PropTypes from 'prop-types'
import { useCreateCall } from '../../../../lib/api/create'

/**
 * Contact section component for Theme T1.
 *
 * This component renders a contact form with a map, contact information, and a login button for non-logged-in users.
 * It handles form submissions by sending a message through an API call.
 *
 * @module ThemeT1/T1Contact1
 * @description This component renders a contact form with a map, contact information, and a login button for non-logged-in users.
 * It handles form submissions by sending a message through an API call.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {boolean} props.isLoggedIn - Indicates whether the user is logged in.
 * @param {Function} props.setLoginModal - Function to open the login modal.
 * @param {Object} props.pageData - Data for rendering the contact section, including map URL, contact info, and form text.
 * @param {Object} props.envData - Environment data containing API URL for submitting messages.
 * @returns {JSX.Element} The rendered component.
 */
export const T1Contact1 = ({
  isLoggedIn,
  setLoginModal,
  pageData,
  authDetails,
  isLocalEnvironment,
}) => {
  const [successMsg, setSuccessMsg] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const createCallMutation = useCreateCall()

  /**
   * Handles form submission by sending the message to the API.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submit event.
   */
  const sendMessage = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    data['userId'] = authDetails.session.user.userId

    await createCallMutation
      .mutateAsync({
        url: isLocalEnvironment,
        apiEndpoint: 'userMessage',
        data: data,
        messageTitle: 'modSchema.message.title',
        message: 'modSchema.message.message',
        params: '',
        noConfirmation: true,
      })
      .then(() => {
        setSuccessMsg(true)
      })
      .catch(() => setErrorMsg(true))
  }

  return (
    <section className="t1-contact-us t1-section">
      <div className="container">
        <div className="t1-inner">
          <div className="row">
            <div className="col-lg-6">
              <div className="t1-contact-us-left">
                <iframe
                  title="contactMap"
                  src={pageData.content.content.mapUrl}
                  width="100%"
                  height={pageData.content.content.mapHeight}
                  frameBorder={0}
                  style={{ border: '0' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="t1-contact-us-form">
                <h2>{pageData.content.content.header}</h2>
                <p>
                  {pageData.content.content.text}
                  {/* If you have any questions please feel free to contact us. */}
                </p>
                {!isLoggedIn && (
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
                    <span role="img" className="t1-btn t1-btn-primary">
                      Login
                    </span>
                  </div>
                )}

                {successMsg && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Thank you for your message, we&apos;ll get back to you as soon as possible.
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setSuccessMsg(false)}
                      data-testid="closeSuccesMsg"
                    >
                      <span aria-hidden="false">&times;</span>
                    </button>
                  </div>
                )}
                {errorMsg && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Something went wrong, please try again!
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setErrorMsg(false)}
                      data-testid="closeErrorMsg"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}

                <form
                  className="t1-form"
                  onSubmit={(e) => sendMessage(e)}
                  style={{
                    zIndex: '2',
                    filter: isLoggedIn ? '' : 'blur(2px)',
                    WebkitFilter: isLoggedIn ? '' : 'blur(2px)',
                    pointerEvents: isLoggedIn ? '' : 'none',
                  }}
                  data-testid="contactForm"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="t1-form-group">
                        <input type="text" name="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="t1-form-group">
                        <textarea
                          name="message"
                          placeholder="Your Message Here..."
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="t1-form-group t1-login-btn">
                        <button className="t1-btn" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="t1-contact-info">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="t1-single-info">
                <i className="fa fa-phone" />
                <div className="t1-content">
                  <h3>{pageData.content.content.phone}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="t1-single-info">
                <i className="fa fa-map-marker" />
                <div className="t1-content">
                  <h3>{pageData.content.content.address}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="t1-single-info">
                <i className="fa fa-envelope" />
                <div className="t1-content">
                  <h3>{pageData.content.content.email}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Contact1.propTypes = {
  setLoginModal: PropTypes.func.isRequired,
  pageData: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  envData: PropTypes.object.isRequired,
  authDetails: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}
