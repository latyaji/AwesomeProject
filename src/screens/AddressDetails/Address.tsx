import { SafeAreaView, Image, View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Platform, Alert, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import DocumentPicker, { types } from 'react-native-document-picker';
import { styles } from '../../style/Styles';
import { upload } from '../../assest';
export const Address = ({ navigation, route }) => {
  const { passbooksumbiteddata } = route?.params
  const [sumbiteddata, setsumbiteddata] = useState(passbooksumbiteddata); // Initialize with the submittedData

  const [validationErrors, setValidationErrors] = useState({
    currentAddress: '',
    vehicleNo: '',
    chargerNo: '',
    batteryOne: '',
    batteryTwo: '',
    remark: '',
  });

  const [addressuploaddata, setAddressuploaddata] = useState({
    currentaddress: '',
    vechicleno: '',
    chargerno: '',
    batterone: '',
    battertwo: '',
    remark: '',
    panfileResponse: [],

  })


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
      setAddressuploaddata((prev) => ({ ...prev, panfileResponse: response }))


    } catch (err) {
      console.warn("error====>>>>>> ", err);
    }
  }, []);



  const handleSubmit = () => {
    setValidationErrors({
      currentAddress: '',
      vehicleNo: '',
      chargerNo: '',
      batteryOne: '',
      batteryTwo: '',
      remark: '',
    });


    if (!addressuploaddata.currentaddress) {
      setValidationErrors((prevState) => ({ ...prevState, currentAddress: 'Please enter Current Address' }));
      return;
    }

    if (!addressuploaddata.vechicleno) {
      setValidationErrors((prevState) => ({ ...prevState, vehicleNo: 'Please enter Vehicle No.' }));
      return;
    }
    if (!addressuploaddata.chargerno) {
      setValidationErrors((prevState) => ({ ...prevState, chargerNo: 'Please enter Charger No.' }));
      return;
    }
    if (!addressuploaddata.batterone) {
      setValidationErrors((prevState) => ({ ...prevState, batteryOne: 'Please enter Battery 1' }));
      return;
    }
    if (!addressuploaddata.battertwo) {
      setValidationErrors((prevState) => ({ ...prevState, batteryTwo: 'Please enter Battery 2' }));
      return;
    }
    if (!addressuploaddata.remark) {
      setValidationErrors((prevState) => ({ ...prevState, remark: 'Please enter Remark' }));
      return;
    }

    const sabmidatastore = sumbiteddata || []
    setsumbiteddata([...sabmidatastore, addressuploaddata])
    setAddressuploaddata({
      currentaddress: '',
      vechicleno: '',
      chargerno: '',
      batterone: '',
      battertwo: '',
      remark: '',
      panfileResponse: []
    })


    navigation.navigate('Submitdata', { sabmidatastore: [...sabmidatastore, addressuploaddata] });
  }


  return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
          <Text style={styles.headertxt}>Address Details</Text>
          <Text style={styles.labeltxt}>Current Address</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, currentaddress: text })}
            value={addressuploaddata.currentaddress}
            style={styles.inputfield} />
          {validationErrors.currentAddress ? (
            <Text style={styles.errorText}>{validationErrors.currentAddress}</Text>
          ) : null}
          <Text style={styles.labeltxt}>Vechicle No.</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, vechicleno: text })}
            value={addressuploaddata.vechicleno}
            maxLength={12}
            keyboardType='numeric'
            style={styles.inputfield} />
          {validationErrors.vehicleNo ? (
            <Text style={styles.errorText}>{validationErrors.vehicleNo}</Text>
          ) : null}
          <Text style={styles.labeltxt}>Charger No.</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, chargerno: text })}
            value={addressuploaddata.chargerno}
            style={styles.inputfield} />
          {validationErrors.chargerNo ? (
            <Text style={styles.errorText}>{validationErrors.chargerNo}</Text>
          ) : null}

          <Text style={styles.labeltxt}>Battery 1</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, batterone: text })}
            value={addressuploaddata.batterone}
            style={styles.inputfield} />

          {validationErrors.batteryOne ? (
            <Text style={styles.errorText}>{validationErrors.batteryOne}</Text>
          ) : null}

          <Text style={styles.labeltxt}>Battery 2</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, battertwo: text })}
            value={addressuploaddata.battertwo}
            style={styles.inputfield} />
          {validationErrors.batteryTwo ? (
            <Text style={styles.errorText}>{validationErrors.batteryTwo}</Text>
          ) : null}
          <Text style={styles.labeltxt}>Remark</Text>
          <TextInput
            onChangeText={(text) => setAddressuploaddata({ ...addressuploaddata, remark: text })}
            value={addressuploaddata.remark}
            placeholder="Enter text here........"
            placeholderTextColor={"#000"}
            multiline={true}
            numberOfLines={5}
            keyboardType={
              Platform.OS == 'ios' ? 'ascii-capable' : 'visible-password'
            }
            style={{
              alignItems: 'center',
              height: 100,
              width: '95%',
              borderRadius: 5,
              textAlignVertical: 'top',
              marginHorizontal: 15,
              borderWidth: 1,
              margin: 12,
              alignSelf: "center",
              paddingLeft: 10
            }}
          />
          {validationErrors.remark ? (
            <Text style={styles.errorText}>{validationErrors.remark}</Text>
          ) : null}
          <TouchableOpacity
            style={{ width: "40%", marginTop: 20, marginLeft: 12, borderRadius: 12, justifyContent: "center", marginBottom: 12, alignItems: "center" }}
            onPress={handlePanDocumentSelection} >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.labeltxt}>Upload Profile</Text>
              <Image source={upload} style={{ width: 40, height: 30, marginTop: 10, alignSelf: "center" }} />
            </View>

          </TouchableOpacity>
          {addressuploaddata?.panfileResponse?.map((file, index) => (
            addressuploaddata?.panfileResponse ? <Image source={{ uri: file?.uri }} style={{ width: 150, height: 150, borderRadius: 75, alignSelf: "center" }} /> : null
          ))}

          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttoncontainer}
          >
            <Text style={styles.buttontxt}>Submit</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}




