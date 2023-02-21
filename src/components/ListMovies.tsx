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
type ItemData = {
  id: string;
  title: string;
  image: string;
  language: string;
};
export const movData: ItemData[] = [
  {
    id: '1',
    title: 'Matrix',
    image: require('../images/matrix.png'),
    language: 'English',
  },
  {
    id: '2',
    title: '83',
    image: require('../images/kd83.png'),
    language: 'Hindi',
  },
  {
    id: '3',
    title: 'Sammayanaydu',
    image: require('../images/saamanyudu.png'),
    language: 'Telugu',
  },
  {
    id: '4',
    title: 'Pushpa',
    image: require('../images/Pushpa.png'),
    language: 'Telugu',
  },
  {
    id: '5',
    title: 'Movie1',
    image: require('../images/no_img.png'),
    language: 'English',
  },
];
