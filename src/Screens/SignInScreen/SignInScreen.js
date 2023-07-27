import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import Header from '../../Components/Header';
import { useNavigation } from "@react-navigation/native";
import { colors } from '../../Global/Styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import ImageComponent from '../../Components/ImageComponent';
import { padding } from '@mui/system';


const SignInScreen = () => {

  const onbackiconpressed = () => {
    console.warn("Back Icon Pressed")
    navigation.navigate('SignUpScreen');
}


const onSignInPressed = () => {
  console.warn("Back Icon Pressed")
  navigation.navigate('HomeScreen');
}

const onSignUpPressed = () => {
  console.warn("SignUp Pressed")
  navigation.navigate('SignUpScreen');
}
  
  const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.root}>
      <ScrollView>

      <View>

      
        <Header title="MY ACCOUNT" name="arrow-left" onPress={onbackiconpressed} />
        <ImageComponent source={require('../../../Assets/Images/loginlogo.jpg')} style={{width:'100%' }} />

        <Text style={styles.text}>Please Enter the E-mail and password registered with your account</Text>
        <CustomInput placeholder='Email' leftIconName='email-outline' validateEmail={true}/>
        <CustomInput placeholder='Password' leftIconName='lock-outline' validatePassword={true} rightIconName={'eye-outline'} secureEntry={true}/>
        <CustomButton title="Sign In" type="solid"  onPress={onSignInPressed} />
        <CustomButton  title="Forgot Password?" type='clear'  typeColors={{ outline: 'black' }} titleColor='grey'/>
        <Text style={styles.or}>or</Text>
        <CustomButton title="Continue with Google" type='clear' iconImage={require('../../../Assets/Images/google.png')} Iconcolor={'blue'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <CustomButton title="Continue with FaceBook" type='clear'  iconImage={require('../../../Assets/Images/facebook.png')} Iconcolor={'red'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <CustomButton title="Continue with Apple" type='clear'  iconImage={require('../../../Assets/Images/apple.png')}  leftIcon='apple' Iconcolor={'black'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <Text style={styles.Have_and_Account}>Don't have an account?<Text style={styles.signInText} onPress={onSignUpPressed}> Sign-Up</Text></Text>
         


        </View>
        
     



      </ScrollView>
      </SafeAreaView>
    )
}

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
       paddingBottom:20,
       //paddingTop:-40
       
      },
      or:{
        textAlign:'center',
        color:'black',
        fontSize:20
       },
       Have_and_Account: {
        fontSize: 16,
        marginRight: 5,
        textAlign:'center',
        marginVertical:5
        
      },
      signInText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.statusbar,
        paddingTop:5,
       // textAlign:'center'
      },
     
});

export default SignInScreen