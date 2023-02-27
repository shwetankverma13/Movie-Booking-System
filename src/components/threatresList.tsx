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

export const theatre = [
  {
    id: '1',
    title: 'Urvashi Cin...',
    image: require('../images/Urvashi.png'),
    location: 'Shivaji Nagar',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
  {
    id: '2',
    title: 'Inox, 1mg',
    image: require('../images/no_img.png'),
    location: '1mg Mall',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '3',
    title: 'Cinepolis, Majestic',
    image: require('../images/no_img.png'),
    location: 'Hebal',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '4',
    title: 'PVR, Forum Mall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '5',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
  {
    id: '6',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: ['2:00 PM', '7:00 PM', '9:30 PM'],
  },
  {
    id: '7',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: ['7:00 PM', '9:30 PM'],
  },
  {
    id: '8',
    title: 'Cinema Hall',
    image: require('../images/no_img.png'),
    location: 'xyz',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
];
