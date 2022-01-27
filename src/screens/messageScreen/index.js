import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {styles} from './style';
import {SearchBar} from '../../components/searchBar';
import {MessageRender} from '../../components/messageRender'
import {LoadingScreen} from '../../components/loadingScreen'

export const MessageScreen = () => {
  const messageList = [
    {
      id: 1,
      profilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      fullName: 'prabhat ghimire',
      seen: false,
    },
    {
      id: 2,
      profilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      fullName: 'prabhat ghimire',
      seen: false,
    },
    {
      id: 3,
      profilePic:
        'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1-744x744.jpg',
      fullName: 'prabhat ghimire',
      seen: false,
    },
  ];
  return (
    <View style={styles.container}>
      <SearchBar />
      <View
        style={styles.messageContainer}>
        <Text style={styles.textColor}>Meaasges</Text>
        <Text style={styles.textColor}>Requests</Text>
      </View>
      <View>
        <FlatList
          data={messageList}
          renderItem={MessageRender}
          keyExtractor={item => item.id}
          ListEmptyComponent={LoadingScreen}
        />
      </View>
    </View>
  );
};
