import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoritesApi } from '../../api/favorite'

export function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState()
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5 // * If is a favorite, use the fully heart icon, otherwise, use the empty heart icon
  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavoritesApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck)
  }

  const addToFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id)
      onReloadCheckFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const removeFromFavorite = async () => {
    onReloadCheckFavorite()
  }

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={isFavorite ? removeFromFavorite : addToFavorite}
      style={{ marginRight: 20 }}
    />
  )
}
