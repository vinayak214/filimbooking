import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './navigation/StackNavigator'
import { PlaceProvider } from './Context/PlaceContext'
import ModalPortal from "react-native-modals/dist/ModalPortal";


const App = () => {
  return (
    <PlaceProvider>
      <Navigation />
      <ModalPortal />
    </PlaceProvider>
  )
}

export default App

const styles = StyleSheet.create({})