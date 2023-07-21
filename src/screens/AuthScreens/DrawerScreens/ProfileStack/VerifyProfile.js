import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../assets/color';
import { FONTS } from '../../../../assets/fontFamily';
import CustomHeader from '../../../../components/customHeader';

const VerifyProfile = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader navigation={navigation} headerName="Verify Profile" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.hiText}>Verify Profile</Text>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default VerifyProfile;

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
