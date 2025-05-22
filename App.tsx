import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppNavigator } from './src/navigation/AppNavigator.tsx'
import { AuthProvider } from './src/context/AuthContext.tsx'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
