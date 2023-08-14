import AsyncStorage from '@react-native-async-storage/async-storage'

export const Submitdata = async({navigation,route}) => {
  const {sabmidatastore} = route?.params
    console.log("Submitdata @@@@@@@@@",sabmidatastore)
    // AsyncStorage. removeItem('otherUserData')
   
      try {
        const data = await AsyncStorage.getItem('otherUserData');
        if (data) {
          const getdata = JSON.parse(data)
          await AsyncStorage.setItem('otherUserData', JSON.stringify([...getdata,...sabmidatastore]));
        //  console.log("async if data",data)
        }
        else{
          await AsyncStorage.setItem('otherUserData', JSON.stringify(sabmidatastore));
          // console.log("else data",data)

        }
        const alldata = await AsyncStorage.getItem('otherUserData');
        console.log("allldata",alldata)
      } catch (error) {
        console.error('Error loading data:', error);
      }   
}


