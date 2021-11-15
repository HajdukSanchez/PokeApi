import React, { useEffect, useState, useCallback } from 'react'
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
          response.forEach(async (id) => {
            const pokemonDetail = await getPokemonById(id) // * Get pokemon detail
            setPokemons((pokemons) => [
              ...pokemons, // * Add pokemon to array
              {
                id: pokemonDetail.id,
                name: pokemonDetail.name,
                type: pokemonDetail.types[0].type.name,
                order: pokemonDetail.order,
                image: pokemonDetail.sprites.other['official-artwork'].front_default,
              },
            ])
          })
        })()
      }
    }, [auth])
  )

  console.log(pokemons)

  return (
    <SafeAreaView>
      {!auth ? (
        <View style={styles.content}>
          <Text style={styles.text}>Please login for see your favorites Pokemons</Text>
          <Icon name='lock' color='gray' size={25} />
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>Favorites</Text>
          <PokemonList pokemons={pokemons} />
          {pokemons.length === 0 && <Text style={styles.text}>No pokemons added yet</Text>}
        </View>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
