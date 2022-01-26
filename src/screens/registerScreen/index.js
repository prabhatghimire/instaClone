import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import {styles} from './style';

export const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.registerPageContainer}>
      <Image
        source={require('../../../assets/images/Insta-Logo.png')}
        style={styles.logoImage}
      />
      <TextInput
        style={styles.textFieldStyle}
        placeholder="email"
        // value={email}
        // onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textFieldStyle}
        placeholder="username"
        // value={email}
        // onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textFieldStyle}
        placeholder="password"
        // value={password}
        // onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        // onPress={onPressLearnMore}
        style={styles.buttonStyle}><Text>Sign Up</Text></TouchableOpacity>

      <Text style={{margin:50, alignItems: 'center'}}>
        Already have an account?{' '}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
