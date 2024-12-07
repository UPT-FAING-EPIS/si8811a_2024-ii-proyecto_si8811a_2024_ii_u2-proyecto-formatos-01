import { User } from '@/interfaces/User'
import { createSlice } from '@reduxjs/toolkit'

export type authStatusType = 'checking' | 'authenticated' | 'not-authenticated'

interface initialStateType {
  status: authStatusType
  user: User | null
  errorMessage: string | undefined
}

const initialState: initialStateType = {
  status: 'not-authenticated' as authStatusType,
  user: null,
  errorMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.errorMessage = undefined
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated'
      state.user = payload
      state.errorMessage = undefined
    },
    onLogout: (state) => {
      state.status = 'not-authenticated'
      state.user = null
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
  },
})

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions
