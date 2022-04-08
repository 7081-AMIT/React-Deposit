
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/screen/assests/Onboarding';
import Login2 from './src/screen/assests/Login2';
import Home from './src1/screen/Home';
import Login from './src1/screen/Login';
import Google from './src/screen/assests/googlepage/google';
import Customers from './src/screen/assests/Customers/Customers';
import Facebook from './src/screen/assests/facebook/Facebook';
import F1 from './src/screen/assests/Flatlist/F1';
import Insta from './src/screen/assests/instagram/insta';
import Login3 from './src/screen/assests/login/login';
import Detail from './src/screen/assests/Mavigate/Detail';
import Register from './src/screen/assests/Mavigate/Register';


const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>





      
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={OnboardingScreen}/>
       <Stack.Screen name="Login2" component={Login2}/>
        <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="Google" component={Google}/>
         <Stack.Screen name="Customers" component={Customers}/>

         <Stack.Screen name="Facebook" component={Facebook}/>
         <Stack.Screen name="F1" component={F1}/>
         <Stack.Screen name="Insta" component={Insta}/>
         <Stack.Screen name="Login3" component={Login3}/>
         <Stack.Screen name="Detail" component={Detail}/>
         <Stack.Screen name="Register" component={Register}/>

         
                      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import F1 from './src/screen/assests/Flatlist/F1'
// import Detail from './src/screen/assests/Mavigate/Detail'
// import Regis from './src/screen/assests/Mavigate/Regis'
// import F12 from '/Users/administrator/Desktop/A420/src/screen/assests/Flatlist/F12'

// const App = () => {
//   return (
//     <View>
//     <Regis/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
