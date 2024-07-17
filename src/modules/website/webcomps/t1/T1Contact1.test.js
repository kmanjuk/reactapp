// T1Contact1.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { T1Contact1 } from './T1Contact1'; // Adjust the import path based on your project structure
import userEvent from '@testing-library/user-event';

describe('T1Contact1 component', () => {
  const mockPageData = {
    content: {
      content: {
        mapUrl: 'https://maps.google.com',
        mapHeight: '400',
        header: 'Contact Us',
        text: 'If you have any questions, please feel free to contact us.',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        email: 'contact@domain.com',
      },
    },
  };

  const mockAuthSession = {
    session: {
      user: {
        userId: 'testuser',
      },
    },
  };

  const mockAppVariables = {
    REACT_APP_APP_ID: 'testAppId',
    REACT_APP_TENANT_ID: 'testTenantId',
    REACT_APP_ORG_ID: 'testOrgId',
    REACT_APP_API_URL: 'https://api.test.com',
  };

  const mockSetLoginModal = jest.fn();
  const mockUseCreateCall = jest.fn();

  jest.mock('../../../../lib/api/create', () => ({
    useCreateCall: () => mockUseCreateCall,
  }));

  beforeEach(() => {
    mockUseCreateCall.mockClear();
    mockSetLoginModal.mockClear();
  });

  it('renders contact form correctly', () => {
    render(
      <T1Contact1
        pageData={mockPageData}
        authSession={mockAuthSession}
        appVariables={mockAppVariables}
        setLoginModal={mockSetLoginModal}
      />
    );

    const headerElement = screen.getByText('Contact Us');
    expect(headerElement).toBeInTheDocument();

    const textElement = screen.getByText('If you have any questions, please feel free to contact us.');
    expect(textElement).toBeInTheDocument();

    const phoneElement = screen.getByText('123-456-7890');
    expect(phoneElement).toBeInTheDocument();

    const addressElement = screen.getByText('123 Main St, Anytown, USA');
    expect(addressElement).toBeInTheDocument();

    const emailElement = screen.getByText('contact@domain.com');
    expect(emailElement).toBeInTheDocument();
  });

  it('displays login modal when not authenticated and contact form is clicked', () => {
    render(
      <T1Contact1
        pageData={mockPageData}
        authSession={null}
        appVariables={mockAppVariables}
        setLoginModal={mockSetLoginModal}
      />
    );

    const loginButton = screen.getByRole('img', { name: 'Login' });
    userEvent.click(loginButton);

    expect(mockSetLoginModal).toHaveBeenCalledTimes(1);
  });

  it('submits the form correctly when authenticated', async () => {
    mockUseCreateCall.mockReturnValue({
      mutateAsync: jest.fn().mockResolvedValueOnce({}),
    });

    render(
      <T1Contact1
        pageData={mockPageData}
        authSession={mockAuthSession}
        appVariables={mockAppVariables}
        setLoginModal={mockSetLoginModal}
      />
    );

    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageTextarea = screen.getByPlaceholderText('Your Message Here...');
    const sendButton = screen.getByText('Send');

    userEvent.type(subjectInput, 'Test Subject');
    userEvent.type(messageTextarea, 'Test Message');
    userEvent.click(sendButton);

    expect(mockUseCreateCall().mutateAsync).toHaveBeenCalledWith(expect.objectContaining({
      url: mockAppVariables.REACT_APP_API_URL,
      apiEndpoint: 'usermessage',
      data: expect.objectContaining({
        subject: 'Test Subject',
        message: 'Test Message',
        userId: 'testuser',
        appId: mockAppVariables.REACT_APP_APP_ID,
        tenantId: mockAppVariables.REACT_APP_TENANT_ID,
        orgId: mockAppVariables.REACT_APP_ORG_ID,
      }),
      messageTitle: 'modSchema.message.title',
      message: 'modSchema.message.message',
      noConfirmation: true,
    }));
  });

  it('shows success message on successful form submission', async () => {
    mockUseCreateCall.mockReturnValue({
      mutateAsync: jest.fn().mockResolvedValueOnce({}),
    });

    render(
      <T1Contact1
        pageData={mockPageData}
        authSession={mockAuthSession}
        appVariables={mockAppVariables}
        setLoginModal={mockSetLoginModal}
      />
    );

    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageTextarea = screen.getByPlaceholderText('Your Message Here...');
    const sendButton = screen.getByText('Send');

    userEvent.type(subjectInput, 'Test Subject');
    userEvent.type(messageTextarea, 'Test Message');
    userEvent.click(sendButton);

    const successAlert = await screen.findByRole('alert');
    expect(successAlert).toHaveTextContent("Thank you for your message, we'll get back to you as soon as possible.");
  });

  it('shows error message on failed form submission', async () => {
    mockUseCreateCall.mockReturnValue({
      mutateAsync: jest.fn().mockRejectedValueOnce(new Error('Failed to submit')),
    });

    render(
      <T1Contact1
        pageData={mockPageData}
        authSession={mockAuthSession}
        appVariables={mockAppVariables}
        setLoginModal={mockSetLoginModal}
      />
    );

    const subjectInput = screen.getByPlaceholderText('Subject');
    const messageTextarea = screen.getByPlaceholderText('Your Message Here...');
    const sendButton = screen.getByText('Send');

    userEvent.type(subjectInput, 'Test Subject');
    userEvent.type(messageTextarea, 'Test Message');
    userEvent.click(sendButton);

    const errorAlert = await screen.findByRole('alert');
    expect(errorAlert).toHaveTextContent('Something went wrong, please try again!');
  });
});
