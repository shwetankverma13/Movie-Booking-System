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
type timings = {
  times: string;
};
export const movData = [
  {
    id: '1',
    title: 'Matrix',
    image: require('../images/matrix.png'),
    language: 'English',
    genre: 'Action/SciFi',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 28min',
    year: '2021',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
  {
    id: '2',
    title: '83',
    image: require('../images/kd83.png'),
    language: 'Hindi',
    genre: 'Sports',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 40min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '3',
    title: 'Sammayanaydu',
    image: require('../images/saamanyudu.png'),
    language: 'Telugu',
    genre: 'Action/SciFi',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 50min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '4',
    title: 'Pushpa',
    image: require('../images/Pushpa.png'),
    language: 'Telugu',
    genre: 'LoveStory/Tragedy',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '3h 15min',
    year: '2022',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM'],
  },
  {
    id: '5',
    title: 'Movie1',
    image: require('../images/no_img.png'),
    language: 'English',
    genre: 'Action/SciFi',
    description:
      "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion...",
    duration: '2h 28min',
    year: '2023',
    timings: ['2:00 PM', '5:30 PM', '7:00 PM', '9:30 PM'],
  },
];
