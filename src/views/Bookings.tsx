import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useSelector} from 'react-redux';

export default function Bookings(props: any) {
  const movData = useSelector((store: any) => store.ChangeMovieData).MovieData;
  const varTimeId = useSelector(
    (store: any) => store.ChangeVaribleTimeId.varTimeId,
  );
  const costID = useSelector((store: any) => store.ChangeTotalCost.costID);
  const movieId = useSelector((store: any) => store.ChangeMovieId.movieId);
  const status = useSelector(
    (store: any) => store.ChangeBookingStatus.isBookingSuccess,
  );
  const dayDate = useSelector((store: any) => store.ChangeDayDate);
  const dateId = useSelector((store: any) => store.ChangeDateIndex).dateIndex;
  const seatFinal = useSelector(
    (store: any) => store.ChangeSeatSelected,
  ).selectedSeats;
  //console.log(movData);
  console.log('bookingStatus', status);
  if (status === true) {
    return (
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Movies')}>
            <AntDesign
              name="arrowleft"
              size={16}
              color={'black'}
              style={styles.pina}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 130,
            fontSize: 18,
            fontWeight: '600',
          }}>
          Ticket Booked
        </Text>
        <Image source={{uri: movData[movieId].image}} style={styles.image} />

        <Text
          style={{
            marginTop: 16,
            marginLeft: 16,
            fontSize: 20,
            fontWeight: '600',
          }}>
          {movData[movieId].title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtlan}>{movData[movieId].language}</Text>
          <Text style={styles.textU}> U/A</Text>
          <Text style={styles.txtlan}>{movData[movieId].year}</Text>
          <Text style={styles.txtlan}>{movData[movieId].genre}</Text>

          <Text style={styles.txtlan}>{movData[movieId].duration}</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 16,
            width: '92%',
            marginLeft: 16,
            borderColor: '#E9ECF0',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
            }}>
            Date
          </Text>
          <Text
            style={{
              marginLeft: 270,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
            }}>
            Show Time
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 16,
            }}>
            {dayDate[dateId].date}
          </Text>
          <Text
            style={{
              marginRight: 16,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 16,
            }}>
            {varTimeId}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 16,
            width: '92%',
            marginLeft: 16,
            borderColor: '#E9ECF0',
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            Screen
          </Text>
          <Text
            style={{
              marginRight: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            4
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            Seats {' ('}
            {costID / 300}
            {')'}
          </Text>
          <Text
            style={{
              marginRight: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            {seatFinal}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            Ticket No.
          </Text>
          <Text
            style={{
              marginRight: 16,
              fontSize: 12,
              fontWeight: '400',
              marginTop: 16,
              color: '#706E6B',
            }}>
            {Math.floor(Math.random() * 10000)}
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 16,
            width: '92%',
            marginLeft: 16,
            borderColor: '#E9ECF0',
          }}
        />
        <View>
          <Image
            source={require('../images/QR.png')}
            style={{marginLeft: 138, marginTop: 24}}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Text style={{marginLeft: 150}}>No ticket Booked </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 20,
    padding: 7,
    marginStart: 7,
    marginTop: 5,
    fontWeight: 'bold',
  },
  txtlan: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    marginTop: 8,
    height: 18,
    marginRight: 4,
  },
  textU: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.21,
    marginTop: 10,
    width: 38,
    height: 15,
    marginLeft: 4,
    backgroundColor: 'gray',
  },
  image: {
    width: '100%',
    height: 164,
    marginTop: 20,
  },
  pina: {
    marginLeft: 16,

    height: 40,
    fontSize: 40,
    width: 50,
    marginTop: 50,
  },
});
