import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileUpdate } from './ProfileUpdate'

describe('ProfileUpdate Component', () => {
  test('renders without crashing', () => {
    render(<ProfileUpdate />)
  })

  test('contains correct structure', () => {
    const { getByText, getByRole } = render(<ProfileUpdate />)
    
    // Check for card header
    expect(getByText('Edit Profile')).toBeInTheDocument()
    
    // Check for card body
    const cardBody = getByRole('tabpanel')
    expect(cardBody).toBeInTheDocument()
  })

  test('handles placeholder content gracefully', () => {
    const { container } = render(<ProfileUpdate />)
    expect(container.querySelector('.trtui-tab-pane')).toBeInTheDocument()
  })
})
