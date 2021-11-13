import React, { useState } from 'react'
import { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ActivityIndicator, ScrollView } from 'react-native'
import { usePokemon } from '../../hooks/usePokemon'
import { PokemonHeader, PokemonType, PokemonStats } from '../../components'

export function PokemonScreen({ route: { params }, navigation }) {
  const [pokemon, setPokemon] = useState(null)
  const { loadPokemonById } = usePokemon()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name='arrow-left'
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    })
  }, [navigation, params])

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
    return <ActivityIndicator size='large' style={{ top: 200 }} color={'#AEAEAE'} />
  } else {
    return (
      <ScrollView>
        <PokemonHeader
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other['official-artwork'].front_default}
          type={pokemon.types[0].type.name}
        />
        <PokemonType types={pokemon.types} />
        <PokemonStats stats={pokemon.stats} />
      </ScrollView>
    )
  }
}
