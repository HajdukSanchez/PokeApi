import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemon } from '../../api/pokemon'

export function PokedexScreen() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    ;(async () => await loadPokemons())()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemon()
      setPokemons(pokemons)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}
