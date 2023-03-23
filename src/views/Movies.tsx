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
import MP_head from '../components/Header';
import {langs} from '../components/ListLanguage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import MoviesEpic from '../epics/moviesDis';
import TheatreEpic from '../epics/theatreDis';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {setMovieId} from '../redux/action/setMovieId';
import {setLangIndex} from '../redux/action/setLangIndex';
import {setLanguage} from '../redux/action/setLanguage';
export default function Movies(props: any) {
  const pressHandler = (name: string) => {};

  // Movies Data fetched from API
  const movDatas = useSelector((store: any) => store.ChangeMovieData).MovieData;
  //Theatre Table Data fetched from API
  const movTheatre = useSelector(
    (store: any) => store.ChangeTheatreData,
  ).TheatreData;

  // array of language selection
  const lang = useSelector((store: any) => store.changeLanguage);
  const dispatch = useDispatch();
  //dispatch(setVarId.setVarId(5));

  const langId = useSelector((store: any) => store.ChangeLangIndex).langIndex;
  //console.log(movieId);
  const langOnClick = (index: number) => {
    dispatch(setLanguage(index));
    dispatch(setLangIndex(index));
    // console.log(langId);
    // console.log(lang);
  };
  MoviesEpic();
  TheatreEpic();
  //  console.log(movDatas);
  //const tomData = useSelector((store:any) => store.ChangeTheatreOfMovieData).tomData;

  return (
    <View style={styles.container}>
      <MP_head />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        data={langs}
        renderItem={({item, index}) => (
          <View style={[styles.box, {backgroundColor: lang[index].color}]}>
            <TouchableOpacity onPress={() => langOnClick(index)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.tm}>Movies</Text>
        <TouchableOpacity>
          <AntDesign
            name="arrowright"
            size={20}
            style={{marginTop: 20, marginRight: 16}}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movDatas.filter(
          (item: any) =>
            item.language == lang[langId].name || lang[langId].name == 'All',
        )}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <View style={styles.boxx}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setMovieId(index));
                  // console.log(movieId);
                  //   tomEpic(movDatas[movieId].title);
                  //console.log(movDatas[movieId].title);
                  props.navigation.navigate('ShowLandingPage', {item});
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: item.image}}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txtBt1}>{item.title}</Text>
            <Text style={styles.txtBt2}>{item.language}</Text>
          </View>
        )}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.tm}>Theatres</Text>
        <TouchableOpacity>
          <AntDesign
            name="arrowright"
            size={20}
            style={{marginTop: 20, marginRight: 16}}
          />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <FlatList
          numColumns={Math.ceil(8 / 2)}
          // horizontal
          data={movTheatre}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.boxx}>
                <TouchableOpacity onPress={() => pressHandler(item.title)}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: item.image}}
                  />
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
