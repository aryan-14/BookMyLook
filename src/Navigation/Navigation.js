
import React from 'react'
import { View,Text, StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { create } from 'react-test-renderer';
// import SignInScreen from '../Screens/SignInScreen/SignInScreen';
// import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
// import ConfirmEmail from '../Screens/ConfirmEmail/ConfirmEmail';
// import ResetPassword_Verification from '../Screens/ResetPassword_Verification/ResetPassword_Verification';
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import OnboardingScreen from '../Screens/OnBoardingScreen/OnBoardingScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import UserProfile from '../Components/UserProfile';
import UserPromptScreen from '../Screens/UserPromptScreen/UserPromptScreen';
import SignInPhone from '../Screens/PhoneAuthentication/SignInPhone';
import SalonOwnerSignUpScreen from '../Screens/SalonOwnerSignUpScreen/SalonOwnerSignUpScreen';





const stack = createNativeStackNavigator();

const Navigation = () => {

 
   
     return(
      
        <NavigationContainer>
         
           <stack.Navigator screenOptions={{headerShown:false}}>

           <stack.Screen name='OnBoardingScreen' component={OnboardingScreen}/>
            <stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <stack.Screen name='HomeScreen' component={HomeScreen} />
            <stack.Screen name='SignInScreen' component={SignInScreen} />
            <stack.Screen name='UserPromptScreen' component={UserPromptScreen} />
            <stack.Screen name='SignInPhone' component={SignInPhone} />
            <stack.Screen name='SalonOwnerSignUpScreen' component={SalonOwnerSignUpScreen} />
            {/* <stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <stack.Screen name='ConfirmEmail' component={ConfirmEmail}/>
            <stack.Screen name='ResetPassword_Verification' component={ResetPassword_Verification}/>
            <stack.Screen name="HomeScreen" component={HomeScreen}/>  */}
            

           </stack.Navigator>
        </NavigationContainer>
      
     )
}

export default Navigation