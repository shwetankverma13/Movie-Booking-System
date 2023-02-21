import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';
import {movData} from './ListMovies';
const pressHandler = (name: string) => {
  console.log(name);
};
export default function lsMovies() {
  <View>
    <FlatList
      horizontal
      keyExtractor={item => item.id}
      data={movData}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  </View>;
}
