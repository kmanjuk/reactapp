import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { T1Contact1 } from './T1Contact1'
import { useCreateCall } from '../../../../lib/api/create'

// Mock the useCreateCall hook
jest.mock('../../../../lib/api/create', () => ({
  useCreateCall: jest.fn(),
}))

describe('T1Contact1 Component', () => {
  let mockCreateCall

  const defaultProps = {
    isLoggedIn: true,
    setLoginModal: jest.fn(),
    pageData: {
      content: {
        content: {
          mapUrl: 'https://www.google.com/maps',
          mapHeight: '300',
          header: 'Contact Us',
          text: 'Feel free to reach out to us!',
          phone: '+123456789',
          address: '123 Street, City, Country',
          email: 'contact@example.com',
        },
      },
    },
    authDetails: {
      session: {
        user: {
          userId: 'user123',
        },
      },
    },
    isLocalEnvironment: true,
  }

  beforeEach(() => {
    mockCreateCall = {
      mutateAsync: jest.fn(),
    }
    useCreateCall.mockReturnValue(mockCreateCall)
  })

  it('renders the component with the correct content', () => {
    render(<T1Contact1 {...defaultProps} />)

    // Check if the map iframe is present
    expect(screen.getByTitle('contactMap')).toBeInTheDocument()

    // Check if the contact form header is present
    expect(screen.getByText('Contact Us')).toBeInTheDocument()

    // Check if contact details are rendered
    expect(screen.getByText('+123456789')).toBeInTheDocument()
    expect(screen.getByText('123 Street, City, Country')).toBeInTheDocument()
    expect(screen.getByText('contact@example.com')).toBeInTheDocument()
  })

  it('shows the login button and blurs the form when the user is not logged in', () => {
    render(<T1Contact1 {...defaultProps} isLoggedIn={false} />)

    // Check if the login button is present
    const loginButton = screen.getByRole('img')
    expect(loginButton).toBeInTheDocument()

    // Check if the form is blurred
    const form = screen.getByTestId('contactForm')
    expect(form).toHaveStyle('filter: blur(2px)')
  })

  it('calls the setLoginModal function when the login button is clicked', () => {
    render(<T1Contact1 {...defaultProps} isLoggedIn={false} />)

    const loginButton = screen.getByRole('img')
    fireEvent.click(loginButton)

    expect(defaultProps.setLoginModal).toHaveBeenCalledWith(true)
  })

  it('handles form submission successfully', async () => {
    mockCreateCall.mutateAsync.mockResolvedValueOnce({})

    render(<T1Contact1 {...defaultProps} />)

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Subject'), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Message Here...'), {
      target: { value: 'This is a test message.' },
    })

    // Submit the form
    fireEvent.submit(screen.getByTestId('contactForm'))

    // Check if the success message is shown
    const successMessage = await screen.findByText(
      "Thank you for your message, we'll get back to you as soon as possible."
    )
    expect(successMessage).toBeInTheDocument()

    // close success message
    fireEvent.click(screen.getByTestId('closeSuccesMsg'))
    expect(successMessage).not.toBeInTheDocument()
  })

  it('handles form submission error', async () => {
    mockCreateCall.mutateAsync.mockRejectedValueOnce(new Error('Submission error'))

    render(<T1Contact1 {...defaultProps} />)

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Subject'), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByPlaceholderText('Your Message Here...'), {
      target: { value: 'This is a test message.' },
    })

    // Submit the form
    fireEvent.submit(screen.getByTestId('contactForm'))

    // Check if the error message is shown
    const errorMessage = await screen.findByText('Something went wrong, please try again!')
    expect(errorMessage).toBeInTheDocument()

    // close error message
    fireEvent.click(screen.getByTestId('closeErrorMsg'))
    expect(errorMessage).not.toBeInTheDocument()
  })

  it('adds the userId to the form data before submission', async () => {
    mockCreateCall.mutateAsync.mockResolvedValueOnce({})

    render(<T1Contact1 {...defaultProps} />)

    fireEvent.submit(screen.getByTestId('contactForm'))

    expect(mockCreateCall.mutateAsync).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          userId: 'user123',
        }),
      })
    )
  })
})
