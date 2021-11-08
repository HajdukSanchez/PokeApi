import React from 'react'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { usePokemon } from '../../hooks/usePokemon'

export function PokemonScreen({ route: { params }, navigation }) {
  const { loadPokemonById, pokemon } = usePokemon()

  useEffect(() => {
    ;(async () => {
      try {
        await loadPokemonById(params.id)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <View>
      <Text>{pokemon.id}</Text>
      <Text>{pokemon.name}</Text>
    </View>
  )
}
