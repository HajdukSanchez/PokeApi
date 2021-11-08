import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// * Components
import { PokemonCard } from '../pokemonCard/PokemonCard'

export function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      style={styles.view}
    />
  )
}

PokemonList.defaultProps = {
  pokemons: [],
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 50,
  },
})
