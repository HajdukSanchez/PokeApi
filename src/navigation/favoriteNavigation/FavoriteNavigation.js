import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// * Screens
import { FavoritesScreen, PokemonScreen } from '../../screens'

const { Navigator, Screen } = createStackNavigator()

export function FavoriteNavigation() {
  return (
    <Navigator initialRouteName='Favorites'>
      <Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{ title: '', headerTransparent: true }}
      />
      <Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Navigator>
  )
}
