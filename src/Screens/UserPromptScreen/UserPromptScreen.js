import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Platform, StatusBar, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../Global/Styles';
import CustomButton from '../../Components/CustomButton';
import Modal from "react-native-modal";
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters'


import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';



const UserPromptScreen = () => {

  const [visible, setvisible] = useState(false);
  const [language, setlanguage] = useState([{ name: 'English', selected: true }, { name: 'हिंदी', selected: false }, { name: 'मराठी', selected: false }, { name: 'ગુજરાતી', selected: false }]);


  const navigation = useNavigation();

  const oncustomerpressed = () => {
    console.warn("SignUp Pressed");
    navigation.navigate('SignInPhone');
    //setvisible(true);
  }

  const onsalonownerpressed = () => {
    navigation.navigate('SalonOwnerSignUpScreen');
  }
  // const onlangpressed = () => {
  //   setvisible(true);
  // }

  const onselect = index =>{
    let tempLang = language
    tempLang.map((item,ind) => {
      if(ind==index){
        if(item.selected==true){
             item.selected=false;
        }else{
           item.selected=true;
        }
        
      }
      else{
        item.selected=false;
      }
    });
    let x =[];
    tempLang.map(item=>{
      x.push(item)
    })
    setlanguage(x);
    setvisible(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor={'white'} /> */}
      <View >

        <View style={styles.topView}>



          <Animatable.Image animation='fadeInDownBig'
            source={require('../../../Assets/Images/TopSlider.png')}
            style={styles.image}
          //resizeMode="cover"
          />

          <TouchableOpacity style={styles.languagebutton} onPress={() => {
            setvisible(true);
          }}  >
            <Image source={require('../../../Assets/Images/language.png')} style={styles.languageicon} />
          </TouchableOpacity>

        </View>

        <View style={{ paddingBottom: 70 }} >
          <Text style={styles.Text}>Select the User to continue</Text>
        </View>
        <CustomButton
          title="Continue as a Customer"
          type="solid"
          titleColor={'#303030'}
          solidColor={'white'}
          iconImage={require('../../../Assets/Images/account.png')}
          //disabled={!termsAccepted}
          onPress={oncustomerpressed}

        />
        <CustomButton
          title="Continue as a Salon Owner"
          type="solid"
          titleColor={'#303030'}
          solidColor={'white'}
          iconImage={require('../../../Assets/Images/barber-shop.png')}
          //disabled={!termsAccepted}
          onPress={onsalonownerpressed}
        />
        <CustomButton
          title="Continue as a Salon Staff"
          type="solid"
          titleColor={'#303030'}
          solidColor={'white'}
          iconImage={require('../../../Assets/Images/Staff.png')}
        //disabled={!termsAccepted}
        //onPress={oncustomerpressed}
        />

        <Modal isVisible={visible} onBackdropPress={() => { setvisible(false) }} style={styles.modalstyle} animationIn={'slideInUp'} animationOut={'slideOutDown'} animationInTiming={900} animationOutTiming={700} >
          <View style={styles.modalcontainer}>
            <FlatList data={language} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.languageitem} onPress={()=>{
                  onselect(index)
                }}>
                  <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  }}>



                    {item.selected == true ? (<Image source={require('../../../Assets/Images/radioselect.png')} style={{ width: 24, height: 24, tintColor: 'blue' }} />
                    ) : (<Image source={require('../../../Assets/Images/radiounselect.png')} style={{ width: 24, height: 24 }} />)}
                    <Text style={{ fontSize: 19, fontWeight: 700, marginLeft: 10, color:item.selected==true?'blue':'#8e8e8e' }}>{item.name}</Text>

                    {item.selected == true ? (<Image source={require('../../../Assets/Images/languages.png')} style={{ width: 35, height: 35, marginRight: 5, }} />) : (<Grayscale style={{ marginRight: 5, opacity: 0.7 }}>
                      <Image source={require('../../../Assets/Images/languages.png')} style={{ width: 35, height: 35 }} />
                    </Grayscale>)}


                  </View>
                </TouchableOpacity>
              )
            }} />

          </View>

        </Modal>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.TopSlider,
  },
  topView: {
    height: responsiveHeight(50), // Adjust the desired height of the top view
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined,
    borderBottomLeftRadius: Platform.OS == 'android' ? 40 : 0,
    borderBottomRightRadius: Platform.OS == 'android' ? 40 : 0,
  },
  Text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',

    paddingTop: 40,
    fontSize: responsiveScreenFontSize(2.5),

  },
  modalcontainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 300,
    width: '100%',
    paddingTop: 15
  },
  modalstyle: {
    justifyContent: 'flex-end',
    margin: 0
  },
  languagebutton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    position: 'absolute',
    top: 30,
    left: 20,

  }, languageicon: {
    // tintColor:'white',
    width: 30,
    height: 30,

  },
  languageitem: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 2,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,

  }
});


export default UserPromptScreen;
