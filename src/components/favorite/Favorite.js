import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export function Favorite({ id }) {
  const addToFavorite = () => {}

  return (
    <Icon name='heart' color='#fff' size={20} onPress={addToFavorite} style={{ marginRight: 20 }} />
  )
}
