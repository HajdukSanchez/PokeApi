import React, { useState, useCallback } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import userAuth from '../../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import { getPokemonFavoritesApi } from '../../api/favorite'

export function UserData() {
  const { auth, logout } = userAuth()
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        ;(async () => {
          const response = await getPokemonFavoritesApi()
          setTotal(size(response))
        })()
      }
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>
          {auth.firstName} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title='Name' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='UserName' text={`${auth.userName}`} />
        <ItemMenu title='Email' text={`${auth.email}`} />
        <ItemMenu title='Total Favorites' text={`${total} Pokemons`} />
      </View>
      <Button title='Log Out' onPress={logout} color='#ff0000' />
    </View>
  )
}

function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.titleMenuItem}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
  },
  titleMenuItem: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
})
