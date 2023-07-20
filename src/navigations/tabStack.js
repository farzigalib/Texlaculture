import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../assets/color';
import {FONTS} from '../assets/fontFamily';
import {
  HomeScreen,
  SpaceScreen,
  TaskScreen,
  TeamScreen,
} from '../screens/AuthScreens';
import {Avatar} from 'native-base';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: COLORS.bottomTabColor,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
          marginBottom: 10,
          fontFamily: FONTS.SemiBold,
        },
        tabBarActiveTintColor: COLORS.primaryColor,
        tabBarInactiveTintColor: COLORS.bottomTabLabelColor,
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => {
            color = focused ? COLORS.primaryColor : COLORS.bottomTabLabelColor;
            size = focused ? 35 : 25;
            return (
              <MaterialIcons name="home-filled" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="SpaceScreen"
        component={SpaceScreen}
        options={{
          tabBarLabel: 'My Space',
          tabBarIcon: ({focused, color, size}) => {
            color = focused ? COLORS.primaryColor : COLORS.bottomTabLabelColor;
            size = focused ? 35 : 25;
            return (
              <View
                style={{
                  borderColor: color,
                  borderWidth: 2,
                  width: size,
                  height: size,
                  borderRadius: 30,
                }}>
                <Avatar
                  width={'100%'}
                  height={'100%'}
                  bg="green.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  TC
                </Avatar>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TeamScreen"
        component={TeamScreen}
        options={{
          tabBarLabel: 'My Team',
          tabBarIcon: ({focused, color, size}) => {
            color = focused ? COLORS.primaryColor : COLORS.bottomTabLabelColor;
            size = focused ? 35 : 25;
            return <FontAwesome name="users" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TaskScreen"
        component={TaskScreen}
        options={{
          tabBarLabel: 'My Task',
          tabBarIcon: ({focused, color, size}) => {
            color = focused ? COLORS.primaryColor : COLORS.bottomTabLabelColor;
            size = focused ? 35 : 25;
            return <Feather name="briefcase" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
