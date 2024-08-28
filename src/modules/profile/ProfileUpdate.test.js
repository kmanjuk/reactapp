import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileUpdate } from './ProfileUpdate'
import { Form } from '../../common/form/Form'

// Mocking the Form component to avoid testing its internal implementation.
jest.mock('../../common/form/Form', () => ({
  Form: jest.fn(() => <div>Mocked Form Component</div>),
}))

describe('ProfileUpdate', () => {
  const mockAuthDetails = {
    session: {
      user: {
        UserFamily: [
          {
            firstName: 'John',
            lastName: 'Doe',
          },
        ],
      },
    },
  }
  
  const mockModuleSchema = {
    form: {
      update: {
        fields: [
          { label: 'First Name', name: 'firstName' },
          { label: 'Last Name', name: 'lastName' },
        ],
      },
    },
  }

  const mockEnvData = {
    REACT_APP_API_URL_WEB: 'https://api.example.com',
  }

  const mockIsLocalEnvironment = 'true'

  it('renders the component with the correct heading', () => {
    render(
      <ProfileUpdate
        authDetails={mockAuthDetails}
        moduleSchema={mockModuleSchema}
        isLocalEnvironment={mockIsLocalEnvironment}
        envData={mockEnvData}
      />
    )
    
    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
  })

  it('renders the Form component with correct props', () => {
    render(
      <ProfileUpdate
        authDetails={mockAuthDetails}
        moduleSchema={mockModuleSchema}
        isLocalEnvironment={mockIsLocalEnvironment}
        envData={mockEnvData}
      />
    )

    expect(Form).toHaveBeenCalledWith(
      expect.objectContaining({
        authDetails: mockAuthDetails,
        defaultData: mockAuthDetails.session.user.UserFamily[0],
        formSchema: mockModuleSchema.form.update,
        addUserObject: true,
        isUpdate: true,
        isProfile: true,
        moduleSchema: mockModuleSchema,
        isLocalEnvironment: mockIsLocalEnvironment,
        envData: mockEnvData,
      }),
      {}
    )
  })

  it('displays the mocked form component', () => {
    render(
      <ProfileUpdate
        authDetails={mockAuthDetails}
        moduleSchema={mockModuleSchema}
        isLocalEnvironment={mockIsLocalEnvironment}
        envData={mockEnvData}
      />
    )

    expect(screen.getAllByText('Mocked Form Component')[0]).toBeInTheDocument()
  })
})
