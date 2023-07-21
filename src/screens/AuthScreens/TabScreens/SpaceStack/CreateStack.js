import React from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../../../assets/color';
import { FONTS } from '../../../../assets/fontFamily';
import CustomHeader from '../../../../components/customHeader';

const CreateSpace = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <CustomHeader navigation={navigation} headerName="Create Space" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.hiText}>Create Space</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('EditSpaceScreen');
          }}>
          <Text>Press me</Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default CreateSpace;

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
