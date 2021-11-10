import React, { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'react-native'
import { usePokemon } from '../../hooks/usePokemon'
import { PokemonHeader } from '../../components'

export function PokemonScreen({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null)
  const { loadPokemonById } = usePokemon()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await loadPokemonById(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) {
    return null
  } else {
    return (
      <View>
        <PokemonHeader
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          type={pokemon.types[0].type.name}
        />
      </View>
    )
  }
}
