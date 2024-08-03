import React from 'react'
import PropTypes from 'prop-types'
import { Form } from '../../common/form/Form'

export const ProfileUpdate = ({ authDetails, moduleSchema, isLocalEnvironment, envData }) => {
  return (
    <div className="trtui-card trtui-mt-xxl-n5">
      <div className="trtui-card-header">Edit Profile</div>
      <div className="trtui-card-body trtui-p-4">
        <div className="trtui-tab-content">
          <div className="trtui-tab-pane trtui-active" role="tabpanel">
            <Form
              authDetails={authDetails}
              defaultData={authDetails.session?.user?.UserFamily[0]}
              formSchema={moduleSchema.form.update}
              addUserObject={true}
              isUpdate={true}
              moduleSchema={moduleSchema}
              isLocalEnvironment={isLocalEnvironment}
              envData={envData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileUpdate.propTypes = {
  authDetails: PropTypes.object.isRequired,
  moduleSchema: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  envData: PropTypes.object.isRequired,
}
