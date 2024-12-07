import { User as UserType } from '@/interfaces/User'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { onLogin, onLogout } from '../store/auth/authSlice'
import { useAppSelector } from './hooks'
export const useAuthStore = () => {
  const { status, user, errorMessage } = useAppSelector((state) => state.auth)

  const dispatch = useDispatch()

  const loginWithGoogle = async () => {
    // dispatch(onChecking())
    // dispatch(onLogin())
  }

  const loginWithMicrosoft = async ({ user }: { user: UserType }) => {
    // dispatch(onChecking())
    if (!user) {
      throw new Error('No user data found')
    }
    dispatch(onLogin({ ...user }))
  }

  const checkAuthToken = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_LOGIN}/api/auth/me`,
        {
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        console.log(response.data)
        dispatch(onLogin(response.data))
      } else {
        dispatch(onLogout())
      }
    } catch (error) {
      console.error('Error al validar el token:', error)
      dispatch(onLogout())
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
  }

  return {
    // Propiedades
    status,
    isAuthenticated: status === 'authenticated',
    isAdmin: status === 'authenticated' && user?.roles.includes('admin'),
    user,
    errorMessage,
    // Metodos
    loginWithGoogle,
    loginWithMicrosoft,
    checkAuthToken,
    startLogout,
  }
}
