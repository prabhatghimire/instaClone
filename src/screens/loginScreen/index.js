import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {styles} from './style'

export const LoginScreen = ({navigation}) => {
  const logIn = () => {
    navigation.navigate('Tab', {screen : 'HOme'})
  }
  return (
    <View style={styles.loginPagecontainer}>
      <View><Image
        source={require('../../../assets/images/Insta-Logo.png')}
        style={styles.logoImage}
      /></View>
      <TextInput
      style={styles.textFieldStyle}
        placeholder="Phone number, username or email"
        // value={email}
        // onChangeText={text => setEmail(text)}
      />
      <TextInput
      style={styles.textFieldStyle}
        placeholder="password"
        secureTextEntry
      />
      <View style={styles.alignRight}><TouchableOpacity>
        <Text>forget password?</Text>
      </TouchableOpacity></View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={logIn}
      ><Text>Log In</Text></TouchableOpacity>

<Text>don't have an account? <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}><Text>Sign Up</Text></TouchableOpacity></Text>
    </View>
  );
};