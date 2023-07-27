import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Header from '../../Components/Header';
import { colors } from '../../Global/Styles';
import CustomInput from '../../Components/CustomInput';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../Components/CustomButton';
// import db from '../../Global/db';
import { Screen } from 'react-native-screens';
import { useNavigation } from "@react-navigation/native";
import { padding } from '@mui/system';
import CustomCheckBox from '../../Components/CustomCheckBox';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.warn("SignUp Pressed");
    navigation.navigate('HomeScreen');
  }

  const handleCheckboxChange = (checked) => {
    setTermsAccepted(checked);
  };

  const onSignInPressed = () => {
    console.warn("SignUp Pressed");
    navigation.navigate('SignInScreen');
  }

  const onforgotpasswordpressed = () => {
    // Handle forgot password functionality
  }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View>

          <Header title="Sign Up" name="arrow-left" />

          <Text style={styles.text}>
            Sign up today and start booking your appointments with our top-rated stylists.
          </Text>

          <CustomInput
            placeholder='Full Name'
            leftIconName='account-box'
            value={fullName}
            onChangeText={text => setFullName(text)}
          />
          <CustomInput
            placeholder='Email'
            leftIconName='email-outline'
            validateEmail={true}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <CustomInput
            placeholder='Phone Number'
            leftIconName='phone-outline'
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          <CustomInput
            placeholder='Password'
            leftIconName='lock-outline'
            validatePassword={true}
            rightIconName={'eye-outline'}
            secureEntry={true}
          />
          <CustomInput
            placeholder='Confirm Password'
            leftIconName='lock-outline'
            validatePassword={true}
            secureEntry={true}
            rightIconName={'eye-outline'}
          />

          <CustomCheckBox
            label="By Processing Further you agree to Terms of service and Privacy Policy"
            onCheckboxChange={handleCheckboxChange}
          />
          <CustomButton
            title="Sign Up"
            type="solid"
            disabled={!termsAccepted}
            onPress={onSignUpPressed}
          />

          <Text style={styles.or}>or</Text>
          <CustomButton
            title="Continue with Google"
            type='clear'
            iconImage={require('../../../Assets/Images/google.png')}
            Iconcolor={'blue'}
            typeColors={{ outline: '' }}
            titleColor={'#303030'}
          />
          <CustomButton
            title="Continue with FaceBook"
            type='clear'
            iconImage={require('../../../Assets/Images/Facbook1.png')}
            Iconcolor={'#3b5998'}
            typeColors={{ outline: '#1877F2' }}
            titleColor={'#303030'}
          />
          <CustomButton
            title="Continue with Apple"
            type='clear'
            iconImage={require('../../../Assets/Images/apple.png')}
            leftIcon='apple'
            Iconcolor={'black'}
            typeColors={{ outline: '' }}
            titleColor={'#303030'}
          />
          <Text style={styles.Have_and_Account}>
            Already have an account?
            <Text style={styles.signInText} onPress={onSignInPressed}> Sign-In</Text>
          </Text>

          <Text style={styles.or}></Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greytext,
    textAlign: 'center',
    padding: 30,
    paddingBottom: 20
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  or: {
    textAlign: 'center',
    color: colors.greytext,
    fontSize: 20
  },
  Termsofservice: {
    color: colors.greytext,
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 20
  },
  Have_and_Account: {
    fontSize: 16,
    marginRight: 5,
    textAlign: 'center',
    marginVertical: 5
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.statusbar,
    paddingTop: 5,
  },
});

export default SignUpScreen;
