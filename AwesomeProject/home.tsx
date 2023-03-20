import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default function home() {
  const [name, setName] = useState('');
  const handlePress = () => false;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>Welcome ! Enter your name</Text>
        <TouchableOpacity>
          <TextInput
            style={styles.input}
            onSubmitEditing={value => setName(value.nativeEvent.text)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Button onPress={handlePress} title="Submit" color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textStyle: {
    textAlign: 'left',
    color: 'purple',
    fontSize: 20,
    padding: 7,
    marginStart: 7,
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
