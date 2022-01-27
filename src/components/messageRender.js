import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export const MessageRender = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.profilePic}} style={styles.imageStyle} />
      <View>
        <Text style={styles.textColor}>{item.fullName}</Text>
        <Text style={styles.textColor}>{item.seen ? 'seen' : 'unseen'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  textColor: {color: 'white'},
  imageStyle: {height: 40, width: 40, borderRadius: 50, margin: 8},
});
