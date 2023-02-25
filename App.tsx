/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MP_head from './src/components/Header';
import MP_Foot from './src/components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './src/components/Account';
import Bookings from './src/components/Bookings';
import Search from './src/components/Search';
import Movies from './src/components/Movies';
import {createStackNavigator} from '@react-navigation/stack';
import ShowMPage from './src/components/MoviesPage';
import Seats from './src/components/Seats';
<></>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon_name;
          if (route.name === 'Movies') {
            icon_name = 'film';
          } else if (route.name === 'Search') {
            icon_name = 'search';
          } else if (route.name === 'My Bookings') {
            icon_name = 'bars';
          } else {
            icon_name = 'user';
          }
          return <FontAwesome name={icon_name} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="My Bookings" component={Bookings} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen name="ShowMPage" component={ShowMPage} />
        <Stack.Screen name="Seats" component={Seats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
