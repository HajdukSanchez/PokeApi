import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { map, capitalize } from 'lodash'

export function PokemonStats({ stats }) {
  const barStyles = (number) => {
    return {
      width: `${number}%`,
      backgroundColor: number > 50 ? '#00ff00' : '#ff0000',
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingLeft: 10,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: 'white',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
})
