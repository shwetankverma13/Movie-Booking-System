import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MP_head from './Header';
//import {movData} from './ListMovies';
import {theatre} from './threatresList';
import {langs} from './ListLanguage';
import {DataTable} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Seats from './Seats';
import ShowLandingPage from './MovieLandingPage';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {setMovieId, setVarId} from '../redux/action';
import {setLanguage} from '../redux/action';
import MoviesEpic from '../epics/movies';
const Stack = createNativeStackNavigator();
export default function Movies(props: any) {
  const pressHandler = (name: string) => {};
  const movDatas = useSelector((store: any) => store.ChangeMovie);
  const movTheatre = useSelector((store: any) => store.ChangeTheatre);
  var [isPress, setIsPress] = React.useState(false);
  const lang = useSelector((store: any) => store.changeLanguage);
  const dispatch = useDispatch();
  //dispatch(setVarId.setVarId(5));
  const langOnClick = (index: number) => {
    dispatch(setLanguage(index));
    console.log(lang);
  };
  const movieId = useSelector((store: any) => store.ChangeMovieId.movieId);
  MoviesEpic();
  return (
    <View style={styles.container}>
      <MP_head />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={langs}
        renderItem={({item, index}) => (
          <View style={[styles.box, {backgroundColor: lang[index].color}]}>
            <TouchableOpacity onPress={() => langOnClick(index)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.tm}>Movies</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movDatas}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <View style={styles.boxx}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setMovieId(index));
                  console.log(movieId);
                  props.navigation.navigate('ShowLandingPage', {item});
                }}>
                <Image source={item.image} />
              </TouchableOpacity>
            </View>
            <Text style={styles.txtBt1}>{item.title}</Text>
            <Text style={styles.txtBt2}>{item.language}</Text>
          </View>
        )}
      />

      <Text style={styles.tm}>Theatres</Text>
      <ScrollView horizontal={true}>
        <FlatList
          numColumns={Math.ceil(theatre.length / 2)}
          // horizontal
          data={movTheatre}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.boxx}>
                <TouchableOpacity onPress={() => pressHandler(item.title)}>
                  <Image source={item.image} />
                </TouchableOpacity>
              </View>
              <Text style={styles.txtBt1}>{item.title}</Text>
              <Text style={styles.txtBt2}>{item.location}</Text>
            </View>
          )}
        />
      </ScrollView>
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
  container: {
    backgroundColor: 'White',
    marginTop: 0,
  },
  item: {
    fontSize: 12,
    marginTop: 0,
    padding: 8,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginLeft: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#4A148C',
    borderRadius: 16,
  },
  tm: {
    fontSize: 18,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
  mb: {
    width: 100,
    height: 100,
    marginLeft: 16,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBt1: {
    paddingTop: 5,
    fontSize: 14,
    marginLeft: 8,
  },
  boxx: {
    marginRight: 8,
    marginLeft: 8,
  },
  txtBt2: {
    fontSize: 12,
    marginLeft: 9,
  },
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginLeft: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 16,
  },
});
