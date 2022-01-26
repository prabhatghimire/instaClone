import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as RootNavigation from '../RootNavigation';

export const HeaderComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          console.log('asd');
        }}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => {
            RootNavigation.navigate('NewPost');
          }}>
          <Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => {
            RootNavigation.navigate('NewPost');
          }}>
          <View style={styles.unreadBadgeText}>
            <Text style={{color: 'white'}}>2</Text>
          </View>
          <Icon name="heart" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  unreadBadgeText: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    left: 8,
    botton: 16,
    borderRadius: 50,
    alignItems: 'center',
    width: 18,
    height: 18,
  },
  iconStyle: {marginRight: 10},
  mainContainer: {
    height: 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    height: 30,
    width: 100,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
  },
});
