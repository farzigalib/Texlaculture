/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import 'react-native-gesture-handler';
import Stacks from './src/navigations/stacks';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stacks />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
