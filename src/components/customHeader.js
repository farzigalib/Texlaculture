import { Avatar } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../assets/color';
import { FONTS } from '../assets/fontFamily';

const CustomHeader = ({
  isHomeHeader = false,
  avatarURL,
  userName,
  navigation,
  headerName,
}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {isHomeHeader ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{
              borderColor: COLORS.primaryColor,
              borderWidth: 2,
              width: 45,
              height: 45,
              borderRadius: 30,
            }}>
            <Ionicons
              name="menu"
              color={COLORS.primaryColor}
              size={20}
              style={{
                position: 'absolute',
                zIndex: 99,
                right: -5,
                bottom: -5,
                backgroundColor: COLORS.white,
                borderRadius: 20,
              }}
            />
            <Avatar
              width={'100%'}
              height={'100%'}
              bg="green.500"
              source={{
                uri: avatarURL,
              }}>
              TC
            </Avatar>
          </TouchableOpacity>
        ) : (
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={COLORS.black}
            onPress={() => navigation.goBack()}
          />
        )}
        <View style={{marginLeft: 15}}>
          {isHomeHeader ? (
            <>
              <Text style={styles.nameText}>Hi, {userName}</Text>
              <Text style={styles.welcomeText}>Welcome to Texlaculture</Text>
            </>
          ) : (
            <Text style={styles.headerText}>{headerName}</Text>
          )}
        </View>
      </View>
      {isHomeHeader && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name="search-outline"
            size={30}
            color={COLORS.bottomTabLabelColor}
            style={{marginRight: 15}}
          />
          <Ionicons
            name="notifications"
            size={30}
            color={COLORS.bottomTabLabelColor}
          />
        </View>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  nameText: {
    fontSize: 15,
    color: COLORS.primaryColor,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
  hiText: {
    fontSize: 11,
    color: COLORS.bottomTabLabelColor,
    fontWeight: '400',
    fontFamily: FONTS.Regular,
  },
  headerText: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '500',
    fontFamily: FONTS.SemiBold,
  },
});
