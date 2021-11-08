import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

export function PokemonCard({ pokemon }) {
  const goToPokemon = () => {
    console.log(`Go to pokemon ${pokemon.name}`)
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.order}># {`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

PokemonCard.defaultProps = {
  pokemon: {
    id: 0,
    name: '',
    order: 0,
    image: '',
    type: {
      slot: 0,
    },
  },
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.shape({
      slot: PropTypes.number.isRequired,
      type: PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
    }),
  }).isRequired,
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    padding: 5,
    backgroundColor: 'grey',
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 100,
    height: 100,
  },
  name: {
    color: 'white',
    fontSize: 20,
  },
  order: {
    color: 'white',
    fontSize: 15,
  },
})
