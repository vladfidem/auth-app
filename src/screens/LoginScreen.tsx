import React from 'react'
import { Button, StyleSheet, TextInput, Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../utils/validation/authSchema.ts'
import { useLoginMutation } from '../hooks/useLoginMutation.ts'

export const LoginScreen: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const { mutate, isPending, isError, error } = useLoginMutation()

  const onSubmit = (data: { username: string; password: string }) => {
    mutate(data)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              autoCapitalize="none"
              placeholder="Username"
            />
          )}
          name="username"
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

        <Controller
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

        <Button title="Login" onPress={handleSubmit(onSubmit)} />

        {isPending && <ActivityIndicator style={styles.loadingIndicator} />}
        {isError && error && <Text style={styles.errorText}>Login failed: {error.message}</Text>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loadingIndicator: {
    marginTop: 10,
  },
})
