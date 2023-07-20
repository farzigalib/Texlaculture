import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../assets/color';
import {FONTS} from '../assets/fontFamily';

const CustomInputField = ({
  marginBottom = 12,
  inputHeaderText,
  placeholder,
  inputMode,
  autoFocus,
  returnKeyType,
  keyboardType,
  secureTextEntry = false,
  showStartIcon = false,
  startIcon,
  showEndIcon = false,
  endIcon,
  maxLength,
  onChangeText,
  value,
  editable = true,
}) => {
  return (
    <View style={[styles.inputContainer, {marginBottom: marginBottom}]}>
      <Text style={[styles.inputHeader, {backgroundColor: '#fff9f5'}]}>
        {inputHeaderText}
      </Text>
      {showStartIcon && <View style={{width: '10%'}}>{startIcon}</View>}
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        inputMode={inputMode}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 7,
          width: startIcon && endIcon ? '80%' : '90%',
          fontSize: 15,
          color: COLORS.black,
          fontWeight: '400',
          fontFamily: FONTS.Regular,
        }}
      />
      {showEndIcon && <View style={{width: '10%'}}>{endIcon}</View>}
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: COLORS.inputFieldBorderColor,
    borderRadius: 8,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputHeader: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontSize: 12,
    color: COLORS.inputHeaderColor,
    fontWeight: '400',
    fontFamily: FONTS.Regular,
    paddingHorizontal: 5,
  },
});
