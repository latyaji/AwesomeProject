import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../style/Styles';
import axios from 'axios';

const baseUrl = "http://43.204.22.176:3000/users";
//const baseUrl = "https://api.publicapis.org/entries";


export const Submitdata = ({ navigation, route }) => {
  const { sabmidatastore } = route?.params;
  //console.log("alldata===>>", sabmidatastore)
  // console.log("sabmidatastore[3333]=========!!!!!!!",sabmidatastore[3])
  // console.log("sabmidatastore[44444]=========!!!!!!!",sabmidatastore[4])
  // console.log("sabmidatastore[555555]=========!!!!!!!",sabmidatastore[5])
  // console.log("sabmidatastore[66666]=========!!!!!!!",sabmidatastore[6])





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
    //console.log("merge data",data)
    try {
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
        aadhaar_card_image: sabmidatastore[3]?.adharfileResponse[0],
        pan_card_image: sabmidatastore[4]?.panfileResponse[0],
        bank_account_details_image: sabmidatastore[5]?.panfileResponse[0],
        click_photo_image: sabmidatastore[6]?.panfileResponse[0]
      }

      const formData = new FormData();
      //console.log("checkkkkkkk",formData) //object of array bn jata hai.
      Object.keys(data).forEach(key => formData.append(key, data[key]));

      console.log("######### NewFormData", formData)
      // data.aadhaar_card_image_url = 

      console.log("formDataNew", data)
      const response = await axios.post(`http://43.204.22.176:3000/users`, formData);
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
        <Text style={styles.buttontxt}>Go To Home</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttoncontainer}>
        <Text style={styles.buttontxt}>Go To Home</Text>
      </TouchableOpacity>

    </View>
  );
};
