import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoarding from '../screens/NoAuthScreen/onBoarding';
import SplashScreen from '../screens/SplashScreen';
import TabStack from './tabStack';
import CreateSpace from '../screens/AuthScreens/TabScreens/SpaceStack/CreateStack';
import EditSpace from '../screens/AuthScreens/TabScreens/SpaceStack/EditSpace';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateSpaceScreen"
        component={CreateSpace}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditSpaceScreen"
        component={EditSpace}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
