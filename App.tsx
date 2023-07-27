import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './navigation/StackNavigator'
import { PlaceProvider } from './Context/PlaceContext'

const App = () => {
  return (
    <PlaceProvider>
      <Navigation />
    </PlaceProvider>
  )
}

export default App

const styles = StyleSheet.create({})