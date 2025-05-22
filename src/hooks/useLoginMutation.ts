import { useMutation } from '@tanstack/react-query'
import { loginUser } from '../services/auth.ts'
import { useAuth } from '../context/AuthContext.tsx'

export const useLoginMutation = () => {
  const { login } = useAuth()

  return useMutation({
    mutationFn: loginUser,
    onSuccess: async data => {
      if (data?.accessToken) {
        await login(data.accessToken)
      } else {
        throw new Error('No token received')
      }
    },
    onError: error => {
      console.error('Login error:', error)
    },
  })
}
