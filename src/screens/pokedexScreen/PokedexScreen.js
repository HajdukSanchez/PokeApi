import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// * Hooks
import { usePokemon } from '../../hooks/usePokemon'
// * Components
import { PokemonList } from '../../components'

export function PokedexScreen() {
  const { pokemons, loadPokemons, nextUrl } = usePokemon()

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}
