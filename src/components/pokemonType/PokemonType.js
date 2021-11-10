import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { capitalize, map } from 'lodash'
import { getColorByType } from '../../utils/getColorByType'

export function PokemonType({ types }) {
  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{ ...styles.pill, backgroundColor: getColorByType(item.type.name) || '#fff' }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
})
