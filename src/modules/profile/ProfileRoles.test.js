import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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
    const { getByRole, container } = render(<ProfileRoles authDetails={mockAuthDetails} />)
    const expandButton = getByRole('button', { name: /arrow-down/i })
    
    // Initially the roles list should be hidden
    expect(container.querySelector('.trtui-card-body div[style="display: none;"]')).toBeTruthy()
    
    // Click to expand
    fireEvent.click(expandButton)
    expect(container.querySelector('.trtui-card-body div[style="display: block;"]')).toBeTruthy()

    // Click to collapse
    fireEvent.click(expandButton)
    expect(container.querySelector('.trtui-card-body div[style="display: none;"]')).toBeTruthy()
  })

  test('handles no roles gracefully', () => {
    const { container } = render(<ProfileRoles authDetails={mockAuthDetailsNoRoles} />)
    expect(container.querySelector('.trtui-card-body div[style="display: block;"]')).toBeFalsy()
  })
})
