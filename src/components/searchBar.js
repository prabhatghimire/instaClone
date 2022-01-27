import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        margin :15,
        borderRadius: 10,
        padding:2
      }}>
      <Icon name="search" size={20} color="black" />
      <TextInput placeholder="search" />
    </View>
  );
};
