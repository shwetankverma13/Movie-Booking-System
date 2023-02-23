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
type ItemMovies = {
  id: string;
  title: string;
  image: string;
  language: string;
  genre: string;
};
export const movData = [
  {
    id: '1',
    title: 'Matrix',
    image: require('../images/matrix.png'),
    language: 'English',
    genre: 'Action/SciFi',
  },
  {
    id: '2',
    title: '83',
    image: require('../images/kd83.png'),
    language: 'Hindi',
    genre: 'Sports',
  },
  {
    id: '3',
    title: 'Sammayanaydu',
    image: require('../images/saamanyudu.png'),
    language: 'Telugu',
    genre: 'Action/SciFi',
  },
  {
    id: '4',
    title: 'Pushpa',
    image: require('../images/Pushpa.png'),
    language: 'Telugu',
    genre: 'Action/LoveStory/Tragedy',
  },
  {
    id: '5',
    title: 'Movie1',
    image: require('../images/no_img.png'),
    language: 'English',
    genre: 'Action/SciFi',
  },
];
