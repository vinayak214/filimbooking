import { StyleSheet, Text, View, SafeAreaView, Pressable, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Text>Hello Vinayak s</Text>,
            headerStyle: {
                backgroundColor: "#F5F5F5",
                shadowColor: "transparent",
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3
            },
            headerRight: () => (
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Ionicons name="location" size={24} color="grey" />
                    <Pressable>
                        <Animated.Text>
                            <Text>Arkansas</Text>
                        </Animated.Text>
                    </Pressable>
                </Pressable>

            )
        })
    }, []);
    return (
        <SafeAreaView>
            <View>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})