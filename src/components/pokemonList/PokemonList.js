import React from 'react'
import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import PropTypes from 'prop-types'
// * Components
import { PokemonCard } from '../pokemonCard/PokemonCard'

export function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons()
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      style={styles.view}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isNext && <ActivityIndicator size='large' style={styles.spinner} color={'#AEAEAE'} />
      }
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
    paddingTop: 20,
    paddingBottom: 50,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'ios' ? 0 : 20, // * iOS has a different behavior
  },
})
