import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LoginForm, UserData } from '../../components'
import useAuth from '../../hooks/useAuth'

export function AccountScreen() {
  const { auth } = useAuth()

  return <SafeAreaView>{auth ? <UserData /> : <LoginForm />}</SafeAreaView>
}
