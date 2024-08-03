import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileBG } from './ProfileBG'
import profileBg from '../../assets/images/profile-bg.jpg'

describe('ProfileBG Component', () => {
  test('renders without crashing', () => {
    render(<ProfileBG />)
  })

  test('renders the profile background image', () => {
    const { getByAltText } = render(<ProfileBG />)
    const imgElement = getByAltText('profile cover')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', profileBg)
  })
})
