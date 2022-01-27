import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../HomeScreen';
import {ProfileScreen} from '../profileScreen';
import {SearchScreen} from '../searchScreen';
import {ShopScreen} from '../shopScreen';
import {MessageScreen} from '../messageScreen';

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
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="search" size={20} color={focused ? 'red' : 'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? 'red' : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="snapchat" size={20} color={focused ? 'red' : 'white'} />
          ),
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {color: 'white'},
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
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {color: 'white'},
        }}
      />
    </Tab.Navigator>
  );
};
