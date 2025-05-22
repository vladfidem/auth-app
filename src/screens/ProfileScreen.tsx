import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../context/AuthContext.tsx'

export const ProfileScreen: React.FC = () => {
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
