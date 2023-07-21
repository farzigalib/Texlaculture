import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../assets/color';
import { FONTS } from '../../../../assets/fontFamily';
import CustomHeader from '../../../../components/customHeader';

const EditSpace = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader navigation={navigation} headerName="Edit Space" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.hiText}>Edit Space</Text>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default EditSpace;

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
