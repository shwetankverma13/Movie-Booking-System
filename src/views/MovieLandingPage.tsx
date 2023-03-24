import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {setBookingStatus} from '../redux/action/setBookingStatus';
import {setCost} from '../redux/action/setCost';
import {setSeats} from '../redux/action/setSeats';
import {setVarId} from '../redux/action/setVarId';
import {setVarTimeId} from '../redux/action/setVarTimeId';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fetchDate, fetchDateSuccess} from '../redux/action/fetchDate';
import {setDateIndex} from '../redux/action/setDateIndex';
import TomEpic from '../epics/tomDis';
import axios from 'axios';
import seatsEpic from '../epics/getSeats';
import {setSelectedSeats} from '../redux/action/setSelectedSeats';

export default function ShowLandingPage(props: any) {
  //console.log(props);
  const movDatas = useSelector((store: any) => store.ChangeMovieData).MovieData;
  const loc = props.route.params.item;
  const movTheatre = useSelector(
    (store: any) => store.ChangeTheatreData,
  ).TheatreData;
  const varId = useSelector((store: any) => store.ChangeVaribleId.varId);
  const varTimeId = useSelector(
    (store: any) => store.ChangeVaribleTimeId.varTimeId,
  );
  const movieId = useSelector((store: any) => store.ChangeMovieId.movieId);
  const dispatch = useDispatch();
  const [visible, SetVisible] = useState(false);

  const toggleModal = () => {
    SetVisible(!visible);
  };

  const arr = useSelector((store: any) => store.ChangeSeatId);
  let activeSeatId = arr.clickSeat;
  const movieStatus = useSelector(
    (store: any) => store.ChangeBookingStatus.isBookingSuccess,
  );
  const dayDate = useSelector((store: any) => store.ChangeDayDate);
  // console.log('kjhjk', dayDate);
  const dateId = useSelector((store: any) => store.ChangeDateIndex).dateIndex;
  // console.log(dateId);
  //console.log(movDatas[movieId].title);
  TomEpic(movDatas[movieId].title, dispatch);
  const tomData = useSelector(
    (store: any) => store.ChangeTheatreOfMovieData,
  ).tomData;
  //console.log(tomData);
  const seat_booked = useSelector(
    (store: any) => store.ChangeBookedSeat,
  ).booked;

  const dateOnClick = (index: number) => {
    dispatch(fetchDate(index));
    dispatch(setDateIndex(index));
    console.log(dayDate[dateId].date);
    // console.log(langId);
    // console.log(lang);
  };
  const handleSeatChange = (row: number, col: number) => {
    if (activeSeatId[row][col] === -1) {
      Alert.alert('Seat already booked');
    } else if (activeSeatId[row][col] === 1) activeSeatId[row][col] = 0;
    else activeSeatId[row][col] = 1;
    dispatch(setSeats(activeSeatId));
    console.log(activeSeatId[row][col], row, col);
    calCost();
  };
  const calCost = () => {
    let count: number = 0;

    for (let i: number = 0; i < 11; i++) {
      for (let j: number = 0; j < 13; j++) {
        if (activeSeatId[i][j] === 1) {
          count += 1;
        }
      }
    }
    count = count * 300;

    console.log('count', count);
    console.log('detail', movieId);
    return count;
  };
  const handleSeat = () => {
    let seat = '';
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 13; j++) {
        if (activeSeatId[i][j] === 1) {
          if (j < 7) {
            seat += String.fromCharCode(65 + i) + '' + (j + 1) + ', ';
          } else {
            seat += String.fromCharCode(65 + i) + '' + j + ', ';
          }
        }
      }
    }

    console.log(seat);
    console.log('movieId', movieId);
    seat = seat.substring(0, seat.length - 2);
    console.log(varTimeId);
    //console.log(movData[movieId].id);
    return seat;
  };

  // was fetching earlier the theatreName but needed to post the theatreId. Thats why made one iteration.
  const getTheatreId = (nam: any) => {
    for (let i = 0; i < movTheatre.length; i++) {
      // console.log(movTheatre[i].id);
      if (movTheatre[i].title + ', ' + movTheatre[i].location === nam) {
        console.log(movTheatre[i].id);
        return movTheatre[i].id;
      }
    }
  };
  const getTimeId = (tim: any) => {
    if (tim === '2:00 PM') return '1';
    if (tim === '5:30 PM') return '2';
    if (tim === '7:00 PM') return '3';
    if (tim === '9:30 PM') return '4';
  };

  let nameTitle: string;
  nameTitle = '';
  let i: number;
  let j: number;
  const row = [];
  for (i = 0; i < 11; i++) {
    const col = [];
    for (j = 0; j < 13; j++) {
      let rID: number = i;
      let cID: number = j;

      if (j != 6) {
        col.push(
          <TouchableOpacity
            key={i + ' ' + j}
            onPress={() => handleSeatChange(rID, cID)}>
            <View
              style={[
                {
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  margin: 5,
                  // backgroundColor: '#F7F9FA',
                  borderRadius: 4,
                  borderColor: '#D7DCE0',
                },
                activeSeatId[rID][cID] === -1
                  ? {backgroundColor: 'grey', borderColor: '#D7DCE0'}
                  : activeSeatId[rID][cID] === 1
                  ? {backgroundColor: '#EBF7F1', borderColor: '#3BB273'}
                  : {backgroundColor: '#F7F9FA', borderColor: '#D7DCE0'},
              ]}
            />
          </TouchableOpacity>,
        );
      } else {
        col.push(
          <TouchableOpacity key={i + ' ' + j}>
            <View
              style={{
                width: 10,
                height: 10,
                margin: 5,
              }}
            />
          </TouchableOpacity>,
        );
      }
    }
    row.push(
      <View key={i + ' '} style={{flexDirection: 'row'}}>
        {col}
      </View>,
    );
  }

  return (
    <View style={{flex: 1}}>
      {/* <Image source={{uri: movDatas[movieId].image}} style={styles.image} /> */}
      <ImageBackground
        source={{uri: movDatas[movieId].image}}
        style={styles.image}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
            //console.log(props.navigation.goBack());
          }}>
          <AntDesign
            name="arrowleft"
            size={25}
            color={'#FFFFFF'}
            style={{
              marginTop: 16,
              marginLeft: 16,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.txtl}>{movDatas[movieId].title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txtlan}>{movDatas[movieId].language}</Text>
        <Text style={styles.textU}> U/A</Text>
        <Text style={styles.txtlan}>{movDatas[movieId].year}</Text>
        <Text style={styles.txtlan}>{movDatas[movieId].genre}</Text>

        <Text style={styles.txtlan}>{movDatas[movieId].duration}</Text>
      </View>
      <Text style={styles.desc}>{movDatas[movieId].description}</Text>
      <View style={styles.arrow}>
        <TouchableOpacity>
          <FontAwesome name="chevron-down" color={'#444'} size={12} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 12,
          marginTop: 20,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <FlatList
          data={dayDate}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => (
            <View>
              <View
                style={{
                  borderBottomColor:
                    dayDate[dateId].date === item.date ? '#6A1B9A' : 'white',
                  borderBottomWidth: 2,
                }}>
                <TouchableOpacity onPress={() => dateOnClick(index)}>
                  <Text
                    style={[
                      styles.date,
                      {fontWeight: item.blur ? '200' : '600'},
                      {
                        color:
                          dayDate[dateId].date === item.date
                            ? '#6A1B9A'
                            : item.color,
                      },
                    ]}>
                    {item.date}
                  </Text>
                  <Text
                    style={[
                      styles.date,
                      {fontWeight: item.blur ? '200' : '600'},
                      {
                        color:
                          dayDate[dateId].date === item.date
                            ? '#6A1B9A'
                            : item.color,
                      },
                      {
                        marginBottom: 8,
                      },
                    ]}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 0,
        }}
      />
      <View style={{flex: 1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={tomData}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={alpha => (
            // arr.push({title:item.title});
            <View>
              <View>
                <Text
                  style={{
                    marginTop: 16,
                    marginLeft: 16,
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 18,
                  }}>
                  {alpha.item.theatreName}
                </Text>
              </View>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={alpha.item.time}
                  keyExtractor={(item, index) => {
                    return index.toString() + 'nested';
                  }}
                  renderItem={({item, index}) => (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 16,
                          marginTop: 8,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            dispatch(setVarId(alpha.item.theatreName));
                            console.log(varId);
                            dispatch(setVarTimeId(item));
                            let tidd = getTheatreId(alpha.item.theatreName);
                            let tiii = getTimeId(item);

                            seatsEpic(
                              movDatas[movieId].id,
                              tidd,
                              tiii,
                              dispatch,
                              activeSeatId,
                            );
                            SetVisible(true);
                          }}>
                          <Text
                            style={{
                              marginRight: 20,
                              borderWidth: 2,
                              width: 75,
                              height: 35,
                              borderTopWidth: 8,
                              borderLeftWidth: 10,
                              borderColor: 'green',
                            }}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        />

        <Modal
          style={{width: '100%', marginBottom: 0, marginLeft: 0}}
          onBackdropPress={() => SetVisible(false)}
          onBackButtonPress={() => SetVisible(false)}
          isVisible={visible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 673,
              backgroundColor: 'white',
              width: '100%',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <Text
              style={{
                width: 600,
                height: 20,
                marginLeft: 16,
                marginTop: 24,
                fontSize: 16,
              }}>
              {varId}
            </Text>
            <View
              style={{
                marginLeft: 16,
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                {loc.title} • {loc.language} • {varTimeId}
              </Text>
              <TouchableOpacity style={{marginLeft: 4, marginTop: 3}}>
                <FontAwesome name="chevron-down" color={'#444'} size={8} />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 60,
                  marginLeft: 140,
                  color: '#D7DCE0',
                }}>
                SCREEN THIS WAY
              </Text>
            </View>
            <View
              style={{
                width: 260,
                height: 14,
                borderWidth: 1,
                margin: 5,
                backgroundColor: '#F7F9FA',
                marginLeft: 60,
                borderColor: '#D7DCE0',
              }}></View>
            <View style={{marginLeft: 5, marginTop: 40}}>{row}</View>
            <TouchableOpacity
              onPress={() => {
                if (calCost() === 0) {
                  Alert.alert('Please Select a Seat to proceed further');
                } else {
                  dispatch(setBookingStatus(true));
                  // console.log(varTimeId);
                  axios.post('http://localhost:9090/seats/', {
                    movieId: movDatas[movieId].id,
                    theatreId: getTheatreId(varId),
                    seatNum: handleSeat(),
                    time: getTimeId(varTimeId),
                  });
                  console.log(movieStatus);
                  dispatch(setCost(calCost()));
                  dispatch(setSelectedSeats(handleSeat()));
                  props.navigation.navigate('Book_ticket');
                  SetVisible(!visible);
                }
              }}
              style={{
                marginBottom: 0,
                marginTop: 35,
                marginLeft: '10%',
                borderRadius: 8,
                backgroundColor: 'purple',
                width: '80%',
                height: 48,
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  marginTop: 10,
                  textTransform: 'capitalize',
                  fontWeight: '600',
                }}>
                BOOK ₹ {calCost()}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 164,
    marginTop: 35,
  },
  txtl: {
    width: 200,
    height: 24,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    marginLeft: 16,
    marginTop: 16,
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    marginTop: 8,
    marginLeft: 16,
    fontWeight: '400',
    fontSize: 12,
  },
  arrow: {
    marginLeft: '45%',
    marginTop: 12,
  },
  date: {
    marginRight: 24,
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    marginLeft: 24,
  },
  date3: {
    marginLeft: 4,
    marginRight: 24,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
  },
  date4: {
    marginLeft: 10,
    marginRight: 24,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
  },
  date5: {
    marginLeft: 16,
    marginRight: 24,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '400',
  },
});
