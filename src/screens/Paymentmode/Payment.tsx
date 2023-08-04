import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingViewr, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from '../../style/Styles';
import { PrimaryButton } from '../../component';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Payment = ({ navigation, route }) => {
    const { submittedData } = route.params;
    const [paymentdata, setPaymentdata] = useState({
        paymentridername: '',
        paymentcontactno: ''
    });

    const [paymentmode, setpaymentmode] = useState("");
    const [paymentsumbiteddata, setPaymentsubmiteddata] = useState(submittedData);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!paymentmode) {
            errors.paymentmode = "Payment mode is required.";
        } else if (paymentmode === "Cash") {
            if (!paymentdata.paymentridername) {
                errors.paymentridername = "Rider name is required.";
            }
            if (!paymentdata.paymentcontactno) {
                errors.paymentcontactno = "Contact number is required.";
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handlepaymentSubmit = () => {
        const isValid = validateForm();
        if (isValid) {
            setPaymentsubmiteddata([...paymentsumbiteddata, paymentdata])
            setPaymentdata({
                paymentridername: '',
                paymentcontactno: ''
            })
            navigation.navigate('Onboarding', { paymentsumbiteddata: [...paymentsumbiteddata, paymentdata] });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={60}
                style={{ flex: 1 }} >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                    <Text style={[styles.headertxt, { marginTop: 30, marginBottom: 20 }]}>Paymentmode Details</Text>
                    <Text style={styles.labeltxt}>Payment Mode</Text>
                    <View style={styles.inputfielddropdown}>
                        <RNPickerSelect
                            onValueChange={(paymentmode) => setpaymentmode(paymentmode)}
                            items={[
                                { label: "Cash", value: "Cash" },
                                { label: "Online", value: "Online" },
                            ]}
                            style={pickerSelectStyles}
                        />
                    </View>
                    {formErrors.paymentmode && <Text style={styles.errorText}>{formErrors.paymentmode}</Text>}

                    {paymentmode === "Cash" &&
                        <View>
                            <Text style={styles.labeltxt}>Rider name</Text>
                            <TextInput
                                onChangeText={(text) => setPaymentdata({ ...paymentdata, paymentridername: text })}
                                value={paymentdata.paymentridername}
                                style={styles.inputfield} />
                            {formErrors.paymentridername && <Text style={styles.errorText}>{formErrors.paymentridername}</Text>}

                            <Text style={styles.labeltxt}>Contact No.</Text>
                            <TextInput
                                onChangeText={(text) => setPaymentdata({ ...paymentdata, paymentcontactno: text })}
                                value={paymentdata.paymentcontactno}
                                keyboardType='numeric'
                                maxLength={10}
                                style={styles.inputfield} />
                            {formErrors.paymentcontactno && <Text style={styles.errorText}>{formErrors.paymentcontactno}</Text>}
                        </View>
                    }

                    {/* {paymentmode === "Online" && navigation.navigate('Onboarding')} */}

                    <TouchableOpacity
                        onPress={handlepaymentSubmit}
                        style={styles.buttoncontainer}
                    >
                        <Text style={styles.buttontxt}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}