import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// * Hooks
import { usePokemon } from '../../hooks/usePokemon'
// * Components
import { PokemonList } from '../../components'

export function PokedexScreen() {
  const { pokemons } = usePokemon()

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  )
}
