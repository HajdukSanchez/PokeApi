import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// * Screens
import { FavoritesScreen } from '../../screens'

const { Navigator, Screen } = createStackNavigator()

export function FavoriteNavigation() {
  return (
    <Navigator initialRouteName='Favorites'>
      <Screen name='Favorites' component={FavoritesScreen} options={{ title: 'Favorites' }} />
    </Navigator>
  )
}
