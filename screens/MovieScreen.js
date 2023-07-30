import { Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState, useContext } from 'react'
import Calender from '../components/Calender';
import moment from 'moment';
import { Place } from '../Context/PlaceContext';

const MovieScreen = () => {
  const navigation = useNavigation();
  const today      = moment().format("YYYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const { selectedCity, setSelectedCity } = useContext(Place);
  const [mall, setMall] = useState([]);


  const malls = [
    {
      id: "0",
      place: "Bangalore",
      galleria: [
        {
          id: "10",
          name: "PVR MSR Elements Mall Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "11",
          name: "PVR Vaishnavi Sapphire Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "12",
          name: "PVR Orion Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "13",
          name: "PVR Aura Park Square Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "14",
          name: "PVR The Cinema GT World Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "15",
          name: "PVR VEGA Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "1",
      place: "Hyderabad",
      galleria: [
        {
          id: "20",
          name: "PVR Atrium Gachibowli Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "21",
          name: "PVR Icon Hitech Madhapur Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "22",
          name: "PVR Preston Prime, Gachibowli Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "23",
          name: "PVR Mallapur Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "24",
          name: "PVR Next Galleria Mall Panjagutta",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "25",
          name: "PVR RK Cineplex Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Delhi-NCR",
      galleria: [
        {
          id: "30",
          name: "PVR Select City Walk Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "31",
          name: "PVR Anupam Saket Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "32",
          name: "PVR ECX Chanakyapuri Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "33",
          name: "PVR Promenade Vasant Kunj Delhi ",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "34",
          name: "PVR Rivoli Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "35",
          name: "PVR Crown Plaza Faridabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "3",
      place: "Ahmedabad",
      galleria: [
        {
          id: "34",
          name: "PVR Motera Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "41",
          name: "PVR Arved Transcube Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "42",
          name: "Cinemax Shiv Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "43",
          name: "PVR Acropolis Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "44",
          name: "Cinemax Dev Arc Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "4",
      place: "Chennai",
      galleria: [
        {
          id: "50",
          name: "PVR SKLS Galaxy Mall, Red Hills Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "51",
          name: "SPI S2 Perambur Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "52",
          name: "PVR VR Chennai Anna Nagar ",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "53",
          name: "PVR Ampa Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "54",
          name: "SPI Palazzo Nexus Vijaya Mall, Vadapalani Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "5",
      place: "Kolkata",
      galleria: [
        {
          id: "60",
          name: "PVR Avani Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "61",
          name: "PVR Diamond Plaza Jassore Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "62",
          name: "PVR Manisquare Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "63",
          name: "PVR Uniworld Downtown Mall, New Town",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "6",
      place: "Jaipur",
      galleria: [
        {
          id: "70",
          name: "PVR Mall Of Jaipur",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "71",
          name: "PVR LUXE MALL OF JAIPUR",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "72",
          name: "PVR Manisquare",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "73",
          name: "PVR Uniworld Downtown Mall, New Town",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "7",
      place: "Lucknow",
      galleria: [
        {
          id: "80",
          name: "PVR Phoenix Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "81",
          name: "PVR Sahara Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "82",
          name: "PVR Sahu Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "83",
          name: "PVR Singapore Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "84",
          name: "PVR SUPERPLEX Lulu Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
  ];


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: "#F5F5F5",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    })
  }, []);
  const route = useRoute();

  // console.log("selectedDate!!" + selectedDate)

  // console.log("mall!!" + mall)

  return (
    <View>
      <ScrollView contentContainerStyle={{ marginLeft: 10 }}>
        <Calender selected={selectedDate} onSelectDate={setSelectedDate}></Calender>
      </ScrollView>
      {malls
        .filter((item) => item.place === selectedCity)
        .map((item) =>
          item.galleria.map((multiplex, index) => (
            <Pressable
              key={index}
              onPress={() => setMall(multiplex.name)}
              style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>{multiplex.name}</Text>
              {mall.includes(multiplex.name) ? (
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={3}
                  data={multiplex.showtimes}
                  renderItem={({ item }) => (
                    <Pressable
                    onPress={()=> navigation.navigate("TheatreScreen",{
                      showTime:item,
                      mall:mall,
                      selectedDate: selectedDate,
                    })}
                      style={{
                        borderColor: "green",
                        borderWidth: 0.7,
                        padding: 5,
                        width: 80,
                        borderRadius: 5,
                        margin: 8,
                      }}>
                      <Text
                        style={{
                          textAlign: "center",
                          color: "green",
                          fontSize: 15,
                          fontWeight: "500",
                        }}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  )}>
                </FlatList>
              ) :
                null
              }
            </Pressable>
          ))
        )}
    </View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})
