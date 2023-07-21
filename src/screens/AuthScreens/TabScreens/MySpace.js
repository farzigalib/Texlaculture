import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../assets/color';
import {FONTS} from '../../../assets/fontFamily';

const MySpace = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <View>
        <Text style={styles.hiText}>My Space</Text>
        <Pressable
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('CreateSpaceScreen');
          }}>
          <Text>Press me</Text>
        </Pressable>
      </View>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default MySpace;

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
