import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Log in</Text>
      <TextInput style={styles.input} placeholder='User Name' autoCapitalize='none' />
      <TextInput
        style={styles.input}
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button style={styles.button} title='Log in' onPress={() => console.log('Enter')} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    margin: 12,
    borderRadius: 10,
  },
})
