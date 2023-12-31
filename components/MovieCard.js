import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable, Dimensions, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const MovieCard = ({ value }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Pressable style={{
                flex: 1,
                marginVertical: 15,
                marginHorizontal: 10,
                borderRadius: 5,
                height: Dimensions.get("window").height / 2.5,
                width: (Dimensions.get("window").width - 80) / 2,
            }}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original/${value?.poster_path}` }}
                    style={{
                        width: "100%",
                        height: "70%",
                        padding: 10,
                        resizeMode: 'contain'
                    }}
                />
                <View>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "400", marginTop: 6 }}>{value.title.substr(0,15)}</Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "400", marginTop: 6 }}>U/A .{value.original_language}</Text>
                    <Pressable 
                     onPress={()=>navigation.navigate("MovieScreen",{
                        title:value.title,
                        movieID:value.id
                     })}
                     style={{
                        backgroundColor: '#ffc40c',
                        borderRadius: 5,
                        padding: 10,
                        alignItems: 'center',
                        width: 100,
                        marginTop:4
                    }}>
                        <Text style={{textAlign:'center',color:'black',fontSize:15,fontWeight:"500"}}>BOOK</Text>
                    </Pressable>
                </View>
            </Pressable>

        </SafeAreaView>
    )
}

export default MovieCard

const styles = StyleSheet.create({})