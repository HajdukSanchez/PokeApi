import React from 'react'
import PropTypes from 'prop-types'
import { capitalize } from 'lodash'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
// * Utils
import { getColorByType } from '../../utils/getColorByType'

export function PokemonCard({ pokemon }) {
  const bgStyles = {
    // ? Styles for card background
    backgroundColor: getColorByType(pokemon.type.toLowerCase()) || '#fff',
    ...styles.bgStyles,
  }

  const goToPokemon = () => {
    console.log(`Go to pokemon ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}># {`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
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
    type: '',
  },
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
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
    flex: 1,
    borderRadius: 8,
    padding: 10,
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
