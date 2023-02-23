import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

const MP_head: FC = () => {
  //View to set in Header
  const [selected, setSelected] = React.useState('');

  const [dropdown, setDropdown] = useState(null);
  const data = [
    {key: '1', value: 'Bangalore'},
    {key: '2', value: 'Hyderabad'},
    {key: '3', value: 'Chennai'},
    {key: '4', value: 'Mumbai'},
    {key: '5', value: 'Kolkata'},
    {key: '6', value: 'Delhi'},
    {key: '7', value: 'Pune'},
    {key: '8', value: 'Lucknow'},
    {key: '9', value: 'Patna'},
    {key: '10', value: 'Ranchi'},
    {key: '11', value: 'Jaipur'},
    {key: '12', value: 'Surat'},
  ];
  const cities = [
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Mumbai',
    'Kolkata',
    'Delhi',
    'Pune',
    'Lucknow',
    'Patna',
    'Ranchi',
    'Jaipur',
    'Surat',
  ];
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity>
          <TextInput style={styles.textStyle}>Hello John</TextInput>
        </TouchableOpacity>
      </View>

      <View style={styles.temp}>
        {/* <Image
            style={styles.container}
            source={require('../images/location.jpeg')}
          /> */}
        <View>
          <Entypo name="location-pin" style={styles.pina} />
        </View>
        <View>
          {/* <SelectList
            data={data}
            setSelected={setSelected}
            inputStyles={{fontSize: 10}}
            boxStyles={{marginLeft: 0, width: 110}}
          /> */}
          <SelectDropdown
            data={cities}
            buttonStyle={styles.btnStyle}
            buttonTextStyle={styles.btnfont}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={10}
                />
              );
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temp: {
    flexDirection: 'row',
    marginTop: 5,
  },
  pina: {
    marginLeft: 10,
    width: 15,
    height: 40,
    fontSize: 20,
    flex: 1,
    marginTop: 2,
  },
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 35,
    zIndex: 100,
    // position: 'absolute',
    // width: 360,
    // height: 98,
    // left: 0,
    // top: 0,
  },
  textStyle: {
    textAlign: 'left',
    color: 'purple',
    fontSize: 20,
    padding: 7,
    marginStart: 7,
    marginTop: 12,
    fontWeight: 'bold',
    // position: 'absolute',
    // width: 100,
    // height: 24,
    // left: 12,
    // top: 24,
  },
  textStyle2: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 16,
    padding: 7,
    marginStart: 7,
  },
  lc: {
    height: 10,
    width: 12,
  },
  sc: {
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  design: {
    flex: 1,
    padding: 20,
  },
  container: {
    paddingTop: 10,
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  lgo: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  dropdown: {
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  boxxxx: {
    width: 30,
    height: 30,
    marginLeft: 0,
    backgroundColor: 'white',
  },
  btnStyle: {
    height: 25,
    width: 123,
    backgroundColor: 'white',
  },
  btnfont: {
    color: '#3C444D',
  },
});
export default MP_head;
