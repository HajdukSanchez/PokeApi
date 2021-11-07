import React from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

export function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      // renderItem={(pokemon) => <PokemonItem pokemon={pokemon} />}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  )
}

PokemonList.defaultProps = {
  pokemons: [],
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}
