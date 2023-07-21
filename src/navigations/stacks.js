import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../assets/color';
import {FONTS} from '../assets/fontFamily';
import EmployeeDirectory from '../screens/AuthScreens/DrawerScreens/EmployeeDirectory';
import EmployeeList from '../screens/AuthScreens/DrawerScreens/EmployeeList';
import FamilyDetails from '../screens/AuthScreens/DrawerScreens/FamilyDetails';
import HolidayCalendar from '../screens/AuthScreens/DrawerScreens/HolidayCalendar';
import MyProfile from '../screens/AuthScreens/DrawerScreens/MyProfile';
import Settings from '../screens/AuthScreens/DrawerScreens/Settings';
import StatutoryDetails from '../screens/AuthScreens/DrawerScreens/StatutoryDetails';
import AuthStack from './authStack';
import {Avatar} from 'native-base';
import Clipboard from '@react-native-clipboard/clipboard';
import EditProfile from '../screens/AuthScreens/DrawerScreens/ProfileStack/EditProfile';
import ProfileStack from '../screens/AuthScreens/DrawerScreens/ProfileStack/ProfileStack';

const Drawer = createDrawerNavigator();

const DrawerContent = props => {
  const drawerTabTopData = [
    {
      id: 1,
      tabName: 'My Profile',
      navigationScreen: 'MyProfileScreen',
    },
    {
      id: 2,
      tabName: 'Family Details',
      navigationScreen: 'FamilyDetailsScreen',
    },
    {
      id: 3,
      tabName: 'Statutory Details',
      navigationScreen: 'StatutoryDetailsScreen',
    },
    {
      id: 4,
      tabName: 'Holiday Calendar',
      navigationScreen: 'HolidayCalendarScreen',
    },
    {
      id: 5,
      tabName: 'Employee Directory',
      navigationScreen: 'EmployeeDirectoryScreen',
    },
    {
      id: 6,
      tabName: 'Employee List',
      navigationScreen: 'EmployeeListScreen',
    },
  ];

  const drawerTabBottomData = [
    {
      id: 1,
      tabName: 'Settings',
      navigationScreen: 'SettingsScreen',
    },
  ];

  const EmployeeBasicData = [
    {
      id: 1,
      iconName: 'link-variant-plus',
      title: 'Joining Date',
      value: '1 Dec, 23',
    },
    {
      id: 2,
      iconName: 'pin-outline',
      title: 'Address',
      value: 'E41c, Palam Vihar Extn.\nGurgaon',
    },
    {
      id: 3,
      iconName: 'phone',
      title: 'Phone',
      value: '8287233848',
    },
    {
      id: 4,
      iconName: 'link-variant-plus',
      title: 'E-Mail',
      value: 'neha.r@texaculture.com',
    },
  ];

  const TabButton = props => {
    return (
      <View style={{paddingHorizontal: 10}}>
        {props.drawerTabData?.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate(item?.navigationScreen)}
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: COLORS.bottomTabLabelColor,
              marginBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: COLORS.bottomTabLabelColor,
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLORS.black,
                  fontWeight: '500',
                  fontFamily: FONTS.SemiBold,
                  width: '100%',
                }}>
                {item?.tabName}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-sharp"
              size={25}
              color={COLORS.bottomTabLabelColor}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const EmployeeBasicDetails = () => {
    return (
      <>
        {EmployeeBasicData?.map((item, index) => (
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}
            key={index}>
            <View style={{width: '12%'}}>
              <MaterialCommunityIcons
                name={item?.iconName}
                size={20}
                color={COLORS.bottomTabLabelColor}
              />
            </View>
            <Text
              style={{
                fontSize: 11,
                color: COLORS.bottomTabLabelColor,
                fontWeight: '500',
                fontFamily: FONTS.SemiBold,
                width: '35%',
              }}>
              {item?.title}
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: COLORS.black,
                fontWeight: '500',
                fontFamily: FONTS.SemiBold,
                width: '53%',
              }}>
              {item?.value}
            </Text>
          </View>
        ))}
      </>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: COLORS.bottomTabColor,
          padding: 10,
          marginBottom: 10,
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.closeDrawer()}
            style={{
              backgroundColor: COLORS.white,
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <MaterialCommunityIcons
              name="close"
              size={25}
              color={COLORS.bottomTabLabelColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <View
            style={{
              borderRadius: 12,
              borderColor: COLORS.primaryColor,
              borderWidth: 1,
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: COLORS.primaryColor,
                height: 60,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <View
              style={{
                backgroundColor: COLORS.primaryBackgroundColor,
                alignItems: 'center',
                paddingBottom: 20,
              }}>
              <View
                style={{
                  width: 110,
                  height: 110,
                  position: 'absolute',
                  top: -35,
                }}>
                <Avatar
                  width="110px"
                  height="110px"
                  bg="green.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}>
                  TC
                </Avatar>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: COLORS.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 50,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                  }}>
                  <MaterialCommunityIcons
                    name="camera-wireless-outline"
                    size={25}
                    color={COLORS.bottomTabLabelColor}
                  />
                </View>
              </View>
              <View style={{marginTop: 90}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: COLORS.black,
                      fontWeight: '500',
                      fontFamily: FONTS.SemiBold,
                    }}>
                    Neha Chhillar{'  '}
                  </Text>
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    size={22}
                    color={COLORS.primaryColor}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.bottomTabLabelColor,
                      fontWeight: '500',
                      fontFamily: FONTS.SemiBold,
                    }}>
                    Employee Code{'  '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.black,
                      fontWeight: '500',
                      fontFamily: FONTS.SemiBold,
                    }}>
                    TEP0069{'  '}
                  </Text>
                  <Text
                    onPress={() => {
                      Clipboard.setString('TEP0069');
                    }}
                    style={{
                      fontSize: 12,
                      color: COLORS.cyne,
                      fontWeight: '500',
                      fontFamily: FONTS.SemiBold,
                    }}>
                    Copy
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    fontWeight: '500',
                    fontFamily: FONTS.SemiBold,
                    textAlign: 'center',
                  }}>
                  Product Design Intern
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}>
              <EmployeeBasicDetails />
            </View>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <TabButton drawerTabData={drawerTabTopData} {...props} />
        <View
          style={{
            backgroundColor: COLORS.bottomTabLabelColor,
            width: '90%',
            height: 2,
            marginBottom: 10,
            borderRadius: 50,
          }}
        />
        <TabButton drawerTabData={drawerTabBottomData} {...props} />
      </View>
    </ScrollView>
  );
};

const Stacks = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        itemStyle: {alignItems: 'flex-end'},
        drawerStyle: {
          width: Dimensions.get('window').width / 1.2,
        },
      }}>
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyProfileScreen"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name="EditProfileScreen"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name="FamilyDetailsScreen"
        component={FamilyDetails}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="StatutoryDetailsScreen"
        component={StatutoryDetails}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="HolidayCalendarScreen"
        component={HolidayCalendar}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="EmployeeDirectoryScreen"
        component={EmployeeDirectory}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="EmployeeListScreen"
        component={EmployeeList}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Stacks;
