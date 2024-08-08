import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * @module store/auth
 * @author Thulisha Reddy Technologies
 * @typedef {Object} AuthDetails
 * @property {Object} resObject - The authentication response object.
 * @property {string} tokenSource - The source of the authentication token.
 * @property {Object} session - The session details.
 * @property {string} role - The user's role.
 * @property {string} roleId - The ID of the user's role.
 */

/**
 * @typedef {Object} AuthState
 * @property {boolean} loggedIn - Indicates if the user is logged in.
 * @property {Object|null} authentication - The authentication details.
 * @property {string|null} tokenSource - The source of the authentication token.
 * @property {Object|null} session - The session details.
 * @property {string|null} role - The user's role.
 * @property {string|null} roleId - The ID of the user's role.
 * @property {function(AuthDetails): void} setAuthentication - Sets authentication details.
 * @property {function(): void} unsetAuthentication - Clears authentication details.
 */

/**
 * Zustand store for managing authentication state.
 *
 * @type {import('zustand').StoreApi<AuthState>}
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      authentication: null,
      tokenSource: null,
      session: null,
      role: null,
      roleId: null,
      /**
       * Updates the store with authentication details.
       *
       * @param {AuthDetails} authDetails - The authentication details to set.
       */
      setAuthentication: (authDetails) => {
        set({
          loggedIn: true,
          authentication: authDetails.resObject,
          tokenSource: authDetails.tokenSource,
          session: authDetails.session,
          role: authDetails.role,
          roleId: authDetails.roleId,
        })
      },
      /**
       * Clears the authentication details from the store.
       */
      unsetAuthentication: () => {
        set({
          loggedIn: false,
          authentication: null,
          tokenSource: null,
          session: null,
          role: null,
          roleId: null,
        })
      },
      /**
       * Updates the store with role details.
       *
       * @param {AuthDetails} authDetails - The role details to set.
       */
      setRole: (role, roleId) => {
        set((state) => ({
          ...state,
          role: role,
          roleId: roleId,
        }))
      },
    }),
    {
      name: 'auth',
    },
  ),
)
