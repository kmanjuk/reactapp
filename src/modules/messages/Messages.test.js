import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Messages } from './Messages';
import { useCreateCall } from '../../lib/api/create';

// Mock the `useCreateCall` hook
jest.mock('../../lib/api/create', () => ({
  useCreateCall: jest.fn(),
}));

describe('Messages Component', () => {
  const mockData = {
    envData: {},
    defaultData: {
      formData: [
        {
          UserMessageId: 1,
          subject: 'Test Subject',
          message: 'Test Message',
          createdDateTime: '2024-08-19T10:00:00Z',
          userId: 2,
          User: { userFullName: 'John Doe', email: 'johndoe@example.com' },
          childMessages: [],
        },
        {
          UserMessageId: 1,
          subject: 'Test Subject 1',
          message: 'Test Message 1',
          createdDateTime: '2024-08-20T10:00:00Z',
          userId: 2,
          User: { userFullName: 'John Doe', email: 'johndoe@example.com' },
          childMessages: [],
        },
      ],
    },
    routeData: {
      apiEndPointSchema: JSON.stringify({
        api: '/api/messages',
        message: { title: 'Message Sent', message: 'Your message was sent successfully' },
      }),
    },
    authDetails: { roleId: 1, session: { user: { userId: 2 } } },
    isLocalEnvironment: true,
  };

  const mockCreateCall = jest.fn({
    isLoading:false,
  });

  useCreateCall.mockReturnValue({
    mutateAsync: mockCreateCall,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Messages component and displays the message list', () => {
    render(<Messages {...mockData} />);

    // Check if the subject is rendered
    expect(screen.getByText('Test Subject')).toBeInTheDocument();

    // Check if the user's name is displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();

    // Check if the user's email is displayed
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
  });

  test('opens and displays a specific message when clicked', () => {
    render(<Messages {...mockData} />);

    // Click the message to open it
    fireEvent.click(screen.getByText('Test Subject'));

    // Check if the message is displayed
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  test('sends a new message successfully', async () => {
    render(<Messages {...mockData} />);

    // Open the message input
    fireEvent.click(screen.getByText('Test Subject'));

    // Type a message in the input field
    fireEvent.change(screen.getByPlaceholderText('Type your message...'), {
      target: { value: 'Hello there!' },
    });

    // Click the send button
    fireEvent.click(screen.getByTestId('sendMessage'));

    // Wait for the API call to be made
    await waitFor(() =>
      expect(mockCreateCall).toHaveBeenCalledWith(
        expect.objectContaining({
          url: true,
          apiEndpoint: '/api/messages',
          data: expect.objectContaining({ message: 'Hello there!' }),
        }),
      ),
    );
  });

  test('opens the new message modal when "Add Contact" button is clicked', () => {
    const props = {
      ...mockData,
      createCallMutation: { isLoading: true },
    };
    render(<Messages {...props} />);

    // Click the Add Contact button
    fireEvent.click(screen.getByTestId('newMessageModal')); 

    // Check if the modal is opened (you may need to test specific content within the modal)
    expect(screen.getByText('New Message')).toBeInTheDocument();
  });

  test('displays message timestamps correctly', () => {
    render(<Messages {...mockData} />);

    // Check if the date is formatted correctly
    expect(screen.getByText('Aug 19, 2024 10:00 AM')).toBeInTheDocument();
  });

  test('shows initials of the user in avatar if an image is not provided', () => {
    render(<Messages {...mockData} />);

    // Check if the initials are displayed
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  test('closes the message view when back button is clicked', () => {
    render(<Messages {...mockData} />);

    // Open a message
    fireEvent.click(screen.getByText('Test Subject'));

    // Click the back button
    fireEvent.click(screen.getByRole('button', { name: /back/i }));

    // Check if the message view is closed
    expect(screen.queryByText('Test Message')).not.toBeInTheDocument();
  });
});
