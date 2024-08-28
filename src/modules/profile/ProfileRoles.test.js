import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ProfileRoles } from './ProfileRoles'

describe('ProfileRoles Component', () => {
  const mockAuthDetails = {
    session: {
      user: {
        userRoles: [
          { roleName: 'Admin' },
          { roleName: 'Editor' },
          { roleName: 'Viewer' }
        ]
      }
    }
  }

  const mockAuthDetailsNoRoles = {
    session: {
      user: {
        userRoles: []
      }
    }
  }

  test('renders without crashing', () => {
    render(<ProfileRoles authDetails={mockAuthDetails} />)
  })

  test('displays the correct number of roles', () => {
    const { getByText } = render(<ProfileRoles authDetails={mockAuthDetails} />)
    expect(getByText('Admin')).toBeInTheDocument()
    expect(getByText('Editor')).toBeInTheDocument()
    expect(getByText('Viewer')).toBeInTheDocument()
  })

  test('toggles role list visibility when expand button is clicked', () => {
    const { getByTestId, container } = render(<ProfileRoles authDetails={mockAuthDetails} />)
    const expandButton = getByTestId('roleButton')
    
    // Initially the roles list should be hidden
    expect(screen.getByTestId('roleExpanded')).toBeTruthy()
    
    // Click to expand
    fireEvent.click(expandButton)
    expect(screen.getByTestId('roleExpanded')).toBeTruthy()

    // Click to collapse
    fireEvent.click(expandButton)
    expect(screen.getByTestId('roleExpanded')).toBeTruthy()
  })

  test('handles no roles gracefully', () => {
    const { container } = render(<ProfileRoles authDetails={mockAuthDetailsNoRoles} />)
    expect(container.querySelector('.trtui-card-body div[style="display: block;"]')).toBeFalsy()
  })
})
