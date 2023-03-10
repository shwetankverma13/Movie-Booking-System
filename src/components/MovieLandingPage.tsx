import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {setBookingStatus, setCost, setVarId} from '../redux/action';
import {setVarTimeId} from '../redux/action';
import {setSeats} from '../redux/action';
export default function ShowLandingPage(props: any) {
  //console.log(props);
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
  const costID = useSelector((store: any) => store.ChangeTotalCost.costID);
  const movieStatus = useSelector(
    (store: any) => store.ChangeBookingStatus.isBookingSuccess,
  );
  const handleSeatChange = (row: number, col: number) => {
    if (activeSeatId[row][col]) activeSeatId[row][col] = false;
    else activeSeatId[row][col] = true;
    dispatch(setSeats(activeSeatId));
    console.log(activeSeatId[row][col], row, col);
    let count: number = 0;

    for (let i: number = 0; i < 11; i++) {
      for (let j: number = 0; j < 13; j++) {
        if (activeSeatId[i][j]) {
          count += 1;
        }
      }
    }
    count = count * 300;
    dispatch(setCost(count));
    console.log(count);
    console.log('detail', movieId);
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
          <TouchableOpacity onPress={() => handleSeatChange(rID, cID)}>
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
                activeSeatId[rID][cID]
                  ? {backgroundColor: '#EBF7F1', borderColor: '#3BB273'}
                  : {backgroundColor: '#F7F9FA', borderColor: '#D7DCE0'},
              ]}
            />
          </TouchableOpacity>,
        );
      } else {
        col.push(
          <TouchableOpacity>
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
    row.push(<View style={{flexDirection: 'row'}}>{col}</View>);
  }

  return (
    <View style={{flex: 1}}>
      <Image source={{uri: loc.image}} style={styles.image} />

      <Text style={styles.txtl}>{loc.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txtlan}>{loc.language}</Text>
        <Text style={styles.textU}> U/A</Text>
        <Text style={styles.txtlan}>{loc.year}</Text>
        <Text style={styles.txtlan}>{loc.genre}</Text>

        <Text style={styles.txtlan}>{loc.duration}</Text>
      </View>
      <Text style={styles.desc}>{loc.description}</Text>
      <View style={styles.arrow}>
        <TouchableOpacity>
          <FontAwesome name="chevron-down" color={'#444'} size={12} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 20}}>
        <Text style={styles.date}> 04 Feb</Text>
        <Text style={styles.date}> 05 Feb</Text>
        <Text style={styles.date}> 06 Feb</Text>
        <Text style={styles.date}> 07 Feb</Text>
        <Text style={styles.date}> 08 Feb</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 12, marginTop: 4}}>
        <Text style={styles.date}> TODAY</Text>
        <Text style={styles.date}> TOMO</Text>
        <Text style={styles.date3}> MON</Text>
        <Text style={styles.date4}> TUE</Text>
        <Text style={styles.date5}> WED</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 8,
        }}
      />
      <View style={{flex: 1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={movTheatre}
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
                  {alpha.item.title} , {alpha.item.location}
                </Text>
              </View>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={alpha.item.timings}
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
                            SetVisible(true);
                            dispatch(setVarId(parseInt(alpha.item.id) - 1));
                            dispatch(setVarTimeId(index));
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
              height: 623,
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
              {movTheatre[varId].title} , {movTheatre[varId].location}
            </Text>
            <View
              style={{
                marginLeft: 16,
                flexDirection: 'row',
                marginTop: 4,
              }}>
              <Text style={{fontSize: 12, fontWeight: '400'}}>
                {loc.title} • {loc.language} •{' '}
                {movTheatre[varId].timings[varTimeId]}
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
                dispatch(setBookingStatus(true));
                console.log(movieStatus);
                props.navigation.navigate('Book_ticket');
                SetVisible(!visible);
              }}
              style={{
                marginBottom: 0,
                marginTop: 20,
                marginLeft: '10%',
                borderRadius: 8,
                backgroundColor: 'purple',
                width: '80%',
                height: 38,
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  marginTop: 8,
                  textTransform: 'capitalize',
                  fontWeight: '600',
                }}>
                BOOK ₹ {costID}
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 164,
    marginTop: 0,
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
    fontWeight: '400',
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
