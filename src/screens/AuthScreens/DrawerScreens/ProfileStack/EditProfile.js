import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import CustomHeader from '../../../../components/customHeader';
import {COLORS} from '../../../../assets/color';
import {FONTS} from '../../../../assets/fontFamily';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader navigation={navigation} headerName="Edit Profile" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.hiText}>Edit Profile</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('VerifyProfileScreen');
          }}>
          <Text>Press me</Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default EditProfile;

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
