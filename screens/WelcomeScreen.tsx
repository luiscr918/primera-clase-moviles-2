import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const WelcomeScreen=({navigation}:any)=> {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button
      title='Ir a Login'
      onPress={()=>navigation.navigate("Login")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})