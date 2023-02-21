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
import MP_head from './Header';
import {movData} from './ListMovies';
import {theatre} from './threatresList';
import {langs} from './ListLanguage';
export default function Movies() {
  const pressHandler = (name: string) => {
    console.log(name);
  };
  return (
    <View style={styles.container}>
      <MP_head />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={langs}
        renderItem={({item}) => (
          <View style={styles.box}>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.tm}>Movies</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movData}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.boxx}>
              <TouchableOpacity onPress={() => pressHandler(item.title)}>
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
          data={theatre}
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
      {/* <FlatList
        //numColumns={Math.ceil(theatre.length / 2)}
        horizontal
        data={theatre}
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
      /> */}
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
    borderColor: '#80868C',
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
    marginLeft: 8,
  },
});
