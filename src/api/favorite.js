import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = []
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemonFavoritesApi() {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(favorites)
  } catch (error) {
    console.log(error)
  }
}
