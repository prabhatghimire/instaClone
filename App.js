import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/screens/stackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native'
import {navigationRef} from './src/RootNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="black" barStyle="light-content" />
        <NavigationContainer ref={navigationRef}>
          <StackNavigation />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
