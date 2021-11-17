import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function NotLogged() {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Please login for see your favorites Pokemons</Text>
      <Button title='Go to Login' onPress={() => navigation.navigate('Account')} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
})
