import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from '../types/navigation.ts'

import { HomeScreen } from '../screens/HomeScreen.tsx'
import { LoginScreen } from '../screens/LoginScreen.tsx'

const Stack = createNativeStackNavigator()

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Home} component={HomeScreen} />
    <Stack.Screen name={Routes.Login} component={LoginScreen} />
  </Stack.Navigator>
)
