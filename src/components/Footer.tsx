import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './Account';
import Bookings from './Bookings';
import Movies from './Movies';
import Search from './Search';

<>
  <Movies />
  <Search />
  <Bookings />
  <Account />
</>;

const Tab = createBottomTabNavigator();

export default function MP_Foot() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="My Bookings" component={Bookings} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
