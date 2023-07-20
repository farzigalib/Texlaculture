import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../assets/color';

const LinearGradientBG = ({children}) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0.3}}
      end={{x: 1, y: 7}}
      colors={[COLORS.white, COLORS.primaryColor]}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientBG;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
