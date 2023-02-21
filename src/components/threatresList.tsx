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
type ItemTheatre = {
  id: string;
  title: string;
  image: string;
  location: string;
};
export const theatre: ItemTheatre[] = [
  {
    id: '1',
    title: 'Urvashi Cin...',
    image: require('../images/Urvashi.png'),
    location: 'Shivaji Nagar',
  },
  {
    id: '2',
    title: 'Inox',
    image: require('../images/no_img.png'),
    location: '1mg Mall',
  },
  {
    id: '3',
    title: 'Cinepolis',
    image: require('../images/no_img.png'),
    location: 'Hebal',
  },
  {
    id: '4',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
  },
  {
    id: '5',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
  },
  {
    id: '6',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
  },
  {
    id: '7',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
  },
  {
    id: '8',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
  },
];
