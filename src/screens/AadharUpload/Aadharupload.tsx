import React, {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from '../../style/Styles';
import {upload} from '../../assest';

export const Document = ({navigation, route}) => {
  const params = route?.params;

  const [aadharuploaddata, setAadharuploaddata] = useState({
    uploadAdharno: '',
    adharfileResponse: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    aadharNumber: '',
  });

  const handleAdharDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.plainText,
          DocumentPicker.types.video,
        ],
        allowMultiSelection: false,
      });
      setAadharuploaddata(prev => ({...prev, adharfileResponse: response}));
    } catch (err) {
      console.warn('error====>>>>>>', err);
    }
  }, []);

  const [aadharsumbiteddata, setAadharsumbiteddata] = useState(
    params?.onboardingsumbiteddata,
  );

  const handleAdharuploadSubmit = () => {
    setValidationErrors({
      aadharNumber: '',
    });

    // Form validation checks
    if (
      !aadharuploaddata.uploadAdharno ||
      aadharuploaddata.uploadAdharno.length !== 12
    ) {
      setValidationErrors(prev => ({
        ...prev,
        aadharNumber: 'Please enter a valid Aadhaar card number (12 digits)',
      }));
      return;
    }

    setAadharsumbiteddata([...aadharsumbiteddata, aadharuploaddata]);
    setAadharuploaddata({
      ...aadharuploaddata,
      adharfileResponse: [],
    });

    navigation.navigate('PandoucmentUplaod', {
      aadharsumbiteddata: [...aadharsumbiteddata, aadharuploaddata],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text style={styles.headertxt}>Aadhaar Details</Text>
          <Text style={styles.labeltxt}>Aadhaar card No</Text>
          <TextInput
            onChangeText={text =>
              setAadharuploaddata({...aadharuploaddata, uploadAdharno: text})
            }
            value={aadharuploaddata.uploadAdharno}
            maxLength={12}
            keyboardType="numeric"
            style={styles.inputfield}
          />
          {validationErrors.aadharNumber ? (
            <Text style={styles.errorText}>
              {validationErrors.aadharNumber}
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              width: '40%',
              marginTop: 20,
              marginLeft: 12,
              borderRadius: 12,
              justifyContent: 'center',
              marginBottom: 12,
              alignItems: 'center',
            }}
            onPress={handleAdharDocumentSelection}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.labeltxt}>Upload Aadhaar</Text>
              <Image
                source={upload}
                style={{width: 30, height: 30, marginTop: 10}}
              />
            </View>
          </TouchableOpacity>
          {aadharuploaddata.adharfileResponse?.map((file, id) => (
            <Image
              key={id.toString()}
              source={{uri: file.uri}}
              style={styles.img}
            />
          ))}

          <TouchableOpacity>
            <TouchableOpacity
              onPress={handleAdharuploadSubmit}
              style={styles.buttoncontainer}>
              <Text style={styles.buttontxt}>Next</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
