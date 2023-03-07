import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import book_ticket from './Ticket_booked';
export default function Book_ticket({navigation}) {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.textStyle}>Ticket Booked Successfully</Text>
      <Image style={styles.img} source={require('../images/yay.png')} />
      <TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
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

      {/* <View> */}
      {/* <Modal
        style={{
          width: '100%',
          marginBottom: 0,
          marginLeft: 0,
        }}
        visible={true}
        // swipeDirection="down"
        // onSwipeComplete={toggleModal}
      >
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 600,
            backgroundColor: 'white',
            width: '100%',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}>
          <Text
            style={{
              width: 222,
              height: 20,
              marginLeft: 16,
              marginTop: 24,
              fontSize: 16,
            }}>
            hoja bhai
          </Text>
        </View>
      </Modal> */}
      {/* </View> */}
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
