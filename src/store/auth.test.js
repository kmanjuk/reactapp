import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from './auth';

describe('useAuthStore', () => {
  afterEach(() => {
    // Reset the state after each test to avoid state leaks between tests
    act(() => {
      useAuthStore.getState().unsetAuthentication();
    });
  });

  test('initial state is empty', () => {
    const { result } = renderHook(() => useAuthStore());

    expect(result.current.authentication).toBeUndefined();
    expect(result.current.loggedIn).toBeUndefined();
    expect(result.current.tokenSource).toBeUndefined();
    expect(result.current.session).toBeUndefined();
    expect(result.current.role).toBeUndefined();
    expect(result.current.roleId).toBeUndefined();
  });

  test('sets authentication details correctly', () => {
    const { result } = renderHook(() => useAuthStore());
    const authDetails = {
      resObject: { user: 'testUser' },
      tokenSource: 'testTokenSource',
      session: { id: 'testSession' },
      role: 'testRole',
      roleId: 'testRoleId',
    };

    act(() => {
      result.current.setAuthentication(authDetails);
    });

    expect(result.current.authentication).toEqual(authDetails.resObject);
    expect(result.current.loggedIn).toBe(true);
    expect(result.current.tokenSource).toBe(authDetails.tokenSource);
    expect(result.current.session).toEqual(authDetails.session);
    expect(result.current.role).toBe(authDetails.role);
    expect(result.current.roleId).toBe(authDetails.roleId);
  });

  test('unsets authentication details correctly', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.unsetAuthentication();
    });

    expect(result.current.authentication).toBeUndefined();
    expect(result.current.loggedIn).toBeUndefined();
    expect(result.current.tokenSource).toBeUndefined();
    expect(result.current.session).toBeUndefined();
    expect(result.current.role).toBeUndefined();
    expect(result.current.roleId).toBeUndefined();
  });

  test('persists authentication state', () => {
    const { result } = renderHook(() => useAuthStore());
    const authDetails = {
      resObject: { user: 'testUser' },
      tokenSource: 'testTokenSource',
      session: { id: 'testSession' },
      role: 'testRole',
      roleId: 'testRoleId',
    };

    act(() => {
      result.current.setAuthentication(authDetails);
    });

    // Mock localStorage getItem and setItem
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    mockGetItem.mockReturnValue(JSON.stringify(authDetails));

    expect(mockSetItem).toHaveBeenCalledWith('auth', JSON.stringify({
      authentication: authDetails.resObject,
      loggedIn: true,
      tokenSource: authDetails.tokenSource,
      session: authDetails.session,
      role: authDetails.role,
      roleId: authDetails.roleId,
    }));

    const persistedState = JSON.parse(mockGetItem.mock.calls[0][1]);
    expect(persistedState).toEqual(authDetails);

    mockSetItem.mockRestore();
    mockGetItem.mockRestore();
  });
});
