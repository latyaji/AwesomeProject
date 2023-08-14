import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Home, Payment, Onboarding, Document, PandoucmentUplaod, BankAccountdetails, Address,Submitdata } from './src/screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="PandoucmentUplaod" component={PandoucmentUplaod} />
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="BankAccountdetails" component={BankAccountdetails} /> 
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Submitdata" component={Submitdata} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import axios from 'axios';
// // const baseUrl = 'https://reqres.in';

// const baseUrl = 'http://43.204.22.176:3000//users';

// const App = () => {

// useEffect(()=>{
//   fetchUser()
// },[])

// const fetchUser = async () => {
//   try{
//     const url = `${baseUrl}`;
//     const response = await axios.get(url);
//     console.log(response.data);
//   }catch(error){
//     console.log("error======>>>>>",error)
//   }
 
// };

//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

