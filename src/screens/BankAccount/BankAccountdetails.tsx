import { Button, SafeAreaView, Image, View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native';
import React, { useCallback, useState } from 'react';
import DocumentPicker, { types } from 'react-native-document-picker';
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from '../../style/Styles';
import { PrimaryButton } from '../../component';
import { upload } from '../../assest';
export const BankAccountdetails = ({ navigation , route }) => {
  const routes = route?.params
  const [passbookuploaddata, setPassbookuploaddata] = useState({
    panfileResponse: []
  })

  const [passbooksumbiteddata, setPassbooksumbiteddata] = useState(routes?.pansumbiteddata); // Initialize with the submittedData

  const handlePanDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.plainText,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: true,
      });
     
     setPassbookuploaddata({...passbookuploaddata, panfileResponse: response })


    } catch (err) {
      console.warn("error====>>>>>> ", err);
    }
  }, []);

const handlePassbookSubmit = () => {
  setPassbooksumbiteddata([...passbooksumbiteddata, passbookuploaddata])
  setPassbookuploaddata({
    panfileResponse: []
  })

  navigation.navigate('Address', { passbooksumbiteddata: [...passbooksumbiteddata, passbookuploaddata] });
}

  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
          <Text style={styles.headertxt}>BankAccount Details</Text>
          <TouchableOpacity
            style={{ width: "40%", marginTop: 20, marginLeft: 12, borderRadius: 12, justifyContent: "center", marginBottom: 12, alignItems: "center" }}
            onPress={handlePanDocumentSelection} >
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
              <Text style={styles.labeltxt}>Upload Passbook</Text>
              <Image source={upload} style={{ width: 30, height: 30, marginTop: 10 }} />
            </View>
          </TouchableOpacity>
          {passbookuploaddata.panfileResponse.map((file, index) => (
            passbookuploaddata.panfileResponse ? <Image source={{ uri: file?.uri }} style={styles.img} /> : <Text>Choose File</Text>
          ))}
          
          <TouchableOpacity>
          <TouchableOpacity
              onPress={handlePassbookSubmit}
              style={styles.buttoncontainer}
            >
              <Text style={styles.buttontxt}>Next</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


