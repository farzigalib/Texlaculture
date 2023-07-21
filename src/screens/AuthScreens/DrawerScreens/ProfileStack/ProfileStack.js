import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyProfile from '../MyProfile';
import EditProfile from './EditProfile';
import VerifyProfile from './VerifyProfile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyScreen"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyProfileScreen"
        component={VerifyProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
