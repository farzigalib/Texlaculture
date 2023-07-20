import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { COLORS } from '../assets/color';
import { FONTS } from '../assets/fontFamily';
import CompanyLogo from '../assets/svg/companylogo';
import LinearGradientBG from '../components/linearGradientBG';

const SplashScreen = ({navigation}) => {
  const timeoutHelper = action => {
    const timer = setTimeout(() => {
      action();
    }, 1500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    timeoutHelper(() => {
      navigation.replace('OnBoardingScreen');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LinearGradientBG>
        <View style={styles.container}>
          <CompanyLogo />
          <Text style={styles.text}>WELCOME TO{'\n'}TEXLACULTURE</Text>
        </View>
      </LinearGradientBG>

      <StatusBar backgroundColor={COLORS.white} barStyle="default" />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
    marginTop: 20,
    fontWeight: '600',
    letterSpacing: 4,
    fontFamily: FONTS.SemiBold,
  },
});
