import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      setAuthentication: (authDetails) => {
        set((state) => ({
          ...state,
          loggedIn: true,
          authentication: authDetails.resObject,
          tokenSource: authDetails.tokenSource,
          session: authDetails.session,
          role: authDetails.role,
          roleId: authDetails.roleId,
        }))
      },
      unsetAuthentication: () => {
        set(() => ({}))
      },
    }),
    {
      name: 'auth',
    },
  ),
)
