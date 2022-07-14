import type { StoreSlice } from '.'
import type { AppUser } from '~/types'

export type AppSessionState = {
  user: AppUser | null
  session_error: string | null
}

export type AppSessionActions = {
  setUser: (user: AppUser) => void
  setSessionData: (session_data: AppSessionState) => void
}

export type AppSessionStore = AppSessionState & AppSessionActions

const defaultSessionState: AppSessionState = {
  user: null,
  session_error: null,
}

export const createAppSessionSlice: StoreSlice<AppSessionStore> = (set, get) => ({
  ...defaultSessionState,

  setUser: (user: AppUser) => set({ user }),

  setSessionData: async ({ user, session_error }: AppSessionState) => {
    return set({
      user: user || null,
      session_error: session_error || null,
    })
  },
})
