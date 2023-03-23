import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Book_ticket(props: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Bookings')}>
        <Text style={styles.textStyle}>Ticket Booked Successfully</Text>
        <Image style={styles.img} source={require('../images/yay.png')} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Bookings')}>
          <Text
            style={{
              textAlign: 'center',
              color: 'blue',
              fontSize: 14,
              padding: 7,
              marginStart: 7,
              marginTop: 5,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            Ticket Summary
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
