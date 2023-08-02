// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// export const Submitdata = async({navigation,route}) => {
//   const {sabmidatastore} = route?.params
//     // console.log("Submitdata @@@@@@@@@",sabmidatastore)
//     // AsyncStorage. removeItem('otherUserData')
   
//       try {
//         const data = await AsyncStorage.getItem('otherUserData');
//         if (data) {
//           const getdata = JSON.parse(data)
//           await AsyncStorage.setItem('otherUserData', JSON.stringify([...getdata,...sabmidatastore]));
//         //  console.log("async if data",data)
//         }
//         else{
//           await AsyncStorage.setItem('otherUserData', JSON.stringify(sabmidatastore));
//           // console.log("else data",data)

//         }
//         const alldata = await AsyncStorage.getItem('otherUserData');
//         console.log("allldata",alldata)
//       } catch (error) {
//         console.error('Error loading data:', error);
//       }
    
   
     
    
//   return (
//     <View>
//       <Text>SHIVANI</Text>
//     </View>
//   )
// }


import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../style/Styles';

export const Submitdata = ({ navigation, route }) => {
  const { sabmidatastore } = route?.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('otherUserData');
        if (data) {
          const getdata = JSON.parse(data);
          await AsyncStorage.setItem('otherUserData', JSON.stringify([...getdata, ...sabmidatastore]));
        } else {
          await AsyncStorage.setItem('otherUserData', JSON.stringify(sabmidatastore));
        }
        const alldata = await AsyncStorage.getItem('otherUserData');
        console.log("allldata", alldata);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, [sabmidatastore]);

  return (
    <View style={styles.lastscreencontainer}>
      <Text style={styles.submittxt}>Submitted data Successfully!!!!!!</Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
        style={styles.buttoncontainer}>
         <Text style={styles.buttontxt}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};
