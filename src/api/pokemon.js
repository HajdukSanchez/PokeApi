import { API_HOST } from '../utils/constants'

export async function getPokemon(nextUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0` // ? Limit of 20 pokemon per call
    const response = await fetch(nextUrl || url) // ? If nextUrl is passed, use it, else use the default url
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPokemonDetailByUrl(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getPokemonById(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
