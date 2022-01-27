import React from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import {styles} from './style';
import {LoadingScreen} from '../../components/loadingScreen';
import {StoryComponent} from '../../components/storyListRender';

export const ProfileScreen = ({navigation}) => {
  const logOut = () => {
    navigation.navigate('Login');
  };

  const user = {
    id: 1,
    username: 'prabhatghimire',
    fullName: 'Prabhat Ghimire',
    post: 2,
    followers: 10,
    followings: 15,
    profilePic:
      'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
  };
  const story = [
    {
      id: 1,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'prabhat ghimire',
    },
    {
      id: 2,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 3,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 4,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 5,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 6,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 7,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 8,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 9,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
    {
      id: 10,
      image:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      name: 'haksjdksa',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View
        style={styles.profileContainer}>
        <View>
          <Image source={{uri: user.profilePic}} style={styles.profilePic} />
          <Text style={styles.textStyle}>{user.fullName}</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.textStyle}>{user.post}</Text>
          <Text style={styles.textStyle}>Posts</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.textStyle}>{user.followers}</Text>
          <Text style={styles.textStyle}>Followers</Text>
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.textStyle}>{user.followings}</Text>
          <Text style={styles.textStyle}>Followings</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={story}
          renderItem={StoryComponent}
          keyExtractor={item => item.id}
          horizontal={true}
          ListEmptyComponent={LoadingScreen}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={logOut} style={styles.logoutButton}>
          <Text style={styles.textStyle}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
