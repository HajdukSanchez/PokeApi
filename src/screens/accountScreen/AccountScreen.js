import React from 'react'
import { View } from 'react-native'
import { LoginForm, UserData } from '../../components'

export function AccountScreen() {
  const auth = null

  return <View>{auth ? <UserData /> : <LoginForm />}</View>
}
