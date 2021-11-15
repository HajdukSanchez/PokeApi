import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoritesApi() // * Get array of info
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemonFavoritesApi() {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return favorites ? JSON.parse(favorites) : [] // * Always return an array, empty or fully
  } catch (error) {
    console.log(error)
  }
}

export async function isPokemonFavoritesApi(id) {
  try {
    const response = await getPokemonFavoritesApi()
    return includes(response, id) // * Check if the id is in the array
  } catch (error) {
    console.log(error)
  }
}

export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonFavoritesApi() // * Get array of info
    const newFavorites = pull(favorites, id) // * Remove the id from the array
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
  } catch (error) {
    console.log(error)
  }
}
