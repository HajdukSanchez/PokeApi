import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Account, Favorites, Pokedex } from '../screens'

const { Navigator, Screen } = createBottomTabNavigator()

export function Navigation() {
  return (
    <Navigator>
      <Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />,
        }}
      />
      <Screen
        name='Pokedex'
        component={Pokedex}
        options={{ tabBarLabel: '', tabBarIcon: () => renderPokeBall() }}
      />
      <Screen
        name='Favorites'
        component={Favorites}
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

  return <Image source={require('../assets/icon.png')} style={styles} />
}
