import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profilePic: {height: 80, width: 80, borderRadius: 50, margin: 8},
  textStyle: {color: 'white'},
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 30,
    width: 300,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  profileInfoContainer: {margin: 18, alignItems: 'center'},
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainContainer: {flex: 1, backgroundColor: 'black'},
});
