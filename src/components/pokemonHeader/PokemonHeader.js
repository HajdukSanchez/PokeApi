import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getColorByType } from '../../utils/getColorByType'
import { capitalize } from 'lodash'

export function PokemonHeader({ name, image, type, order }) {
  const color = getColorByType(type)
  const bgStyle = [{ backgroundColor: color || '#fff', ...styles.bg }]

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.contentInfo}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 1.5 }],
  },
  contentInfo: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 150,
  },
  image: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
  },
})
