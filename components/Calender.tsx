import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Date from "./Date";

const Calender = ({selected,onSelectDate}:any) => {
  const [dates, setDates] = useState([]);
  const getDates = () => {
    const myDates: any = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
  };
  useEffect(() => {
    getDates();
  }, []);
  return (
    <View>
      <ScrollView horizontal>
        {dates.map((date, index) => (
          <Date
            date={date}
            key={index}
            selected={selected}
            onSelectDate={onSelectDate}
            >
          </Date>
        ))}
      </ScrollView>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({});