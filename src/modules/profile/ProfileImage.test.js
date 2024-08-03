import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileImage } from './ProfileImage'
import defaultAvatar from '../../assets/images/default-avatar.png'

describe('ProfileImage Component', () => {
  const mockAuthDetails = {
    authentication: {
      profileImg: 'http://example.com/user-profile.jpg'
    },
    session: {
      user: {
        userFullName: 'John Doe',
        email: 'john.doe@example.com'
      }
    }
  }

  const mockAuthDetailsWithDefaultImg = {
    authentication: {
      profileImg: null
    },
    session: {
      user: {
        userFullName: 'Jane Doe',
        email: 'jane.doe@example.com'
      }
    }
  }

  test('renders without crashing', () => {
    render(<ProfileImage authDetails={mockAuthDetails} />)
  })

  test('displays the correct profile image', () => {
    const { getByAltText } = render(<ProfileImage authDetails={mockAuthDetails} />)
    const imgElement = getByAltText('user-profile-pic')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', mockAuthDetails.authentication.profileImg)
  })

  test('displays the default avatar when profileImg is null', () => {
    const { getByAltText } = render(<ProfileImage authDetails={mockAuthDetailsWithDefaultImg} />)
    const imgElement = getByAltText('user-profile-pic')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', defaultAvatar)
  })

  test('displays the user\'s full name and email', () => {
    const { getByText } = render(<ProfileImage authDetails={mockAuthDetails} />)
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('john.doe@example.com')).toBeInTheDocument()
  })
})
