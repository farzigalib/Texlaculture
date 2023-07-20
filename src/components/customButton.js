import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../assets/color';
import {FONTS} from '../assets/fontFamily';

const CustomButton = ({
  btnWithBG = true,
  showStartIcon = false,
  startIcon,
  showEndIcon = false,
  endIcon,
  onPress,
  width,
  btnText,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      style={
        btnWithBG
          ? {
              backgroundColor: disabled
                ? COLORS.primaryShadowColor
                : COLORS.primaryColor,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 50,
              width: width,
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
            }
          : {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }
      }
      onPress={onPress}>
      {showStartIcon && startIcon}
      <Text
        style={{
          fontSize: 14,
          color: btnWithBG ? COLORS.white : COLORS.black,
          fontWeight: '500',
          fontFamily: FONTS.SemiBold,
          marginRight: showEndIcon ? 10 : 0,
          marginLeft: showStartIcon ? 10 : 0,
        }}>
        {btnText}
      </Text>
      {showEndIcon && endIcon}
    </TouchableOpacity>
  );
};

export default CustomButton;
