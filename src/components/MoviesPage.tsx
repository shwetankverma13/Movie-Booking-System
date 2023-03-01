import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
//import {movData} from './ListMovies';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import Seats from './Seats';
import {useSelector} from 'react-redux';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();
export default function ShowMPage(props: any) {
  const loc = props.route.params.item;
  const movData = useSelector((store: any) => store.ChangeMovie);
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Image source={movData.image} style={styles.image} />
        <Text style={styles.txtl}>{movData.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txtlan}>{movData.language}</Text>
          <Text style={styles.textU}> U/A</Text>
          <Text style={styles.txtlan}>{movData.year}</Text>
          <Text style={styles.txtlan}>{movData.genre}</Text>

          <Text style={styles.txtlan}>{movData.duration}</Text>
        </View>
        <Text style={styles.desc}>{movData.description}</Text>
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
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
            }}>
            Urvasi Cinemas, Shivaji nagar
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 8}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Seats')}>
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
                2:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'orange',
                }}>
                {' '}
                5:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                7:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                9:30 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
            }}>
            PVR, Forum Mall
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 8}}>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'gray',
                }}>
                2:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'orange',
                }}>
                {' '}
                5:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                7:00 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
            }}>
            Cinepolis, Majestic
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 8}}>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'gray',
                }}>
                2:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'orange',
                }}>
                {' '}
                5:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                7:00 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
            }}>
            INOX, 1mg
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 8}}>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'gray',
                }}>
                2:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'orange',
                }}>
                {' '}
                5:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                7:00 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 18,
            }}>
            Cinepolis, Majestic
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 16, marginTop: 8}}>
            <TouchableOpacity>
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
                2:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginRight: 20,
                  borderWidth: 2,
                  width: 75,
                  height: 35,
                  borderTopWidth: 8,
                  borderLeftWidth: 10,
                  borderColor: 'orange',
                }}>
                {' '}
                5:30 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                7:00 PM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
                {' '}
                9:30 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    width: 35,
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
