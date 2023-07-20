import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/customHeader';
import {COLORS} from '../../../assets/color';
import {FONTS} from '../../../assets/fontFamily';

const EmployeeDirectory = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader navigation={navigation} headerName="Employee Directory" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.hiText}>Employee Directory</Text>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default EmployeeDirectory;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hiText: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
});
