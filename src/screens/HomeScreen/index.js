import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {HeaderComponent} from '../../components/header';
import {styles} from './style';
import {StoryComponent} from '../../components/storyListRender';
import {FeedRender} from '../../components/feedRender'
import {LoadingScreen} from '../../components/loadingScreen'

export const HomeScreen = () => {
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
  const newsFeed = [
    {
      id : 1,
      userId: 1,
      username : 'prabhatghimire',
      ProfilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      PostPic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      likes: 50,
      comment: 160,
    },
    {
      id : 2,
      userId: 1,
      username : 'prabhatghimire',
      ProfilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      PostPic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      likes: 50,
      comment: 160,
    },
    {
      id : 3,
      userId: 1,
      username : 'prabhatghimire',
      ProfilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      PostPic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      likes: 50,
      comment: 160,
    },
    {
      id : 4,
      userId: 1,
      username : 'prabhatghimire',
      ProfilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      PostPic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      likes: 50,
      comment: 160,
    },
    
  ];
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <FlatList
        data={story}
        renderItem={StoryComponent}
        keyExtractor={item => item.id}
        horizontal={true}
        ListEmptyComponent={LoadingScreen}
      />

      <FlatList
        data={newsFeed}
        renderItem={FeedRender}
        keyExtractor={item => item.id}
        ListEmptyComponent={LoadingScreen}
      />
    </View>
  );
};
