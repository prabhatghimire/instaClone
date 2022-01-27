import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from '../tabNavigation';
import {LoginScreen} from '../loginScreen';
import {RegisterScreen} from '../registerScreen';
import {NewPostScreen} from '../newPostScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const [user, setUser] = useState(true);

  // const logOut = () => {
  //   setUser(false)
  // }
  const logIn = () => {
    setUser(true)
  }
  // const loginValidate = () => {
  //   if (user) {
  //     return (
  //       <>
  //         <Stack.Screen name="Tab" component={TabNavigation} />
  //         <Stack.Screen
  //           name="NewPost"
  //           component={NewPostScreen}
  //           options={{
  //             headerShown: true,
  //             headerTitleAlign: 'center',
  //             headerStyle: {backgroundColor: 'black'},
  //             headerTitleStyle: {color: 'white'},
  //           }}
  //         />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Stack.Screen name="Login" component={LoginScreen} />
  //         <Stack.Screen name="Register" component={RegisterScreen} />
  //       </>
  //     );
  //   }
  // };
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {loginValidate()} */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {color: 'white'},
        }}
      />
    </Stack.Navigator>
  );
};
