import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {movData} from './ListMovies';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theatre} from './threatresList';
import Modal from 'react-native-modal';
export default function ShowLandingPage(props: any) {
  const loc = props.route.params.item;
  //console.log(loc);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Image source={loc.image} style={styles.image} />
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
          data={theatre}
          renderItem={({item}) => (
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
                  {item.title}
                </Text>
              </View>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={item.timings}
                  renderItem={({item}) => (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 16,
                          marginTop: 8,
                        }}>
                        <TouchableOpacity onPress={() => setVisible(true)}>
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
                <Modal
                  style={{width: '100%', marginBottom: 0, marginLeft: 0}}
                  onBackButtonPress={() => {
                    setVisible(false);
                  }}
                  isVisible={visible}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      height: 600,
                      backgroundColor: 'white',
                      width: '100%',
                    }}>
                    <Text style={{marginLeft: 16, marginTop: 24, fontSize: 16}}>
                      {item.title}
                    </Text>
                  </View>
                </Modal>
              </View>
            </View>
          )}
        />
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
