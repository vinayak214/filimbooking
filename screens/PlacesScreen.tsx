import { Pressable, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, ImageBackground } from 'react-native'
import React, { useLayoutEffect, useEffect, useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Place } from '../Context/PlaceContext'


const PlacesScreen = () => {

    const navigation: any = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 15, letterSpacing: 1 }}>CHANGE LOCATION</Text>
                </Pressable>
            ),
            headerStyle: {
                backgroundColor: "#F5F5F5",
                shadowColor: "transparent",
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3
            },
        })
    }, [])


    const { selectedCity, setSelectedCity } = useContext<any>(Place);

    const places: any = [
        {
            id: "0",
            place: "Bangalore",
            image:
                "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "1",
            place: "Ahmedabad",
            image:
                "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "2",
            place: "Chennai",
            image:
                "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "3",
            place: "Delhi - NCR",
            image:
                "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "4",
            place: "Hyderabad",
            image:
                "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "5",
            place: "Kolkata",
            image:
                "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "6",
            place: "Jaipur",
            image:
                "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: "7",
            place: "Lucknow",
            image:
                "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
    ];

    const selectCity = (city: any) => {
        setSelectedCity(city)
        setTimeout(() => {
            navigation.navigate("HomeScreen")
        }, 800)

    }
    return (
        <SafeAreaView>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 30,
                padding: 5,
                justifyContent: 'space-between',
                margin: 10
            }}>
                <TextInput placeholder='Search Your City'></TextInput>
                <Feather name="search" size={24} color="black" />
            </View>
            <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text>Selected Location:</Text>
                <Text>Selected City</Text>
            </View>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={places}
                renderItem={({ item, index }) =>
                    <Pressable
                        onPress={() => selectCity(item.place)}
                        style={{ marginHorizontal: 10, marginVertical: 20 }} >
                        <ImageBackground
                            imageStyle={{ borderRadius: 8 }}
                            style={{ width: 160, height: 100 }}
                            source={{ uri: item.image }}>
                            {selectedCity == item.place && (
                                <View style={{ marginLeft: 7, marginTop: 7 }}>
                                    <AntDesign name='checkcircle' size={24} color="white"></AntDesign>
                                </View>
                            )}
                            <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 7, marginLeft: 10 }}>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}>{item.place}</Text>
                            </View>
                        </ImageBackground>

                    </Pressable>
                }
                keyExtractor={item => item.id}
            ></FlatList>
        </SafeAreaView>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({})