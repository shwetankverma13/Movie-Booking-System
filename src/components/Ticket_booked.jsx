import React from "react";
import { StyleSheet, Text,View } from "react-native";
import { Image } from "react-native";
export default function book_ticket(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>
                Ticket Booked Successfully
            </Text> */}
            <Image source={require('../images/yay.png')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 20,
        padding: 7,
        marginStart: 7,
        marginTop: 5,
        fontWeight: 'bold',

      },
})