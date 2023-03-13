import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {Dropdown} from 'react-native-element-dropdown';
import lsMovies from './SearchMovie';
export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const Stack = createStackNavigator();

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity>
            <Searchbar
              style={styles.sb}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tmt}>
          <TouchableOpacity>
            <Text style={styles.txt}> Movie </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Theatres</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Image style={styles.img} source={require('../images/sorry.png')} />
        <Text style={styles.ft}>No Movie found!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 0,
    height: '85%',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  textStyle: {
    textAlign: 'left',
    color: 'purple',
    fontSize: 20,
    padding: 7,
    marginStart: 7,
    marginTop: 12,
    fontWeight: 'bold',
  },
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 35,
    zIndex: 100,
  },
  container: {
    flex: 1,
    backgroundColor: 'White',
    marginTop: 0,
  },
  sb: {
    marginTop: 24,
    height: 16,
    width: 325,
    marginLeft: 24,
  },
  tmt: {
    flexDirection: 'row',
    marginBottom: 18,
    marginLeft: 16,
    marginRight: 12,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  txt: {
    marginRight: 12,
  },
  img: {
    height: '70%',
    width: '100%',
    marginTop: 0,
  },
  ft: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});
