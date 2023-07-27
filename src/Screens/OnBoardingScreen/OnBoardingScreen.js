import React from 'react';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../Global/Styles';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: 'white', white: '#fff',blue:'#0096ff'};

const slides = [
    {
        id:'1',
        image: require('../../../Assets/Images/Onboarding1.jpg'),
        title:'Welcome to BookMyLook',
        subtitle:'The Power to book your look, BookMyLook',
    },
    {
        id:'2',
        image: require('../../../Assets/Images/Onboarding2.jpg'),
        title:'',
        subtitle:'Find the look which inspires you! With BookMyLook',
    },
    {
        id:'3',
        image: require('../../../Assets/Images/Onboarding3.jpg'),
        title:'',
        subtitle:'Beauty Appointments Made Effortless',
    },
];
const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>

        <Animatable.Text animation='fadeInUpBig' style={styles.title}>{item?.title}</Animatable.Text>
      <Animatable.Image animation='fadeInUpBig'
        source={item?.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Animatable.Text animation='fadeInUpBig' style={styles.subtitle}>{item?.subtitle}</Animatable.Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor:'#22acd6',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex === slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('UserPromptScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:'white'}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#0096ff',
                    borderColor:'#0096ff',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color:'white'
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    paddingBottom:15
  },
  title: {
    color: '#0096ff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
    marginBottom:-10,

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 14,
    backgroundColor: '#0096ff',
    marginHorizontal: 3,
    borderRadius: 2,
    paddingTop:5
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#0096ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
