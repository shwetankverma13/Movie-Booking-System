import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import MP_head from './Header';

export default function Movies() {
  const [fruit, setFruit] = useState([
    {name: 'Movie1', id: '1'},
    {name: 'Movie2', id: '2'},
    {name: 'Movie3', id: '3'},
    {name: 'Movie4', id: '4'},
    {name: 'Movie5', id: '5'},
    {name: 'Movie6', id: '6'},
    {name: 'Movie7', id: '7'},
    {name: 'Movie8', id: '8'},
    {name: 'Movie9', id: '9'},
    {name: 'Movie10', id: '10'},
  ]);

  const [lang, setLang] = useState([
    {name: 'All', id: '1'},
    {name: 'English', id: '2'},
    {name: 'Hindi', id: '3'},
    {name: 'Tamil', id: '4'},
    {name: 'Telugu', id: '5'},
    {name: 'Marathi', id: '6'},
    {name: 'Bhojpuri', id: '7'},
    {name: 'Kannad', id: '8'},
  ]);
  type ItemData = {
    id: string;
    title: string;
    image: String;
    language: String;
  };

  const data: ItemData[] = [
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
  const pressHandler = (name: string) => {
    console.log(name);
  };
  return (
    <View style={styles.container}>
      <MP_head />
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={lang}
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
        horizontal
        // keyExtractor={item => item.id}
        data={fruit}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.mb}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.tm}>Theatres</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={fruit}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.mb}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
});
