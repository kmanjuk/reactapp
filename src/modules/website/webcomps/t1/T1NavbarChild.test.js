import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { T1NavbarChild } from './T1NavbarChild'
import { BrowserRouter as Router } from 'react-router-dom'

// Test case data
const navData = {
  name: 'Parent Item',
  childItems: [
    { name: 'Child Item 1', link: '/child1' },
    { name: 'Child Item 2', link: '/child2' }
  ]
}

describe('T1NavbarChild Component', () => {
  it('should render the component with initial props', () => {
    render(
      <Router>
        <T1NavbarChild nav={navData} navIndex={0} />
      </Router>
    )
    expect(screen.getByText('Parent Item')).toBeInTheDocument()
  })

  it('should toggle child items visibility when clicking the parent link', () => {
    render(
      <Router>
        <T1NavbarChild nav={navData} navIndex={0} />
      </Router>
    )

    const parentLink = screen.getByText('Parent Item')
    const childItems = screen.queryByText('Child Item 1')
    
    // Initially, child items should not be visible
    expect(childItems).toBeNull()

    // Click to expand
    fireEvent.click(parentLink)

    // Child items should be visible after clicking
    expect(screen.getByText('Child Item 1')).toBeInTheDocument()
    expect(screen.getByText('Child Item 2')).toBeInTheDocument()

    // Click again to collapse
    fireEvent.click(parentLink)

    // Child items should not be visible after clicking again
    expect(screen.queryByText('Child Item 1')).toBeNull()
    expect(screen.queryByText('Child Item 2')).toBeNull()
  })

  it('should render child links correctly', () => {
    render(
      <Router>
        <T1NavbarChild nav={navData} navIndex={0} />
      </Router>
    )

    // Click to expand
    fireEvent.click(screen.getByText('Parent Item'))

    expect(screen.getByText('Child Item 1').closest('a')).toHaveAttribute('href', '/child1')
    expect(screen.getByText('Child Item 2').closest('a')).toHaveAttribute('href', '/child2')
  })
})
