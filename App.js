import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from './src/navigation/tabNavigation/TabNavigation'
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabNavigation />
      </AuthProvider>
    </NavigationContainer>
  )
}
