import React from 'react'
import PropTypes from 'prop-types'

import closeBtn from '../../assets/images/btn-close-bg.svg'

export const MessageModal = ({
  setNewMessageModal,
  handleSubmit,
  sendMessage,
  register,
  createCallMutation,
}) => {
  return (
    <div
      id="signupModals"
      className="trtui-modal trtui-fade trtui-show"
      tabIndex={-1}
      style={{ display: 'block', backgroundColor: 'rgba(55,55,55,0.3)' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="trtui-modal-dialog trtui-modal-dialog-centered">
        <div className="trtui-modal-content trtui-border-0 trtui-overflow-hidden">
          <div className="trtui-modal-header trtui-p-3">
            <h4 className="trtui-card-title trtui-mb-0">New Message</h4>
            <button
              type="button"
              className="trtui-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                '--vz-btn-close-color': '#000',
                '--vz-btn-close-bg': `url("${closeBtn}")`,
                '--vz-btn-close-opacity': '0.5',
                '--vz-btn-close-hover-opacity': '0.75',
                '--vz-btn-close-focus-shadow': '0 0 1 0.25rem rgba(var(--vz-primary-rgb), 0.25)',
                '--vz-btn-close-focus-opacity': 1,
                '--vz-btn-close-disabled-opacity': '0.25',
                '--vz-btn-close-white-filter': 'invert(1) grayscale(100%) brightness(200%)',
                WebkitBoxSizing: 'content-box',
                boxSizing: 'content-box',
                width: '1em',
                height: '1em',
                padding: '0.25em 0.25em',
                color: 'var(--vz-btn-close-color)',
                background: 'transparent var(--vz-btn-close-bg) center/1em auto no-repeat',
                border: 0,
                borderRadius: '0.25rem',
                opacity: 'var(--vz-btn-close-opacity)',
              }}
              onClick={() => setNewMessageModal(false)}
            />
          </div>
          <div className="trtui-modal-body">
            <form className="row" onSubmit={handleSubmit(sendMessage)}>
              <div className="trtui-mb-3">
                <label htmlFor="fullName" className="trtui-form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="trtui-form-control"
                  placeholder="Subject"
                  {...register('subject')}
                />
              </div>
              <div className="trtui-mb-3">
                <label htmlFor="emailInput" className="trtui-form-label">
                  Message
                </label>
                <textarea
                  className="trtui-form-control"
                  placeholder="Your Message Here...."
                  {...register('message')}
                />
              </div>
              <div className="trtui-text-end">
                <button type="submit" className="trtui-btn trtui-btn-primary">
                  {createCallMutation.isLoading ? (
                    <>
                      <span
                        className="trtui-spinner-border trtui-spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{' '}
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

MessageModal.propTypes = {
  setNewMessageModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  createCallMutation: PropTypes.func.isRequired,
}
