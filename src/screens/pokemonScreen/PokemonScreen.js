import React from 'react'
import { View, Text } from 'react-native'

export function PokemonScreen({
  route: {
    params: { id },
  },
}) {
  return (
    <View>
      <Text>Pokemon screen</Text>
    </View>
  )
}
