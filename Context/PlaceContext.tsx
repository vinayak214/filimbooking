import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'

type PlaceData = {
    selectedCity: string;
    setSelectedCity:any
};

const Place = createContext<PlaceData | null>(null);

type PlaceProviderProps = {
    children: ReactNode;
};

const PlaceProvider = ({ children }: PlaceProviderProps) => {

    const [selectedCity, setSelectedCity] = useState('')
    return (
        <Place.Provider value={{ setSelectedCity, selectedCity }}>
            {children}
        </Place.Provider>
    )
}

export  {Place,PlaceProvider}

const styles = StyleSheet.create({})