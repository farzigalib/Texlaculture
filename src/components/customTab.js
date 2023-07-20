import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../assets/fontFamily';
import {COLORS} from '../assets/color';

const CustomTab = ({
  showTabOneIcon = false,
  showTabTwoIcon = false,
  tabOneIcon,
  tabTwoIcon,
  tabOneText,
  tabTwoText,
  onPressOne,
  onPressTwo,
  showTabOneLine = false,
  showTabTwoLine = false,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPressOne}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {showTabOneIcon && (
            <>
              {tabOneIcon}
              <View style={{marginRight: 10}} />
            </>
          )}
          <Text style={styles.tabText}>{tabOneText}</Text>
        </View>
        {showTabOneLine && (
          <View
            style={{
              backgroundColor: COLORS.primaryColor,
              height: 3,
              width: '100%',
              borderRadius: 10,
            }}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPressTwo}
        style={{marginLeft: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {showTabTwoIcon && (
            <>
              {tabTwoIcon}
              <View style={{marginRight: 10}} />
            </>
          )}
          <Text style={styles.tabText}>{tabTwoText}</Text>
        </View>
        {showTabTwoLine && (
          <View
            style={{
              backgroundColor: COLORS.primaryColor,
              height: 3,
              width: '100%',
              borderRadius: 10,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  tabText: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '400',
    fontFamily: FONTS.Regular,
  },
});
