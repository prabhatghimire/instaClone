import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from '../tabNavigation';
import {LoginScreen} from '../loginScreen';
import {RegisterScreen} from '../registerScreen';
import { NewPostScreen } from '../newPostScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const user = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="NewPost" component={NewPostScreen} options={{headerShown: true}}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
