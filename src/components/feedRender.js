import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FeedRender = ({item}) => {
  return (
    <View>
      <View style={styles.spaceInBetween}>
        <View style={styles.userinfocontainer}>
          <Image source={{uri: item.ProfilePic}} style={styles.profilePic} />
          <Text style={styles.text}>{item.username}</Text>
        </View>
        <View>
          <Text style={styles.iconStyle}>
            <Icon name="home" size={30} color="white" />
          </Text>
        </View>
      </View>
      <Image source={{uri: item.PostPic}} style={styles.postImage} />
      <View style={styles.spaceInBetween}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.iconStyle}>
            <Icon name="heart" size={30} color="white" />
          </Text>
          <Text style={styles.iconStyle}>
            <Icon name="whatsapp" size={30} color="white" />
          </Text>
          <Text style={styles.iconStyle}>
            <Icon name="telegram" size={30} color="white" />
          </Text>
        </View>
        <View>
          <Text style={styles.iconStyle}>
            <Icon name="home" size={30} color="white" />
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>{item.likes} likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userinfocontainer : {flexDirection: 'row', alignItems: 'center'},
  spaceInBetween: {justifyContent: 'space-between', flexDirection: 'row'},
  iconStyle: {margin: 4},
  profilePic: {height: 40, width: 40, borderRadius: 50, margin: 8},
  postImage: {height: 400, width: 400},
  text: {color: 'white'},
});
