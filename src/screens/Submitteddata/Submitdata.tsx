import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../style/Styles';
import axios from 'axios';

const baseUrl = "http://43.204.22.176:3000/users";
//const baseUrl = "https://api.publicapis.org/entries";


export const Submitdata = ({ navigation, route }) => {
  const { sabmidatastore } = route?.params;
  console.log("alldata===>>", sabmidatastore)
  console.log("sabmidatastore[3]=========",sabmidatastore[3]?.adharfileResponse[4])





  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     const data = await AsyncStorage.getItem('otherUserData');
    //     if (data) {
    //       const getdata = JSON.parse(data);
    //       await AsyncStorage.setItem('otherUserData', JSON.stringify([...getdata, ...sabmidatastore]));
    //     } else {
    //       await AsyncStorage.setItem('otherUserData', JSON.stringify(sabmidatastore));
    //     }
    //     const alldata = await AsyncStorage.getItem('otherUserData');
    //     console.log("allldata", alldata);
    //   } catch (error) {
    //     console.error('Error loading data:', error);
    //   }
    // };

    // fetchData();
    apicall();
  }, [sabmidatastore]);



  const apicall = async () => {
    const data = {
      rider_name: sabmidatastore[0]?.ridername,
      city: sabmidatastore[0]?.city,
      security_amount: sabmidatastore[0]?.security_amount,
      contact_number: sabmidatastore[0]?.contact,
      payment_mode: sabmidatastore[2]?.paymentmode,
      onboarding_type: sabmidatastore[2]?.boardingtype,
      amount: sabmidatastore[2]?.amount,
      receiver_name: sabmidatastore[1]?.paymentridername,
      receiver_number: sabmidatastore[1]?.paymentcontactno,
      week_advance: sabmidatastore[2]?.firstweekadvance,
      client_name: sabmidatastore[2]?.clientname,
      aadhaar_card_number: sabmidatastore[3]?.uploadAdharno,
      pan_number: sabmidatastore[4]?.pancardno,
      bank_account_details: sabmidatastore[6]?.currentaddress,
      current_address: sabmidatastore[6]?.currentaddress,
      vehicle_number: sabmidatastore[6]?.vechicleno,
      charger_number: sabmidatastore[6]?.chargerno,
      battery_one: sabmidatastore[6]?.batterone,
      battery_two: sabmidatastore[6]?.battertwo,
      remark: sabmidatastore[6]?.remark,
    }
    //console.log("merge data",data)
    try {
      // const response = await axios.get(`${baseUrl}`, {

      console.log("%%%%%%%%%%%%% data", data)
      
      let NewFormData = new FormData();
      NewFormData.append('rider_name', 'harshu');
      NewFormData.append('city', 'pune');
      NewFormData.append('contact_number', '98266129255');
      NewFormData.append('pay_type', 'cash');
      NewFormData.append('onboarding_type', 'NBA');
      NewFormData.append('receiver_name', 'spna');
      NewFormData.append('receiver_number', '9999999999');
      NewFormData.append('week_advance', '1233');
      NewFormData.append('client_name', 'honda');
      NewFormData.append('aadhaar_card_number', '881734444444');
      NewFormData.append('pan_number', '1111111111111111');
      NewFormData.append('bank_account_details', '1234567');
      NewFormData.append('current_address', 'hariyana');
      NewFormData.append('vehicle_number', '2345');
      NewFormData.append('charger_number', '123');
      NewFormData.append('remark', 'Hello guys');
      NewFormData.append('battery_one', '1');
      NewFormData.append('battery_two', '2');
      NewFormData.append('security_amount', '12');
      NewFormData.append('amount', '32');


      console.log("formDataNew", NewFormData)
      const response = await axios.post(`http://43.204.22.176:3000/users`, {...data});
      console.log("response", response)
    } catch (error) {
      console.log("An error has occurred", error);

    }
  }

  return (
    <View style={styles.lastscreencontainer}>
      <Text style={styles.submittxt}>Thank You!!!!!!</Text>
      {/* <TouchableOpacity
        onPress={() => apicall()}
        style={styles.buttoncontainer}>
        <Text style={styles.buttontxt}>Api call</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttoncontainer}>
        <Text style={styles.buttontxt}>Go To Home</Text>
      </TouchableOpacity>

    </View>
  );
};
