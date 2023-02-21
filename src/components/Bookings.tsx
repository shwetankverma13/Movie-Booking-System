import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import book_ticket from './Ticket_booked';
export default function Bookings() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textStyle}>Ticket Booked Successfully</Text>
      <Image style={styles.img} source={require('../images/yay.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    padding: 7,
    marginStart: 7,
    marginTop: 5,
    fontWeight: 'bold',
  },
  img: {
    height: 300,
    width: 300,
  },
});
