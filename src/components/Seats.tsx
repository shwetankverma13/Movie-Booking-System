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
import Modal from 'react-native-modal';
export default function Seats(props: any) {
  const locate = props.route.params.loc;
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Modal
        style={{width: '100%', marginBottom: 0, marginLeft: 0}}
        onBackButtonPress={() => {
          setVisible(false);
        }}
        isVisible={true}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 600,
            backgroundColor: 'white',
            width: '100%',
          }}></View>
      </Modal>
    </View>
  );
}
