import React, { useState } from 'react';
import { Button, SafeAreaView, View, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { PrimaryButton } from '../../component';
import { styles, pickerSelectStyles } from '../../style/Styles';

export const Home = ({ navigation }) => {
  const [city, setCity] = useState("");

  const [formData, setFormData] = useState({
    city: '',
    ridername: '',
    contact: '',
    securityamount: ''
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.city) {
      errors.city = "City is required.";
    }
    if (!formData.ridername) {
      errors.ridername = "Rider name is required.";
    }
    if (!formData.contact) {
      errors.contact = "Contact number is required.";
    }
    if (!formData.securityamount) {
      errors.securityamount = "Security amount is required.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        city: '',
        ridername: '',
        contact: '',
        securityamount: ''
      });
      navigation.navigate('Payment', { submittedData: [...submittedData, formData] });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
          <Text style={styles.headertxt}>Form Details</Text>
          <Text style={styles.labeltxt}>City</Text>
          <View style={styles.inputfielddropdown}>
            <RNPickerSelect
              onValueChange={(text) => setFormData({ ...formData, city: text })}
              items={[
                { label: "Indore", value: "Indore" },
                { label: "Bhopal", value: "Bhopal" },
                { label: "Ujjain", value: "Ujjain" },
                { label: "Rewa", value: "Rewa" },
                { label: "Satna", value: "Satna" },
                { label: "Dewas", value: "Dewas" },
              ]}
              style={pickerSelectStyles}
            />
          </View>
          {formErrors.city && <Text style={styles.errorText}>{formErrors.city}</Text>}

          <Text style={styles.labeltxt}>Rider Name</Text>
          <TextInput
            value={formData.ridername}
            onChangeText={(text) => setFormData({ ...formData, ridername: text })}
            style={styles.inputfield} />
          {formErrors.ridername && <Text style={styles.errorText}>{formErrors.ridername}</Text>}
          <Text style={styles.labeltxt}>Contact No.</Text>
          <TextInput
            value={formData.contact}
            onChangeText={(text) => setFormData({ ...formData, contact: text })}
            keyboardType='numeric'
            maxLength={10}
            style={styles.inputfield} />
          {formErrors.contact && <Text style={styles.errorText}>{formErrors.contact}</Text>}
          <Text style={styles.labeltxt}>Security Amount</Text>
          <TextInput
            value={formData.securityamount}
            onChangeText={(text) => setFormData({ ...formData, securityamount: text })}
            maxLength={8}
            keyboardType='numeric'
            style={styles.inputfield} />
          {formErrors.securityamount && <Text style={styles.errorText}>{formErrors.securityamount}</Text>}
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.buttoncontainer}>
            <Text style={styles.buttontxt}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}






























