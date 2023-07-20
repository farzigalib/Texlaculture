import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../assets/color';
import {FONTS} from '../../../assets/fontFamily';

const MyTask = () => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View>
        <Text style={styles.hiText}>My Task</Text>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default MyTask;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiText: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
});
