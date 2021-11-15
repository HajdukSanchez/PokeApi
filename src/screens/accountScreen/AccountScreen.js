import React from 'react'
import { View } from 'react-native'
import { LoginForm, UserData } from '../../components'
import useAuth from '../../hooks/useAuth'

export function AccountScreen() {
  const { auth } = useAuth()

  return <View>{auth ? <UserData /> : <LoginForm />}</View>
}
