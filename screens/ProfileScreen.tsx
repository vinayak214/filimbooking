import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <TextInput placeholder='Search Your City'></TextInput>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})