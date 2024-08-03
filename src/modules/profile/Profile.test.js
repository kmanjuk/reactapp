import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Profile } from './Profile'
import { ProfileBG } from './ProfileBG'
import { ProfileRoles } from './ProfileRoles'
import { ProfileImage } from './ProfileImage'
import { ProfileUpdate } from './ProfileUpdate'

// Mock the child components
jest.mock('./ProfileBG', () => ({
  ProfileBG: () => <div>ProfileBG Component</div>,
}))
jest.mock('./ProfileRoles', () => ({
  ProfileRoles: () => <div>ProfileRoles Component</div>,
}))
jest.mock('./ProfileImage', () => ({
  ProfileImage: () => <div>ProfileImage Component</div>,
}))
jest.mock('./ProfileUpdate', () => ({
  ProfileUpdate: () => <div>ProfileUpdate Component</div>,
}))

describe('Profile Component', () => {
  const authDetails = {
    authentication: {
      profileImg: 'test-image.jpg',
    },
    session: {
      user: {
        userFullName: 'John Doe',
        email: 'john.doe@example.com',
        userRoles: [{ roleName: 'Admin' }, { roleName: 'User' }],
      },
    },
  }

  test('renders without crashing', () => {
    render(<Profile authDetails={authDetails} />)
  })

  test('renders ProfileBG component', () => {
    const { getByText } = render(<Profile authDetails={authDetails} />)
    expect(getByText('ProfileBG Component')).toBeInTheDocument()
  })

  test('renders ProfileImage component', () => {
    const { getByText } = render(<Profile authDetails={authDetails} />)
    expect(getByText('ProfileImage Component')).toBeInTheDocument()
  })

  test('renders ProfileRoles component', () => {
    const { getByText } = render(<Profile authDetails={authDetails} />)
    expect(getByText('ProfileRoles Component')).toBeInTheDocument()
  })

  test('renders ProfileUpdate component', () => {
    const { getByText } = render(<Profile authDetails={authDetails} />)
    expect(getByText('ProfileUpdate Component')).toBeInTheDocument()
  })
})
