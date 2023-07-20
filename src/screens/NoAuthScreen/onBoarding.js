import {Box, HStack, Image, KeyboardAvoidingView, Stack} from 'native-base';
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../assets/color';
import {FONTS} from '../../assets/fontFamily';
import {onBoardingImg} from '../../assets/image';
import CustomButton from '../../components/customButton';
import CustomInputField from '../../components/customInputField';
import LinearGradientBG from '../../components/linearGradientBG';

const OnBoarding = ({navigation}) => {
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  );
  const [mobileNumber, setMobileNumber] = useState('');
  const [OTPNumber, setOTPNumber] = useState('');
  const [generatePIN, setGeneratePIN] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [showPIN, setShowPIN] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [disableMobileField, setDisableMobileField] = useState(true);

  const onBack = () => {
    setIsRegister(false);
    setIsLogIn(false);
    setMobileNumber('');
    setOTPNumber('');
    setGeneratePIN('');
    setDisableMobileField(true)
  };

  const onRegister = () => {
    if (mobileNumber && OTPNumber && generatePIN && isRegister) {
      console.log('Redirect to Login');
      onBack();
    } else if (mobileNumber === '9680464921' && generatePIN && isLogIn) {
      console.log('Redirect to Home');
      navigation.replace('TabStack');
    } else if (mobileNumber) {
      if (mobileNumber === '9680464921') {
        setDisableMobileField(false);
        setIsLogIn(true);
        setIsRegister(false);
      } else if (mobileNumber != '9680464921') {
        setDisableMobileField(false);
        setIsRegister(true);
        setIsLogIn(false);
      }
      setShowOTP(false);
      setShowPIN(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeAreaView, {height: windowHeight}]}>
      <LinearGradientBG>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Box mx="4" mt="6">
            <Stack alignItems="center">
              <Text style={styles.hiText}>Hi,</Text>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Image
                alt="onBoardingImage"
                source={onBoardingImg}
                style={styles.onBoardingImage}
              />
            </Stack>
            <Text style={styles.subHeadingText}>
              Login or Signup to Texla Culture
            </Text>
            <Text style={styles.instructionText}>Enter Your Phone Number</Text>
            <KeyboardAvoidingView>
              <CustomInputField
                placeholder="Your 10 digit Phone Number"
                returnKeyType="done"
                inputMode="numeric"
                keyboardType="number-pad"
                maxLength={10}
                inputHeaderText="Contact"
                editable={disableMobileField}
                value={mobileNumber}
                onChangeText={e => {
                  setMobileNumber(e);
                }}
              />
              {isRegister && (
                <>
                  <CustomInputField
                    placeholder="Your 4 digit OTP Number"
                    returnKeyType="done"
                    inputMode="numeric"
                    keyboardType="number-pad"
                    maxLength={4}
                    inputHeaderText="Enter 4 Digit OTP"
                    secureTextEntry={!showPIN}
                    marginBottom={0}
                    value={OTPNumber}
                    onChangeText={e => {
                      setOTPNumber(e);
                    }}
                    showEndIcon
                    endIcon={
                      showPIN ? (
                        <Entypo
                          name="eye"
                          size={30}
                          color={COLORS.inputHeaderColor}
                          onPress={() => {
                            if (showPIN) {
                              setShowPIN(false);
                            }
                          }}
                        />
                      ) : (
                        <Entypo
                          name="eye-with-line"
                          size={30}
                          color={COLORS.inputHeaderColor}
                          onPress={() => {
                            if (!showPIN) {
                              setShowPIN(true);
                            }
                          }}
                        />
                      )
                    }
                  />
                  <Text
                    style={[
                      styles.instructionText,
                      {marginLeft: 20, marginBottom: 10},
                    ]}>
                    Resend OTP
                  </Text>
                </>
              )}
              {(isRegister || isLogIn) && (
                <>
                  <CustomInputField
                    placeholder={
                      isRegister && !isLogIn
                        ? 'Generate Your 4 Digit PIN Number'
                        : 'Enter Your 4 Digit PIN Number'
                    }
                    returnKeyType="done"
                    inputMode="numeric"
                    keyboardType="number-pad"
                    maxLength={4}
                    inputHeaderText={
                      isRegister && !isLogIn
                        ? 'Generate 4 Digit PIN'
                        : 'Enter 4 Digit PIN'
                    }
                    secureTextEntry={!showOTP}
                    value={generatePIN}
                    onChangeText={e => {
                      setGeneratePIN(e);
                      if (isRegister && !isLogIn) {
                        if (e && OTPNumber) {
                          setDisableMobileField(true);
                        } else {
                          setDisableMobileField(false);
                        }
                      } else {
                        if (e) {
                          setDisableMobileField(true);
                        } else {
                          setDisableMobileField(false);
                        }
                      }
                    }}
                    showEndIcon
                    endIcon={
                      showOTP ? (
                        <Entypo
                          name="eye"
                          size={30}
                          color={COLORS.inputHeaderColor}
                          onPress={() => {
                            if (showOTP) {
                              setShowOTP(false);
                            }
                          }}
                        />
                      ) : (
                        <Entypo
                          name="eye-with-line"
                          size={30}
                          color={COLORS.inputHeaderColor}
                          onPress={() => {
                            if (!showOTP) {
                              setShowOTP(true);
                            }
                          }}
                        />
                      )
                    }
                  />
                  <HStack justifyContent="space-between" alignItems="center">
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {!checkBox ? (
                        <MaterialCommunityIcons
                          name="checkbox-marked"
                          size={25}
                          color={COLORS.primaryColor}
                          onPress={() => {
                            if (!checkBox) {
                              setCheckBox(true);
                            }
                          }}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="checkbox-blank-outline"
                          size={25}
                          color={COLORS.primaryColor}
                          onPress={() => {
                            if (checkBox) {
                              setCheckBox(false);
                            }
                          }}
                        />
                      )}
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 14,
                          color: COLORS.black,
                          fontWeight: '400',
                          fontFamily: FONTS.Regular,
                        }}
                        onPress={() => {
                          if (checkBox) {
                            setCheckBox(false);
                          } else {
                            setCheckBox(true);
                          }
                        }}>
                        Remeber Me
                      </Text>
                    </View>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        color: COLORS.primaryColor,
                        fontWeight: '400',
                        fontFamily: FONTS.Regular,
                      }}>
                      Forget PIN?
                    </Text>
                  </HStack>
                </>
              )}
            </KeyboardAvoidingView>
            <Box alignItems="center" mt={isRegister || isLogIn ? '8' : '32'}>
              <CustomButton
                width={'40%'}
                btnText={
                  !isRegister && !isLogIn
                    ? 'Get Started'
                    : isRegister && !isLogIn
                    ? 'Register'
                    : 'Log In'
                }
                onPress={onRegister}
                disabled={
                  !isRegister && !isLogIn
                    ? mobileNumber
                      ? false
                      : true
                    : isRegister && !isLogIn
                    ? mobileNumber && OTPNumber && generatePIN
                      ? false
                      : true
                    : mobileNumber && generatePIN
                    ? false
                    : true
                }
              />
              {(isRegister || isLogIn) && (
                <>
                  <Box my="2" />
                  <CustomButton
                    btnWithBG={false}
                    btnText="Back"
                    showStartIcon
                    startIcon={
                      <Ionicons
                        name="chevron-back-sharp"
                        size={30}
                        color={COLORS.black}
                      />
                    }
                    onPress={onBack}
                  />
                </>
              )}
            </Box>
          </Box>
        </ScrollView>
      </LinearGradientBG>

      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  hiText: {
    fontSize: 25,
    color: COLORS.black,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
  welcomeText: {
    fontSize: 25,
    color: COLORS.primaryColor,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
  onBoardingImage: {
    width: 220,
    height: 220,
    marginTop: 10,
  },
  subHeadingText: {
    marginTop: 20,
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '600',
    fontFamily: FONTS.SemiBold,
  },
  instructionText: {
    marginTop: 10,
    fontSize: 15,
    color: COLORS.inputHeaderColor,
    fontWeight: '400',
    fontFamily: FONTS.Regular,
    marginBottom: 10,
  },
});
