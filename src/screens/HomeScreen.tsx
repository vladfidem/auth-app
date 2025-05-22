import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList, Routes } from '../types/navigation.ts'

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate(Routes.Login)} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
