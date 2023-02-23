import React from 'react';
import Card from './Card';
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

export default function ShowMPage(props) {
  console.log(props.route.params.item);
  console.log(props.route.params.item.genre);
  return (
    <View style={{flex: 1}}>
      {/* <Card item={props.route.params.item} /> */}
      <Image source={props.route.params.item.image} style={styles.image} />
      <Text style={styles.txtl}>{props.route.params.item.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txtlan}>{props.route.params.item.language}</Text>
        <Text style={styles.textU}> U/A</Text>
        <Text style={styles.txtlan}>2021</Text>
        <Text style={styles.txtlan}>{props.route.params.item.genre}</Text>

        <Text style={styles.txtlan}>2h 28min</Text>
      </View>
      <Text style={styles.desc}>
        To find out if his reality is a physical or mental construct, Mr.
        Anderson, aka Neo, will have to choose to follow the white rabbit once
        more. If he's learned anything, it's that choice, while an illusion...
      </Text>
      <View style={styles.arrow}>
        <FontAwesome name="chevron-down" color={'#444'} size={12} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,

    marginTop: 0,
  },
  txtl: {
    width: 65,
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
});
