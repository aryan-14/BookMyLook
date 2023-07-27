import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, Text, View,TextInput } from 'react-native';
import Header from '../../Components/Header';
import { useNavigation } from "@react-navigation/native";
import { colors } from '../../Global/Styles';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import { responsiveHeight,responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input'




const SignInPhone = () => {



    const [phoneNumber, setPhoneNumber] = useState('');
    const [Confirm, setConfirm] = useState(null);
    const [otp, setotp] = useState('');

  const onbackiconpressed = () => {
    console.warn("Back Icon Pressed")
    navigation.navigate('SignUpScreen');
}

//Firebase Phone Number Authentication Code 
const signInWithPhoneNumber= async ()  => {
    const confirmation = await auth().signInWithPhoneNumber('+91'+phoneNumber);
    setConfirm(confirmation);
    console.log(confirmation);
  }


const verifycode = async() =>{
  try {
    const res = await Confirm.confirm(otp);
    console.log(res)
  } catch (error) {
    console.log('Invalid code.');
  }
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

      
        <Header title="Sign In" name="arrow-left" onPress={onbackiconpressed} />
        {/* <ImageComponent source={require('../../../Assets/Images/loginlogo.jpg')} style={{width:'100%' }} /> */}
        <View style={{paddingVertical:50}}>
        <Text style={styles.text}>Please Enter the Phone Number registered with your account</Text>
        {/* <TextInput placeholder='Phone Number' style={styles.phoneinput} keyboardType='number-pad' value={phoneNumber} onChangeText={txt=>{ setPhoneNumber(txt) }}  /> */}
        {/* <CustomInput placeholder='Enter Phone Number' leftIconName='phone-outline'   /> */}
        {/* <CustomInput placeholder='Password' leftIconName='lock-outline' validatePassword={true} rightIconName={'eye-outline'} secureEntry={true}/> */}
        {/* <CustomButton title="Sign In" type="solid"  onPress={()=>{signInWithPhoneNumber();}}/> */}


{/* Handling the otp Code  */}
        {Confirm == null ? (
  <View>
    <TextInput
      placeholder='Phone Number'
      style={styles.phoneinput}
      keyboardType='number-pad'
      value={phoneNumber}
      onChangeText={txt => { setPhoneNumber(txt) }}
    />
    <CustomButton title="Sign In" type="solid" onPress={() => { signInWithPhoneNumber(); }} />
   
    <View style={{paddingTop:100}}>
        <CustomButton title="Continue with Google" type='clear' iconImage={require('../../../Assets/Images/google.png')} Iconcolor={'blue'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <CustomButton title="Continue with FaceBook" type='clear'  iconImage={require('../../../Assets/Images/facebook.png')} Iconcolor={'red'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <CustomButton title="Continue with Apple" type='clear'  iconImage={require('../../../Assets/Images/apple.png')}  leftIcon='apple' Iconcolor={'black'} typeColors={{ outline: '' }} titleColor={'#303030'} />
        <Text style={styles.Have_and_Account}>Don't have an account?<Text style={styles.signInText} onPress={onSignUpPressed}> Sign-Up</Text></Text>
        </View> 




  </View>

  
) : (

  <View>
    <OTPInputView
      style={{ width: '80%', height: 200, alignSelf:'center' }}
      pinCount={6}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={(code) => {
        console.log(`Code is ${code}, you are good to go!`);
        setotp(code);
      }}
    />
    <CustomButton title="Verify OTP" type="solid" onPress={() => { verifycode(); }} />
  </View>
)}

    
        </View>

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
      paddingTop:150,
      paddingBottom:50
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

      phoneinput:{
        borderWidth:2,
        borderRadius:10,
        height:50,
        borderColor:'#8e8e8e',
        marginTop:20,
        width:'90%',
        alignSelf:'center',
        paddingLeft:20,
        paddingVertical:10
      },
      underlineStyleBase: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius:5,
        color:'#000'
        
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
});

export default SignInPhone;