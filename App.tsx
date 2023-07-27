 

 import { SafeAreaView,StyleSheet,Text,StatusBar, View} from 'react-native';
 import Header from './src/Components/Header';
 import { colors } from './src/Global/Styles';
 //import DB_Connection from './src/Global/DB_Connection';
 
 import Navigation from './src/Navigation/Navigation';
import { TypographyMUI } from './src/Components/TypographyMUI';
import SignInScreen from './src/Screens/SignInScreen/SignInScreen';
 
 const App = () => {
 
 
 
 
     return (
    
       <SafeAreaView style={styles.root}>
 
    <StatusBar backgroundColor={colors.statusbar} barStyle='light-content'/>

      
      
    {/* <Header title='MY ACCOUNT' name='arrow-left' /> */}
    
   {/* <SignInScreen /> */}
    <Navigation />
    {/* <SignInScreen /> */}
    
 
    </SafeAreaView>
  // <Text>g</Text>
  // <DB_Connection />
   
    

   
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    // alignItems: 'center',
  //   padding:20
   
  }
});

export default App;