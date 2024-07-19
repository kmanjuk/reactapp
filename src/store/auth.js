import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      setAuthentication: (authDetails, tokenSource, session, role, roleId) => {
        set((state) => ({
          ...state,
          authentication: authDetails,
          tokenSource: tokenSource,
          session: session,
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
