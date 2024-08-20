import React from 'react'
import { useForm } from 'react-hook-form'
import { default as dayjs } from 'dayjs'
import PropTypes from 'prop-types'

import { useCreateCall } from '../../lib/api/create'
import { MessageModal } from './MessageModal'
import chatBG from '../../assets/images/chat-bg-pattern.png'
import userDummyImg from '../../assets/images/user-dummy-img.jpg'

export const Messages = ({ envData, defaultData, routeData, authDetails, isLocalEnvironment }) => {
  const [openMessage, setOpenMessage] = React.useState(false)
  const [openMessageId, setOpenMessageId] = React.useState(0)
  const [newMessageModal, setNewMessageModal] = React.useState(false)

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  })

  const createCallMutation = useCreateCall()

  const sendMessage = async (data) => {
    const payload = { ...data }

    if (defaultData.formData.length <= 0) {
      payload['subject'] = data.message
    } else {
      payload['parentMessageId'] = defaultData.formData[openMessageId].UserMessageId
      payload['subject'] = defaultData.formData[openMessageId].subject
    }

    await createCallMutation.mutateAsync({
      url: isLocalEnvironment,
      apiEndpoint: JSON.parse(routeData.apiEndPointSchema).api,
      data: payload, //data,
      messageTitle: JSON.parse(routeData.apiEndPointSchema).message.title,
      message: JSON.parse(routeData.apiEndPointSchema).message.message,
      params: '?roleId=' + authDetails.roleId,
      noConfirmation: true,
    })
    document.getElementById('messaging').value = ''
  }

  const sendNewMessage = async (data) => {
    const payload = { ...data }
    if (data.message === '' || data.subject === '') {
      return
    }

    await createCallMutation.mutateAsync({
      url: isLocalEnvironment,
      apiEndpoint: JSON.parse(routeData.apiEndPointSchema).api,
      data: payload, //data,
      messageTitle: JSON.parse(routeData.apiEndPointSchema).message.title,
      message: JSON.parse(routeData.apiEndPointSchema).message.message,
      params: '?roleId=' + authDetails.roleId,
      noConfirmation: true,
    })
    document.getElementById('messaging').value = ''
    setNewMessageModal(false)
  }

  const openMsg = (id) => {
    setOpenMessage(true)
    setOpenMessageId(id)
  }

  const closeMsg = () => {
    setOpenMessage(false)
    setOpenMessageId(0)
  }

  const getNameInitials = (name) => {
    const fullName = name.split(' ')
    const intials = fullName[0]?.charAt(0) + fullName[1]?.charAt(0)
    return intials
  }

  return (
    <>
      <div className="trtui-chat-wrapper trtui-d-lg-flex trtui-gap-1 trtui-mx-n4 trtui-mt-n4 trtui-p-1">
        <div className="trtui-chat-leftsidebar">
          <div className="trtui-px-4 trtui-pt-4 trtui-mb-3">
            <div className="trtui-d-flex trtui-align-items-start">
              <div className="trtui-flex-grow-1">
                <h5 className="trtui-mb-4">Messages</h5>
              </div>
              <div className="trtui-flex-shrink-0">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="bottom"
                  aria-label="Add Contact"
                  data-bs-original-title="Add Contact"
                >
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="trtui-btn trtui-btn-soft-primary trtui-btn-sm"
                    onClick={() => setNewMessageModal(true)}
                  >
                    <i className="ri-add-line trtui-align-bottom" />
                  </button>
                </div>
              </div>
            </div>
          </div>{' '}
          {/* .p-4 */}
          <div className="trtui-tab-content trtui-text-muted">
            <div className="trtui-tab-pane trtui-active" id="chats" role="tabpanel">
              <div
                className="trtui-chat-room-list trtui-pt-3 trtui-simplebar-scrollable-y"
                data-simplebar="init"
              >
                <div className="trtui-simplebar-wrapper" style={{ margin: '-16px 0px 0px' }}>
                  <div className="trtui-simplebar-height-auto-observer-wrapper">
                    <div className="trtui-simplebar-height-auto-observer" />
                  </div>
                  <div className="trtui-simplebar-mask">
                    <div className="trtui-simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                      <div
                        className="trtui-simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: 'auto', overflow: 'hidden scroll' }}
                      >
                        <div
                          className="trtui-simplebar-content"
                          style={{ padding: '16px 0px 0px' }}
                        >
                          <div className="trtui-chat-message-list">
                            <ul
                              className="trtui-list-unstyled trtui-chat-list trtui-chat-user-list"
                              id="userList"
                            >
                              {defaultData.formData.length > 0 &&
                                defaultData.formData
                                  .sort(
                                    (b, a) =>
                                      new Date(a.createdDateTime) - new Date(b.createdDateTime),
                                  )
                                  .map((msg, msgIndx) => (
                                    <li
                                      key={msgIndx}
                                      data-name="direct-message"
                                      className={openMessageId === msgIndx ? 'trtui-active' : ''} //"trtui-active"
                                      onClick={() => openMsg(msgIndx)}
                                    >
                                      {' '}
                                      <a href="#!">
                                        {' '}
                                        <div className="trtui-d-flex trtui-align-items-center">
                                          {' '}
                                          <div className="trtui-flex-shrink-0 trtui-chat-user-img trtui-online trtui-align-self-center trtui-me-2 trtui-ms-0">
                                            {' '}
                                            <div className="trtui-avatar-xxs">
                                              <div
                                                style={{
                                                  width: '100%',
                                                  height: '100%',
                                                  borderRadius: '50%',
                                                  fontSize: '0.7rem',
                                                  color: '#fff',
                                                  lineHeight: '100%',
                                                  paddingTop: '0.4rem',
                                                  position: 'absolute',
                                                  // left: "50% !important",
                                                }}
                                                className="trtui-bg-primary trtui-text-center"
                                              >
                                                {getNameInitials(msg.User?.userFullName)}
                                              </div>
                                            </div>{' '}
                                          </div>{' '}
                                          <div className="trtui-flex-grow-1 trtui-overflow-hidden">
                                            {' '}
                                            <p className="trtui-text-truncate trtui-mb-0">
                                              {msg.subject}
                                            </p>{' '}
                                          </div>{' '}
                                        </div>{' '}
                                      </a>{' '}
                                    </li>
                                  ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="trtui-simplebar-placeholder"
                    style={{ width: '300px', height: '653px' }}
                  />
                </div>
                <div
                  className="trtui-simplebar-track trtui-simplebar-horizontal"
                  style={{ visibility: 'hidden' }}
                >
                  <div
                    className="trtui-simplebar-scrollbar"
                    style={{
                      width: '0px',
                      display: 'none',
                      WebkitTransform: 'translate3d(0px, 0px, 0px)',
                      msTransform: 'translate3d(0px, 0px, 0px)',
                      transform: 'translate3d(0px, 0px, 0px)',
                    }}
                  />
                </div>
                <div
                  className="trtui-simplebar-track trtui-simplebar-vertical"
                  style={{ visibility: 'visible' }}
                >
                  <div
                    className="trtui-simplebar-scrollbar"
                    style={{
                      height: '182px',
                      WebkitTransform: 'translate3d(0px, 0px, 0px)',
                      msTransform: 'translate3d(0px, 0px, 0px)',
                      transform: 'translate3d(0px, 0px, 0px)',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="trtui-tab-pane" id="contacts" role="tabpanel">
              <div className="trtui-chat-room-list trtui-pt-3" data-simplebar="init">
                <div className="trtui-simplebar-wrapper" style={{ margin: '-16px 0px 0px' }}>
                  <div className="trtui-simplebar-height-auto-observer-wrapper">
                    <div className="trtui-simplebar-height-auto-observer" />
                  </div>

                  <div
                    className="trtui-simplebar-placeholder"
                    style={{ width: '0px', height: '0px' }}
                  />
                </div>
                <div
                  className="trtui-simplebar-track trtui-simplebar-horizontal"
                  style={{ visibility: 'hidden' }}
                >
                  <div
                    className="trtui-simplebar-scrollbar"
                    style={{ width: '0px', display: 'none' }}
                  />
                </div>
                <div
                  className="trtui-simplebar-track trtui-simplebar-vertical"
                  style={{ visibility: 'hidden' }}
                >
                  <div
                    className="trtui-simplebar-scrollbar"
                    style={{ height: '0px', display: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end tab contact */}
        </div>
        {/* end chat leftsidebar */}
        {/* Start User chat */}
        <div
          className={`trtui-user-chat trtui-w-100 trtui-overflow-hidden ${
            openMessage && 'trtui-user-chat-show'
          }`}
          style={{ backgroundImage: `url(${chatBG})` }}
        >
          <div className="trtui-chat-content trtui-d-lg-flex">
            {/* start chat conversation section */}
            <div className="trtui-w-100 trtui-overflow-hidden trtui-position-relative">
              {/* conversation user */}
              <div className="trtui-position-relative">
                <div
                  className="trtui-position-relative"
                  id="users-chat"
                  style={{ display: 'block' }}
                >
                  <div className="trtui-p-3 trtui-user-chat-topbar">
                    <div className="trtui-row trtui-align-items-center">
                      <div className="trtui-col-sm-4 trtui-col-8">
                        <div className="trtui-d-flex trtui-align-items-center">
                          <div
                            className={`trtui-flex-shrink-0 trtui-d-block ${
                              !openMessage && 'trtui-d-lg-none'
                            } trtui-me-3`}
                          >
                            <a
                              href="#!"
                              className="trtui-user-chat-remove trtui-fs-18 trtui-p-1"
                              onClick={() => closeMsg()}
                            >
                              <i className="ri-arrow-left-s-line trtui-align-bottom" />
                            </a>
                          </div>
                          <div className="trtui-flex-grow-1 trtui-overflow-hidden">
                            <div className="trtui-d-flex trtui-align-items-center">
                              <div className="trtui-flex-shrink-0 trtui-chat-user-img trtui-online trtui-user-own-img trtui-align-self-center trtui-me-3 trtui-ms-0">
                                <img
                                  src={userDummyImg}
                                  className="trtui-rounded-circle trtui-avatar-xs"
                                  alt="user-avatar"
                                />
                              </div>
                              <div className="trtui-flex-grow-1 trtui-overflow-hidden">
                                <h5 className="trtui-text-truncate trtui-mb-0 trtui-fs-16">
                                  <a
                                    className="trtui-text-reset trtui-username"
                                    data-bs-toggle="offcanvas"
                                    href="#userProfileCanvasExample"
                                    aria-controls="userProfileCanvasExample"
                                  >
                                    {defaultData.formData[openMessageId] &&
                                      defaultData.formData[openMessageId].User?.userFullName}
                                  </a>
                                </h5>
                                <p className="trtui-text-truncate trtui-text-muted trtui-fs-14 trtui-mb-0 trtui-userStatus">
                                  <small>
                                    {defaultData.formData[openMessageId] &&
                                      defaultData.formData[openMessageId].User?.email}
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="trtui-col-sm-8 trtui-col-4"></div>
                    </div>
                  </div>
                  {/* end chat user head */}
                  <div
                    className="trtui-chat-conversation trtui-p-3 trtui-p-lg-4 trtui-simplebar-scrollable-y"
                    id="chat-conversation"
                    data-simplebar="init"
                  >
                    <div className="trtui-simplebar-wrapper" style={{ margin: '-24px' }}>
                      <div className="trtui-simplebar-height-auto-observer-wrapper">
                        <div className="trtui-simplebar-height-auto-observer" />
                      </div>
                      <div className="trtui-simplebar-mask">
                        <div
                          className="trtui-simplebar-offset"
                          style={{ right: '0px', bottom: '0px' }}
                        >
                          <div
                            className="trtui-simplebar-content-wrapper"
                            tabIndex={0}
                            role="region"
                            aria-label="scrollable content"
                            style={{
                              height: '100%',
                              overflow: 'hidden scroll',
                            }}
                          >
                            <div
                              className="trtui-simplebar-content"
                              style={{ padding: '24px', marginTop: 0 }}
                            >
                              <div id="elmLoader" />
                              <ul
                                className="trtui-list-unstyled trtui-chat-conversation-list"
                                id="users-conversation"
                              >
                                <li
                                  id={1}
                                  className={`trtui-chat-list ${
                                    defaultData.formData[openMessageId] &&
                                    defaultData.formData[openMessageId].userId ===
                                      authDetails?.session?.user.userId
                                      ? 'trtui-left'
                                      : 'trtui-right'
                                  }`}
                                >
                                  {' '}
                                  <div className="trtui-conversation-list">
                                    {defaultData.formData[openMessageId] &&
                                      defaultData.formData[openMessageId].userId ===
                                        authDetails?.session?.user.userId && (
                                        <div className="trtui-chat-avatar">
                                          <img src={userDummyImg} alt="user-you" />
                                        </div>
                                      )}
                                    <div className="trtui-user-chat-content">
                                      <div className="trtui-ctext-wrap">
                                        <div className="trtui-ctext-wrap-content" id={1}>
                                          <p className="trtui-mb-0 trtui-ctext-content">
                                            {defaultData.formData[openMessageId] &&
                                              defaultData.formData[openMessageId].message}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="trtui-conversation-name">
                                        <small className="trtui-text-muted trtui-time">
                                          {dayjs(
                                            defaultData.formData[openMessageId] &&
                                              defaultData.formData[openMessageId].createdDateTime,
                                          ).format('MMM D, YYYY h:mm A')}
                                        </small>{' '}
                                        <span className="trtui-text-success trtui-check-message-icon">
                                          <i className="bx bx-check-double" />
                                        </span>
                                      </div>
                                    </div>{' '}
                                  </div>{' '}
                                </li>
                                {defaultData.formData[openMessageId] &&
                                  defaultData.formData[openMessageId].childMessages &&
                                  defaultData.formData[openMessageId].childMessages.length > 0 &&
                                  defaultData.formData[openMessageId].childMessages
                                    .sort(
                                      (b, a) =>
                                        new Date(b.createdDateTime) - new Date(a.createdDateTime),
                                    )
                                    .map((msgs, msgsIndex) => (
                                      <li
                                        className={`trtui-chat-list ${
                                          msgs.userId === authDetails?.session?.user.userId
                                            ? 'trtui-left'
                                            : 'trtui-right'
                                        }`}
                                        key={msgsIndex}
                                      >
                                        <div className="trtui-conversation-list">
                                          {msgs.userId === authDetails?.session?.user.userId && (
                                            <div className="trtui-chat-avatar">
                                              <img src={userDummyImg} alt="user-you" />
                                            </div>
                                          )}
                                          <div className="trtui-user-chat-content">
                                            <div className="trtui-ctext-wrap">
                                              <div className="trtui-ctext-wrap-content" id={2}>
                                                <p className="trtui-mb-0 trtui-ctext-content">
                                                  {msgs.message}
                                                </p>
                                              </div>
                                            </div>
                                            <div className="trtui-conversation-name">
                                              <small className="trtui-text-muted trtui-time">
                                                {dayjs(msgs.createdDateTime).format(
                                                  'MMM D, YYYY h:mm A',
                                                )}
                                              </small>{' '}
                                              {msgs.userId !==
                                                authDetails?.session?.user.userId && (
                                                <span className="trtui-text-success ctrtui-heck-message-icon">
                                                  <i className="bx bx-check-double" />
                                                </span>
                                              )}
                                            </div>
                                          </div>{' '}
                                        </div>{' '}
                                      </li>
                                    ))}
                              </ul>
                              {/* end chat-conversation-list */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="trtui-simplebar-placeholder"
                        style={{ width: '513px', height: '721px' }}
                      />
                    </div>
                    <div
                      className="trtui-simplebar-track trtui-simplebar-horizontal"
                      style={{ visibility: 'hidden' }}
                    >
                      <div
                        className="trtui-simplebar-scrollbar trtui-simplebar-visible"
                        style={{
                          width: '0px',
                          display: 'none',
                          WebkitTransform: 'translate3d(0px, 0px, 0px)',
                          msTransform: 'translate3d(0px, 0px, 0px)',
                          transform: 'translate3d(0px, 0px, 0px)',
                        }}
                      />
                    </div>
                    <div
                      className="trtui-simplebar-track trtui-simplebar-vertical"
                      style={{ visibility: 'visible' }}
                    >
                      <div
                        className="trtui-simplebar-scrollbar"
                        style={{
                          height: '162px',
                          display: 'block',
                          WebkitTransform: 'translate3d(0px, 142px, 0px)',
                          msTransform: 'translate3d(0px, 142px, 0px)',
                          transform: 'translate3d(0px, 142px, 0px)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="trtui-chat-input-section trtui-p-3 trtui-p-lg-4">
                  <form onSubmit={handleSubmit(sendMessage)}>
                    <div className="trtui-row trtui-g-0 trtui-align-items-center">
                      <div className="trtui-col">
                        <div className="trtui-chat-input-feedback">Please Enter a Message</div>
                        <input
                          type="text"
                          className="trtui-form-control trtui-chat-input trtui-bg-light trtui-border-light"
                          id="messaging"
                          {...register('message')}
                          placeholder="Type your message..."
                          autoComplete="off"
                        />
                      </div>
                      <div className="trtui-col-auto">
                        <div className="trtui-chat-input-links trtui-ms-2">
                          <div className="trtui-links-list-item">
                            <button
                              type="submit"
                              className="trtui-btn trtui-btn-success trtui-chat-send trtui-waves-effect trtui-waves-light"
                            >
                              <i className="ri-send-plane-2-fill trtui-align-bottom" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="trtui-replyCard">
                  <div className="trtui-card trtui-mb-0">
                    <div className="trtui-card-body trtui-py-3">
                      <div className="trtui-replymessage-block trtui-mb-0 trtui-d-flex trtui-align-items-start">
                        <div className="trtui-flex-grow-1">
                          <h5 className="trtui-conversation-name">{}</h5>
                          <p className="trtui-mb-0" />
                        </div>
                        <div className="trtui-flex-shrink-0">
                          <button
                            type="button"
                            id="close_toggle"
                            className="trtui-btn trtui-btn-sm trtui-btn-link trtui-mt-n2 trtui-me-n3 trtui-fs-18"
                          >
                            <i className="bx bx-x trtui-align-middle" />
                          </button>
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
      {newMessageModal && (
        <MessageModal
          modSchema={routeData.apiEndPointSchema}
          setNewMessageModal={setNewMessageModal}
          envData={envData}
          handleSubmit={handleSubmit}
          sendMessage={sendNewMessage}
          register={register}
          createCallMutation={createCallMutation}
        />
      )}
    </>
  )
}

Messages.propTypes = {
  envData: PropTypes.object.isRequired,
  defaultData: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
  authDetails: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}
