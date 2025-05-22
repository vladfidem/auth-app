import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from '../types/navigation.ts'

import { ProfileScreen } from '../screens/ProfileScreen.tsx'

const Stack = createNativeStackNavigator()

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
  </Stack.Navigator>
)
