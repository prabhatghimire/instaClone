import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const StoryComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.storyImage} />
      <Text numberOfLines={1} style={styles.storyText}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 55,
    overflow: 'hidden',
  },
  storyImage: {
    borderRadius: 200,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  storyText: {
    color: 'white',
    marginBottom: 15,
  },
});
