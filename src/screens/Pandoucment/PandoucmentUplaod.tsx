import {
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
import React, {useCallback, useState} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import {styles} from '../../style/Styles';
import {PrimaryButton} from '../../component';
import {upload} from '../../assest';
export const PandoucmentUplaod = ({navigation, route}) => {
  const routes = route?.params;

  const [panuploaddata, setPanuploaddata] = useState({
    pancardno: ' ',
    panfileResponse: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    panNumber: '',
  });
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
        allowMultiSelection: false,
      });
      setPanuploaddata(prev => ({...prev, panfileResponse: response}));
    } catch (err) {
      console.warn('error====>>>>>> ', err);
    }
  }, []);

  const [pansumbiteddata, setPansumbiteddata] = useState(
    routes?.aadharsumbiteddata,
  );

  const handlePanuploadSubmit = () => {
    setValidationErrors({
      panNumber: '',
    });

    if (!panuploaddata.pancardno || panuploaddata.pancardno.length !== 12) {
      setValidationErrors(prev => ({
        ...prev,
        panNumber: 'Please enter a valid pan cardno. card number (12 digits)',
      }));
      return;
    }

    setPansumbiteddata([...pansumbiteddata, panuploaddata]);
    setPanuploaddata({
      //pancardno: " ",
      ...panuploaddata,
      panfileResponse: [],
    });

    navigation.navigate('BankAccountdetails', {
      pansumbiteddata: [...pansumbiteddata, panuploaddata],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <Text style={styles.headertxt}>Pan Details</Text>
          <Text style={styles.labeltxt}>Pan card No</Text>
          <TextInput
            onChangeText={text =>
              setPanuploaddata({...panuploaddata, pancardno: text})
            }
            value={panuploaddata.pancardno}
            maxLength={12}
            keyboardType="numeric"
            style={styles.inputfield}
          />
          {validationErrors.panNumber ? (
            <Text style={styles.errorText}>{validationErrors.panNumber}</Text>
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
            onPress={handlePanDocumentSelection}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.labeltxt}>Upload Pancard</Text>
              <Image
                source={upload}
                style={{width: 30, height: 30, marginTop: 10}}
              />
            </View>
          </TouchableOpacity>
          {panuploaddata.panfileResponse.map((file, index) =>
            panuploaddata.panfileResponse ? (
              <Image source={{uri: file?.uri}} style={styles.img} />
            ) : (
              <Text>Choose File</Text>
            ),
          )}

          <TouchableOpacity>
            <TouchableOpacity
              onPress={handlePanuploadSubmit}
              style={styles.buttoncontainer}>
              <Text style={styles.buttontxt}>Next</Text>
            </TouchableOpacity>

            {/* <PrimaryButton
              title="Next"
              buttonText='BankAccountdetails'
              navigation={navigation} /> */}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
