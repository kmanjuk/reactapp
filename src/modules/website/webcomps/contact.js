import React from 'react'
import './contact.css'
import { useCreateCall } from '../../../lib/api/create'

export const Contact = ({ isLoggedIn, setLoginModal, pageData, authSession, appVariables }) => {
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
    <div style={{ paddingTop: '70px' }}>
      <div>
        <iframe
          title="contactMap"
          src={pageData.mapUrl.mapUrl}
          width="100%"
          height={pageData.mapHeight.mapHeight}
          frameBorder={0}
          style={{ border: '0' }}
        />
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left-side">
            <div className="contact-address contact-details">
              <i className="fa fa-map-marker" />
              <div className="contact-topic">Address</div>
              <div className="contact-text-one">{pageData.address1.address1}</div>
              <div className="contact-text-two">{pageData.address2.address2}</div>
            </div>
            <div className="phone contact-details">
              <i className="fa fa-phone" />
              <div className="contact-topic">Phone</div>
              <div className="contact-text-one">{pageData.phone1.phone1}</div>
              <div className="contact-text-two">{pageData.phone2.phone2}</div>
            </div>
            <div className="email contact-details">
              <i className="fa fa-envelope" />
              <div className="contact-topic">Email</div>
              <div className="contact-text-one">{pageData.email.email}</div>
            </div>
          </div>
          <div className="contact-right-side">
            <div className="contact-topic-text">Send us a message</div>
            <p>You can send me message from here. It's our pleasure to help you.</p>
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
                <span role="img" className="btn btn-primary">
                  Login
                </span>
              </div>
            )}
            <div
              style={{
                zIndex: '2',
                filter: authSession ? '' : 'blur(2px)',
                WebkitFilter: authSession ? '' : 'blur(2px)',
                pointerEvents: authSession ? '' : 'none',
              }}
            >
              {successMsg && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
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
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
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
              <form id="contact-form" onSubmit={(e) => sendMessage(e)}>
                <div className="contact-input-box">
                  <input
                    type="text"
                    name="subject"
                    style={{
                      pointerEvents: authSession ? '' : 'none',
                    }}
                    placeholder="Subject"
                  />
                </div>
                <div className="contact-input-box">
                  <textarea
                    name="message"
                    rows={10}
                    placeholder="Write message"
                    style={{
                      pointerEvents: authSession ? '' : 'none',
                      height: '160px',
                    }}
                    defaultValue={''}
                  />
                </div>
                <div className="contact-input-box contact-message-box"></div>
                <div className="contact-button">
                  <input type="submit" defaultValue="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='container'>
				<div className='row'>
					<div className='container'>
						<div className='spacer'>
							<div className='row m-0'>
								<div className='col-lg-7'>
									<div className='contact-box p-r-40'>
										{isLoggedIn !== true && (
											<div
												style={{
													position: 'absolute',
													top: '50%',
													left: '50%',
													zIndex: '1',
													margin: '-25px 0 0 -25px',
												}}
											>
												<span role='img' className='btn btn-primary'>
													Login
												</span>
											</div>
										)}

										<div
											style={{
												zIndex: '2',
												filter: isLoggedIn ? '' : 'blur(2px)',
												WebkitFilter:
													isLoggedIn === true ? '' : 'blur(2px)',
												pointerEvents: isLoggedIn === true ? '' : 'none',
											}}
										>
											<form className='contact-form' disabled>
												<div className='row'>
													<div className='col-lg-12 col-md-12'>
														<div className='form-group'>
															<input
																className='form-control'
																type='text'
																placeholder='Subject'
																name='subject'
																style={{
																	pointerEvents:
																		isLoggedIn === true ? '' : 'none',
																}}
															/>
														</div>
													</div>
													<div className='col-lg-12 col-md-12'>
														<div className='form-group'>
															<textarea
																className='form-control'
																name='message'
																rows={5}
																placeholder='Write message'
																style={{
																	pointerEvents:
																		isLoggedIn === true ? '' : 'none',
																}}
																defaultValue={''}
															/>
														</div>
													</div>
													<div className='col-lg-12 col-md-12'>
														<button type='submit' className='btn btn-primary'>
															Send Message
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className='col-lg-5'>
									<div
										className='detail-box p-40 bg-info aos-init'
										data-aos='fade-right'
										data-aos-duration={1200}
									>
										<h2 className='text-white'>
											{pageData.addressHeader.addressHeader}
										</h2>
										<p className='text-white m-t-30 op-8'>
											{pageData.phone.phone}
											<br /> {pageData.email.email}
										</p>
										<p className='text-white op-8'>
											{pageData.address.address}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
    </div>
  )
}
