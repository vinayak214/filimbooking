import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{ marginBottom: 55 }}>
            <ImageBackground
                style={{ height: 200 }}
                source={{ uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00022376.jpg?v=4" }}>
                <Pressable style={{
                    height: 90,
                    width: "90%",
                    backgroundColor: 'white',
                    borderRadius: 5,
                    margin: 10,
                    top: 150,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: 10

                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>Releasing in 1 days</Text>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: "700", marginVertical: 5 }}>CUSTODY</Text>
                            <Text style={{ color: 'gray', fontSize: 15, fontWeight: "500" }}>U/A .TELUGU</Text>
                        </View>
                        <Pressable style={{ backgroundColor: '#ffc40c', borderRadius: 5, padding: 10, marginRight: 10 }}>
                            <Text>BOOK</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})