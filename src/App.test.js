import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App component', () => {
  test('renders Basic Page at root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByText('Basic Page')).toBeInTheDocument()
  })

  test('renders not found page for unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.queryByText('Basic Page')).not.toBeInTheDocument()
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })
})
