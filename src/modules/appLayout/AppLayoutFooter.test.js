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

    const leftText = screen.getAllByText('© TRT.')[0]
    expect(leftText).toBeInTheDocument()

    const rightText = screen.getAllByText('Thulisha Reddy Technologies')[0]
    expect(rightText).toBeInTheDocument()
  })
})
