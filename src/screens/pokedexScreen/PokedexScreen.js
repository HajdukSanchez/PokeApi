import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// * API
import { getPokemon, getPokemonDetailByUrl } from '../../api/pokemon'

export function PokedexScreen() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    ;(async () => await loadPokemons())()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemon()
      response.results.forEach(async (pokemon) => {
        const pokemonDetail = await getPokemonDetailByUrl(pokemon.url) // * Get pokemon detail
        setPokemons((pokemons) => [
          ...pokemons, // * Add pokemon to array
          {
            id: pokemonDetail.id,
            name: pokemonDetail.name,
            type: pokemonDetail.types[0],
            order: pokemonDetail.order,
            image: pokemonDetail.sprites.other['official-artwork'].front_default,
          },
        ])
      })
      console.log(pokemons[0])
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
