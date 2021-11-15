import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// * Screens
import { AccountScreen } from '../../screens'

const { Navigator, Screen } = createStackNavigator()

export function AccountNavigation() {
  return (
    <Navigator initialRouteName='Account'>
      <Screen
        name='Account'
        component={AccountScreen}
        options={{ headerTransparent: true, title: '' }}
      />
    </Navigator>
  )
}
