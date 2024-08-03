import { getUser, getUserSession } from './authentication';
import axios from 'axios';
import fetchMock from 'jest-fetch-mock';

jest.mock('axios');

describe('getUser', () => {
  const mockSetAuthentication = jest.fn();
  const mockAuthDetails = { roleId: null, role: null, session: null };

  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });

  it('should fetch user and call getUserSession if needed', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      user: {
        profile: {
          id: '123',
        },
      },
    }));

    axios.get.mockResolvedValue({
      data: {
        formData: {
          user: {
            userRoles: [{ roleName: 'AppUser', roleId: '1' }],
          },
        },
      },
    });

    await getUser({
      isLocalEnvironment: 'http://localhost:3001',
      setAuthentication: mockSetAuthentication,
      authDetails: mockAuthDetails,
    });

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:3001/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/authenticateSession', {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });

    expect(mockSetAuthentication).toHaveBeenCalledWith({
      resObject: {
        user: {
          profile: {
            id: '123',
          },
        },
      },
      tokenSource: 'passport',
      session: {
        data: {
          formData: {
            user: {
              userRoles: [{ roleName: 'AppUser', roleId: '1' }],
            },
          },
        },
      },
      role: 'AppUser',
      roleId: '1',
    });
  });

  it('should log an error if authentication fails', async () => {
    fetchMock.mockRejectOnce(new Error('authentication has been failed!'));

    console.log = jest.fn();

    await getUser({
      isLocalEnvironment: 'http://localhost',
      setAuthentication: mockSetAuthentication,
      authDetails: mockAuthDetails,
    });

    expect(console.log).toHaveBeenCalledWith(new Error('authentication has been failed!'));
  });
});

describe('getUserSession', () => {
  const mockSetAuthentication = jest.fn();
  const mockResObject = { user: { profile: { id: '123' } } };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch user session and set authentication', async () => {
    axios.get.mockResolvedValue({
      data: {
        formData: {
          user: {
            userRoles: [{ roleName: 'AppUser', roleId: '1' }],
          },
        },
      },
    });

    await getUserSession({
      isLocalEnvironment: 'http://localhost:3001',
      resObject: mockResObject,
      setAuthentication: mockSetAuthentication,
    });

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/authenticateSession', {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    });

    expect(mockSetAuthentication).toHaveBeenCalledWith({
      resObject: mockResObject,
      tokenSource: 'passport',
      session: {
        data: {
          formData: {
            user: {
              userRoles: [{ roleName: 'AppUser', roleId: '1' }],
            },
          },
        },
      },
      role: 'AppUser',
      roleId: '1',
    });
  });

  it('should log an error if fetching session fails', async () => {
    axios.get.mockRejectedValue(new Error('session fetch failed'));

    console.log = jest.fn();

    await getUserSession({
      isLocalEnvironment: 'http://localhost:3001',
      resObject: mockResObject,
      setAuthentication: mockSetAuthentication,
    });

    expect(console.log).toHaveBeenCalledWith(new Error('session fetch failed'));
  });
});
