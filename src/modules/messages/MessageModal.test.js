import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MessageModal } from './MessageModal';

// Mock props
const mockSetNewMessageModal = jest.fn();
const mockHandleSubmit = jest.fn((fn) => (e) => fn(e));
const mockSendMessage = jest.fn();
const mockRegister = jest.fn();
const mockCreateCallMutation = { isLoading: false };

describe('MessageModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the modal with correct elements', () => {
    render(
      <MessageModal
        setNewMessageModal={mockSetNewMessageModal}
        handleSubmit={mockHandleSubmit}
        sendMessage={mockSendMessage}
        register={mockRegister}
        createCallMutation={mockCreateCallMutation}
      />
    );

    // Check if modal header is rendered
    expect(screen.getAllByText('New Message')[0]).toBeInTheDocument();

    // Check if Subject input is rendered
    expect(screen.getAllByText('Subject')[0]).toBeInTheDocument();

    // Check if Message textarea is rendered
    expect(screen.getAllByText('Message')[0]).toBeInTheDocument();

    // Check if Send Message button is rendered
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('closes the modal when close button is clicked', () => {
    render(
      <MessageModal
        setNewMessageModal={mockSetNewMessageModal}
        handleSubmit={mockHandleSubmit}
        sendMessage={mockSendMessage}
        register={mockRegister}
        createCallMutation={mockCreateCallMutation}
      />
    );

    // Click the close button
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // Check if the setNewMessageModal was called with false
    expect(mockSetNewMessageModal).toHaveBeenCalledWith(false);
  });

  test('calls the sendMessage function on form submit', () => {
    render(
      <MessageModal
        setNewMessageModal={mockSetNewMessageModal}
        handleSubmit={mockHandleSubmit}
        sendMessage={mockSendMessage}
        register={mockRegister}
        createCallMutation={mockCreateCallMutation}
      />
    );

    // Simulate entering data in the form
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Test Message' } });

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }));

    // Check if sendMessage was called
    expect(mockSendMessage).toHaveBeenCalled();
  });

  test('displays loading state when createCallMutation is loading', () => {
    const loadingCreateCallMutation = { isLoading: true };

    render(
      <MessageModal
        setNewMessageModal={mockSetNewMessageModal}
        handleSubmit={mockHandleSubmit}
        sendMessage={mockSendMessage}
        register={mockRegister}
        createCallMutation={loadingCreateCallMutation}
      />
    );

    // Check if the loading spinner and text are displayed
    expect(screen.getAllByText(/Sending.../i)[0]).toBeInTheDocument();
  });
});
