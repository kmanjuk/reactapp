import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { T1Contact1 } from './T1Contact1'
import { useCreateCall } from '../../../../lib/api/create'

// Mock the useCreateCall hook
jest.mock('../../../../lib/api/create')

const mockCreateCall = {
  mutateAsync: jest.fn()
}

useCreateCall.mockReturnValue(mockCreateCall)

describe('T1Contact1 Component', () => {
  const pageData = {
    content: {
      content: {
        mapUrl: 'https://maps.example.com',
        mapHeight: '400',
        header: 'Contact Us',
        text: 'If you have any questions please feel free to contact us.',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        email: 'contact@example.com'
      }
    }
  }

  const envData = {
    REACT_APP_API_URL_WEB: 'https://api.example.com'
  }

  const setLoginModal = jest.fn()

  it('should render the component with initial props', () => {
    render(<T1Contact1 isLoggedIn={false} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('If you have any questions please feel free to contact us.')).toBeInTheDocument()
  })

  it('should display the login button when user is not logged in', () => {
    render(<T1Contact1 isLoggedIn={false} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('should display the contact form when user is logged in', () => {
    render(<T1Contact1 isLoggedIn={true} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message Here...')).toBeInTheDocument()
  })

  it('should show success message after form submission', async () => {
    mockCreateCall.mutateAsync.mockResolvedValueOnce({})
    render(<T1Contact1 isLoggedIn={true} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)

    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } })
    fireEvent.change(screen.getByPlaceholderText('Your Message Here...'), { target: { value: 'Test Message' } })
    fireEvent.submit(screen.getByRole('button', { name: /send/i }))

    await screen.findByText("Thank you for your message, we'll get back to you as soon as possible.")
    expect(screen.getByText("Thank you for your message, we'll get back to you as soon as possible.")).toBeInTheDocument()
  })

  it('should show error message if form submission fails', async () => {
    mockCreateCall.mutateAsync.mockRejectedValueOnce({})
    render(<T1Contact1 isLoggedIn={true} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)

    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } })
    fireEvent.change(screen.getByPlaceholderText('Your Message Here...'), { target: { value: 'Test Message' } })
    fireEvent.submit(screen.getByRole('button', { name: /send/i }))

    await screen.findByText('Something went wrong, please try again!')
    expect(screen.getByText('Something went wrong, please try again!')).toBeInTheDocument()
  })

  it('should make the API call with correct data', async () => {
    const authSess = {
      session: {
        user: {
          userId: 'test-user-id'
        }
      }
    }
    localStorage.setItem('authenticateSession', JSON.stringify(authSess))
    mockCreateCall.mutateAsync.mockResolvedValueOnce({})
    render(<T1Contact1 isLoggedIn={true} setLoginModal={setLoginModal} pageData={pageData} envData={envData} />)

    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } })
    fireEvent.change(screen.getByPlaceholderText('Your Message Here...'), { target: { value: 'Test Message' } })
    fireEvent.submit(screen.getByRole('button', { name: /send/i }))

    await screen.findByText("Thank you for your message, we'll get back to you as soon as possible.")
    expect(mockCreateCall.mutateAsync).toHaveBeenCalledWith({
      url: envData.REACT_APP_API_URL_WEB,
      apiEndpoint: 'usermessage',
      data: {
        subject: 'Test Subject',
        message: 'Test Message',
        userId: 'test-user-id'
      },
      messageTitle: 'modSchema.message.title',
      message: 'modSchema.message.message',
      noConfirmation: true,
    })
  })
})
