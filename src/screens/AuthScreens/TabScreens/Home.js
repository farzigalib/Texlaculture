import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../assets/color';
import {FONTS} from '../../../assets/fontFamily';
import CustomButton from '../../../components/customButton';
import CustomHeader from '../../../components/customHeader';
import CustomTab from '../../../components/customTab';
import LinearGradientBG from '../../../components/linearGradientBG';
import {Avatar} from 'native-base';
import {bottomConfetti, topConfetti} from '../../../assets/image';

const Home = ({navigation}) => {
  const [showTabOne, setShowTabOne] = useState(true);
  const [showTabTwo, setShowTabTwo] = useState(false);

  const activeTabData = [
    {
      id: 1,
      title: `My Profile`,
      titleColor: COLORS.greenColor,
      iconName: 'person',
    },
    {
      id: 2,
      title: `Expense\nManagement`,
      titleColor: COLORS.blueColor,
      iconName: 'document',
    },
    {
      id: 3,
      title: `My Leaves`,
      titleColor: COLORS.yellowColor,
      iconName: 'calendar',
    },
    {
      id: 4,
      title: `My Tasks`,
      titleColor: COLORS.skyBlueColor,
      iconName: 'checkmark-circle-outline',
    },
  ];

  const congratulationCardData = [
    {
      userName: `Chandrakant's Anniversary`,
      userNameColor: COLORS.pinkColor,
      profileURL:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      profileBGColor: COLORS.tintPinkColor,
      backgroundColor: COLORS.lightPinkColor,
    },
    {
      userName: `Chandrakant's Birthday`,
      userNameColor: COLORS.primaryColor,
      profileURL:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      profileBGColor: COLORS.tintGreenColor,
      backgroundColor: COLORS.primaryBackgroundColor,
    },
    {
      userName: `Chandrakant's Anniversary`,
      userNameColor: COLORS.redColor,
      profileURL:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      profileBGColor: COLORS.lightGreyColor,
      backgroundColor: COLORS.lightYellowColor,
    },
  ];

  const TabContent = ({fav}) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.primaryBackgroundColor,
          padding: 10,
        }}>
        {activeTabData?.map((item, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor: COLORS.white,
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 10,
              width: 125,
              height: 90,
              borderRadius: 10,
              ...Platform.select({
                android: {
                  elevation: 10,
                  shadowColor: COLORS.primaryShadowColor,
                },
                ios: {
                  shadowColor: COLORS.primaryShadowColor,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 6,
                },
              }),
            }}>
            <Ionicons
              name={fav ? 'heart' : 'heart-outline'}
              color={fav ? COLORS.redColor : COLORS.black}
              size={15}
              style={{position: 'absolute', top: 5, right: 5}}
            />
            <Ionicons
              name={item?.iconName}
              color={item?.titleColor}
              size={35}
            />
            <Text
              numberOfLines={2}
              style={{
                marginTop: 5,
                textAlign: 'center',
                fontSize: 11,
                color: item?.titleColor,
                fontWeight: '600',
                fontFamily: FONTS.SemiBold,
              }}>
              {item?.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  const SubHeader = ({title, showIcon = true, onPress}) => {
    return (
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={[styles.hiText, {fontSize: 15}]}>{title}</Text>
          {showIcon && (
            <Ionicons
              name="arrow-forward"
              size={28}
              color={COLORS.bottomTabLabelColor}
              onPress={onPress}
            />
          )}
        </View>
      </View>
    );
  };

  const TeamCard = ({backgroundColor, textColor, title}) => {
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          width: '40%',
          padding: 10,
          borderRadius: 12,
        }}>
        <Text style={[styles.hiText, {fontSize: 16, color: textColor}]}>
          {title}
          {'      '}(20)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'flex-start', marginLeft: 15}}>
            <Avatar.Group
              _avatar={{
                size: 'sm',
              }}
              max={5}>
              <Avatar
                bg="green.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                AJ
              </Avatar>
              <Avatar
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}>
                TE
              </Avatar>
              <Avatar
                bg="indigo.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                JB
              </Avatar>
              <Avatar
                bg="amber.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}>
                TS
              </Avatar>
              <Avatar
                bg="green.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                AJ
              </Avatar>
              <Avatar
                bg="cyan.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}>
                TE
              </Avatar>
              <Avatar
                bg="indigo.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                JB
              </Avatar>
              <Avatar
                bg="amber.500"
                source={{
                  uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}>
                TS
              </Avatar>
            </Avatar.Group>
          </View>
          <Ionicons
            name="arrow-forward"
            size={28}
            color={COLORS.lightGreyColor}
          />
        </View>
      </View>
    );
  };

  const CongratulationCard = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}>
        {congratulationCardData?.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: item?.backgroundColor,
              width: 210,
              alignItems: 'center',
              borderRadius: 18,
              overflow: 'hidden',
              marginRight: 15,
            }}>
            <Image
              source={topConfetti}
              style={{width: '100%', height: 60}}
              resizeMode="stretch"
            />
            <View
              style={{
                backgroundColor: item?.profileBGColor,
                padding: 10,
                borderRadius: 50,
              }}>
              <Avatar
                width={45}
                height={45}
                bg="green.500"
                source={{
                  uri: item?.profileURL,
                }}>
                TC
              </Avatar>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: item?.userNameColor,
                  fontWeight: '600',
                  fontFamily: FONTS.SemiBold,
                }}>
                {item?.userName}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: COLORS.black,
                  fontWeight: '400',
                  fontFamily: FONTS.Regular,
                }}>
                Founder & CEO
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  color: COLORS.bottomTabLabelColor,
                  fontWeight: '400',
                  fontFamily: FONTS.Regular,
                }}>
                12 Mar, 23
              </Text>
            </View>
            <Image
              source={bottomConfetti}
              style={{width: '100%', height: 60}}
              resizeMode="stretch"
            />
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader
        navigation={navigation}
        onPress={() => navigation.toggleDrawer()}
        userName="Neha"
        isHomeHeader
        avatarURL="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingTop: 10, paddingBottom: 50}}
        nestedScrollEnabled={true}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 120,
            backgroundColor: COLORS.primaryBackgroundColor,
          }}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: COLORS.primaryColor,
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
            <Text style={styles.hiText}>10:15 AM</Text>
            <Text
              style={[
                styles.hiText,
                {fontWeight: '400', fontFamily: FONTS.Regular},
              ]}>
              Monday, 22 Jan
            </Text>
          </View>
          <CustomButton
            width={'40%'}
            btnText={'Clock-In'}
            showEndIcon
            endIcon={
              <Ionicons name="enter-outline" size={30} color={COLORS.white} />
            }
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20, marginBottom: 10}}>
          <CustomTab
            showTabOneIcon={true}
            tabOneIcon={
              <Ionicons name="today-outline" size={20} color={COLORS.black} />
            }
            tabOneText="Recent Visits"
            tabTwoText="Favorites"
            showTabOneLine={showTabOne}
            showTabTwoLine={showTabTwo}
            onPressOne={() => {
              setShowTabOne(true);
              setShowTabTwo(false);
            }}
            onPressTwo={() => {
              setShowTabOne(false);
              setShowTabTwo(true);
            }}
          />
        </View>
        <View>
          {showTabOne && <TabContent fav={false} />}
          {showTabTwo && <TabContent fav={true} />}
        </View>
        <SubHeader
          title="My Team"
          onPress={() => {
            navigation.navigate('TeamScreen');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TeamCard
            title="Present"
            textColor={COLORS.greenColor}
            backgroundColor={COLORS.lightGreenColor}
          />
          <TeamCard
            title="Absent"
            textColor={COLORS.redColor}
            backgroundColor={COLORS.lightRedColor}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TeamCard
            title="On Duty"
            textColor={COLORS.primaryColor}
            backgroundColor={COLORS.primaryBackgroundColor}
          />
          <TeamCard
            title="Leave"
            textColor={COLORS.yellowColor}
            backgroundColor={COLORS.lightYellowColor}
          />
        </View>
        <SubHeader title="Celebrations" showIcon={false} />
        <CongratulationCard />
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hiText: {
    fontSize: 13,
    color: COLORS.black,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
});
