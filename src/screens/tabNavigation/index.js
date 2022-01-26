import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../HomeScreen';
import {ProfileScreen} from '../profileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {color: 'white', backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={20} color={focused ? 'red' : 'white'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="search" size={20} color={focused ? 'red' : 'white'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? 'red' : 'white'}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="snapchat" size={20} color={focused ? 'red' : 'white'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user-circle"
              size={20}
              color={focused ? 'red' : 'white'}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
