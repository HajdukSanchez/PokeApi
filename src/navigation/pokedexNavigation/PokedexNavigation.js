import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// * Screens
import { PokedexScreen, PokemonScreen } from '../../screens'

const { Navigator, Screen } = createStackNavigator()

export function PokedexNavigation() {
  return (
    <Navigator initialRouteName='Pokedex'>
      <Screen
        name='Pokedex'
        component={PokedexScreen}
        options={{ title: 'Pokedex', headerShown: false, headerTransparent: true }}
      />
      <Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Navigator>
  )
}
