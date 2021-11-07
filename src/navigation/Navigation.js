import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Account, Favorites, Pokedex } from '../screens'

const { Navigator, Screen } = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Navigator>
      <Screen name='Account' component={Account} />
      <Screen name='Favorites' component={Favorites} />
      <Screen name='Pokedex' component={Pokedex} />
    </Navigator>
  )
}
