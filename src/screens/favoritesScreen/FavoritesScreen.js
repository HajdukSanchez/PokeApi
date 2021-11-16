import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome5'
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoritesApi } from '../../api/favorite'
import { getPokemonById } from '../../api/pokemon'
import { PokemonList } from '../../components'

export function FavoritesScreen() {
  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        ;(async () => {
          const response = await getPokemonFavoritesApi()
          const pokemonsArray = []
          for await (const id of response) {
            const pokemonDetails = await getPokemonById(id)
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default,
            })
          }
          setPokemons(pokemonsArray)
        })()
      }
    }, [auth])
  )

  return (
    <SafeAreaView>
      {!auth ? (
        <View style={styles.content}>
          <Text style={styles.text}>Please login for see your favorites Pokemons</Text>
          <Icon name='lock' color='gray' size={25} />
        </View>
      ) : (
        <>
          <Text style={styles.title}>My Favorites</Text>
          <PokemonList pokemons={pokemons} />
          {pokemons.length === 0 && <Text style={styles.text}>No pokemons added yet</Text>}
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 20,
  },
  title: {
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
