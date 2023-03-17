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
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from './views/Account';
import Bookings from './views/Bookings';
import Search from './views/Search';
import Movies from './views/Movies';
import {createStackNavigator} from '@react-navigation/stack';
import ShowLandingPage from './views/MovieLandingPage';
import Book_ticket from './views/Ticket_booked';
import {Provider} from 'react-redux';
import {store} from './store';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function TabNavigate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Movies}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ShowLandingPage"
        component={ShowLandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Book_ticket"
        component={Book_ticket}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Seats" component={Seats} /> */}
      {/* <Stack.Screen name="Bookings" component={Bookings} /> */}
    </Stack.Navigator>
  );
}
function App() {
  return (
    //using provider , I wanted to access the react redux store.
    //     Thereafter I used
    // NavigationContainer : which provides a way to navigate between different screens or views in an app, and it supports a variety of navigation patterns such as stack navigation, tab navigation, drawer navigation, and more.
    // Now, as my app will be rendered I need 4 icons which points to different pages hence used Tab Navigations.
    // Tab Navigations -> Movies, Search, Bookings,Account
    // Now inside the tab navigation of Movies I have called stack navigator which navigates me to different pages in the movies tab.
    <Provider store={store}>
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
          <Tab.Screen name="Bookings" component={Bookings} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

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
