import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from './AppStack.tsx'
import { AuthStack } from './AuthStack.tsx'
import { useAuth } from '../context/AuthContext.tsx'

export const AppNavigator: React.FC = () => {
  const { token, loading } = useAuth()

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return <NavigationContainer>{token ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
