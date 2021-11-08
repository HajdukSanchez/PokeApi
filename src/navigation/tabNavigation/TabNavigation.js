import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// * Stacks
import { FavoriteNavigation, PokedexNavigation, AccountNavigation } from '../'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabNavigation() {
  return (
    <Navigator initialRouteName='Pokedex'>
      <Screen
        name='Account'
        component={AccountNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />,
        }}
      />
      <Screen
        name='Pokedex'
        component={PokedexNavigation}
        options={{ tabBarLabel: '', tabBarIcon: () => renderPokeBall() }}
      />
      <Screen
        name='Favorites'
        component={FavoriteNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
        }}
      />
    </Navigator>
  )
}

function renderPokeBall() {
  const styles = {
    width: 50,
    height: 50,
    top: -18,
  }

  return <Image source={require('../../assets/icon.png')} style={styles} />
}
