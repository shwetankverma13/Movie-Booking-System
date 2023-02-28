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
import ShowLandingPage from './src/components/MovieLandingPage';
import book_ticket from './src/components/Ticket_booked';
import Book_ticket from './src/components/Ticket_booked';
<></>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// function Home() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let icon_name;
//           if (route.name === 'Movies') {
//             icon_name = 'film';
//           } else if (route.name === 'Search') {
//             icon_name = 'search';
//           } else if (route.name === 'My Bookings') {
//             icon_name = 'bars';
//           } else {
//             icon_name = 'user';
//           }
//           return <FontAwesome name={icon_name} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'purple',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}>
//       <Tab.Screen name="Movies" component={Movies} />
//       <Tab.Screen name="Search" component={Search} />
//       <Tab.Screen name="My Bookings" component={Bookings} />
//       <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//   );
// }
function TabNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Movies}
        options={{headerShown: false}}
      />

      <Stack.Screen name="ShowLandingPage" component={ShowLandingPage} />
      <Stack.Screen name="Book_ticket" component={Book_ticket} />
      <Stack.Screen name="Seats" component={Seats} />
      <Stack.Screen name="Bookings" component={Bookings} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
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
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Movies" component={TabNavigate} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="My Bookings" component={Bookings} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
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
