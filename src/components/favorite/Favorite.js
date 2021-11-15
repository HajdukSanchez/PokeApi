import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi, getPokemonFavoritesApi } from '../../api/favorite'

export function Favorite({ id }) {
  const addToFavorite = async () => {
    await addPokemonFavoriteApi(id)
  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={addToFavorite} style={{ marginRight: 20 }} />
  )
}
