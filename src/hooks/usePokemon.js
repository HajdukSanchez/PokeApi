import { useEffect, useState } from 'react'
import { getPokemon, getPokemonById, getPokemonDetailByUrl } from '../api/pokemon'

export function usePokemon() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    ;(async () => await loadPokemons())()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemon(nextUrl)
      setNextUrl(response.next)
      const pokemonsArray = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailByUrl(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  // const loadPokemons = async () => {
  //   try {
  //     const response = await getPokemon(nextUrl)
  //     setNextUrl(response.next) // * set next url for load more
  //     response.results.forEach(async (pokemon) => {
  //       const pokemonDetail = await getPokemonDetailByUrl(pokemon.url) // * Get pokemon detail
  //       setPokemons((pokemons) => [
  //         ...pokemons, // * Add pokemon to array
  //         {
  //           id: pokemonDetail.id,
  //           name: pokemonDetail.name,
  //           type: pokemonDetail.types[0].type.name,
  //           order: pokemonDetail.order,
  //           image: pokemonDetail.sprites.other['official-artwork'].front_default,
  //         },
  //       ])
  //     })
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  const loadPokemonById = async (id) => {
    try {
      const response = await getPokemonById(id)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }

  return { pokemons, loadPokemons, nextUrl, loadPokemonById }
}
