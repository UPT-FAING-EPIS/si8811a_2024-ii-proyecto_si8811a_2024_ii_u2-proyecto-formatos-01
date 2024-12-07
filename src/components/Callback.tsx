import { useAuthStore } from '@/hooks/useAuthStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Callback = () => {
  const navigate = useNavigate()
  const { loginWithMicrosoft } = useAuthStore()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_LOGIN}/api/auth/me`,
          {
            withCredentials: true,
          }
        )
        loginWithMicrosoft({ user: data.user })

        navigate('/')
      } catch (error) {
        console.error('Error fetching user data:', error)
        navigate('/login')
      }
    }

    fetchUserData()
  }, [navigate, loginWithMicrosoft])

  return (
    <div>
      <h2>Loading...</h2>
    </div>
  )
}

export default Callback
