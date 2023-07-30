import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useContext } from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const TheatreScreen = () => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);
  const [selectedSeats, setSelectedSeats] = useState<any>([]);



  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 15, color: 'black', marginHorizontal: 10 }}>{route.params.mall}</Text>
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

  const handleSeatPress = (row: any, seat: any) => {

    console.log("row is::" + row + "seat is " + seat);

    const isSelectedSeat = selectedSeats.some((selectedSeats: any) => selectedSeats.row === row && selectedSeats.seat === seat);

    console.log("isSelected!!" + isSelectedSeat);

    if (isSelectedSeat) {
      setSelectedSeats((prevState: any) =>
        prevState.filter(
          (selectedSeats: any) =>
            selectedSeats.row !== row || selectedSeats.seat !== seat
        )
      );
    } else {
      /** Add New entries to the array if it is not existing */
      setSelectedSeats((prevState: any) => [...prevState, { row, seat }]);
    }
  };
  console.log("selectedSeats::" + JSON.stringify(selectedSeats));

  console.log(selectedSeats);
  
  const pay = () => {
    const updatedRows = [...rows];
    selectedSeats.forEach((seat: any) => {
      const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
      console.log("row Index", rowIndex);
      const seatIndex = updatedRows[rowIndex].seats.findIndex((s) => s.seat === seat.seat);
      console.log("seat Index", seatIndex);
      updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    });

    setRows(updatedRows);
    setSelectedSeats([]);

    // navigation.navigate("Food", {
    //   mall: route.params.mall,
    //   showtime: route.params.showtime,
    //   name: route.params.name,
    //   selectedDate: route.params.selectedDate,
    //   seats: result,
    //   rows: route.params.rows,
    //   selectedSeats: selectedSeats,
    //   docId: route.params.docId,
    // });
  };


  const renderSeats = (): any => {
    return rows.map((row, index) => {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <View style={{ width: 40, marginRight: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>{row.row}</Text>
          </View>
          <ScrollView horizontal>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((item) => (
                <Pressable
                  onPress={() =>
                    handleSeatPress(row.row, item.seat)
                  }
                  style={[styles.seat, selectedSeats.some((selectedSeats: any) => selectedSeats.row === row.row && selectedSeats.seat === item.seat)
                    && styles.selectedSeat,item.bookingStatus === "disabled" && styles.bookedSeat,
                  ]}
                  disabled={item.bookingStatus === "disabled"}
                  >
                  <Text>{item.seat}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      )
    })
  }
  return (
    <View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>SCREEN THIS WAY</Text>
        <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold' }}>CLASSIC (240)</Text>
      </View>
      {renderSeats()}
      <View style={{
        flexDirection: 'row',
        backgroundColor: "#D8D8D8",
        marginTop: 10,
        justifyContent: 'center',
        gap: 30
      }}>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="#ffc40c"
          />
          <Text style={{ color: 'black' }}>selected</Text>
        </View>

        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="white"
          />
          <Text style={{ color: 'black' }}>Vacant</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color="gray"
          />
          <Text style={{ color: 'black' }}>Booked</Text>
        </View>
      </View>

      <Pressable
        onPress={pay}
        style={{
          backgroundColor: "#E0E0E0",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
         <Text style={{fontSize:15,fontWeight:"500"}}>Proceed</Text>
         <Text style={{textAlign:"center"}}>PAY 1OO</Text>

      </Pressable>
    </View >
  )
}

export default TheatreScreen

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C0C0C0",
  },
  selectedSeat: {
    backgroundColor: "#FFD700",
    borderColor: "transparent",
  },
  bookedSeat: {
    backgroundColor: "#989898",
    borderColor: "transparent",
  },
})