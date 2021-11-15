import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../../hooks/useAuth'
import { USER, USER_DETAILS } from '../../utils/userBD'

export function LoginForm() {
  const [error, setError] = useState('')
  const { login } = useAuth()

  // * Formik configuration
  const formik = useFormik({
    initialValues: initialValues(), // * Initial values
    validationSchema: Yup.object(validationSchema()), // * Validation schema
    validateOnChange: false, // * Show the validation messages only when the user press the submit button
    // * Submit handler
    onSubmit: ({ username, password }) => {
      if (username === USER.username && password === USER.password) {
        setError('')
        login(USER_DETAILS)
      } else {
        setError('Invalid username or password')
      }
    },
  })

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        style={styles.input}
        placeholder='User Name'
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button style={styles.button} title='Log in' onPress={formik.handleSubmit} />
      {formik.errors && (
        <Text style={styles.error}>{formik.errors.username || formik.errors.password}</Text>
      )}
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

// ! Initial values for Formik
function initialValues() {
  return {
    username: '',
    password: '',
  }
}
// ! Validation values using Yup
function validationSchema() {
  return {
    username: Yup.string()
      .required('User name is required')
      .min(3, 'User name must be at least 3 characters'), // ? The message is displayed when the field is empty or the length of the field is less than 3 characters
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be at least 3 characters'), // ? The message is displayed when the field is empty or the length of the field is less than 3 characters
  }
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 27,
  },
  input: {
    height: 40,
    marginBottom: 24,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    paddingTop: 12,
    borderRadius: 10,
    height: 40,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
})
