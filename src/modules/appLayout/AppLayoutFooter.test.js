import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutFooter } from './AppLayoutFooter'

describe('AppLayoutFooter', () => {
  it('renders the footer component', () => {
    render(<AppLayoutFooter />)

    const footerElement = screen.getByRole('contentinfo')
    expect(footerElement).toBeInTheDocument()
  })

  it('displays the correct text content', () => {
    render(<AppLayoutFooter />)

    const leftText = screen.getByText('© TRT.')
    expect(leftText).toBeInTheDocument()

    const rightText = screen.getByText('Develop by Thulisha Reddy Technologies')
    expect(rightText).toBeInTheDocument()
  })
})
