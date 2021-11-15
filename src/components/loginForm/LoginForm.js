import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function LoginForm() {
  // * Formik configuration
  const formik = useFormik({
    initialValues: initialValues(), // * Initial values
    validationSchema: Yup.object(validationSchema()), // * Validation schema
    validateOnChange: false, // * Show the validation messages only when the user press the submit button
    onSubmit: (values) => {
      // * Submit handler
      console.log(values)
    },
  })

  return (
    <View>
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
      <Text style={styles.error}>{formik.errors.username || formik.errors.password}</Text>
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
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
})
