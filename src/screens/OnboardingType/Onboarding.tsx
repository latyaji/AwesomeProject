// import React, { useCallback, useState } from 'react';
// import { Button, SafeAreaView, StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native';
// import RNPickerSelect from "react-native-picker-select";
// import { styles, pickerSelectStyles } from '../../style/Styles';
// import { PrimaryButton } from '../../component';


// export const Onboarding = ({ navigation, route }) => {
   

//     const params = route?.params;
//    // console.log("paymentsumbiteddatapaymentsumbiteddatapaymentsumbiteddata=========>>>>", params?.paymentsumbiteddata)
//     // const [boardingtype, setboardingtype] = useState("");
//     // const [paymentmode, setpaymentmode] = useState("");

//     const [onboardingdata, setonboardingdata] = useState({
//         firstweekadvance: '',
//         amount: '',
//         clientname: '',
//         onboardingridername: '',
//         onboardingcontactno: '',
//         boardingtype: '',
//         paymentmode: '',

//     })
//     const [onboardingsumbiteddata, setOnboardingsumbiteddata] = useState(params?.paymentsumbiteddata); // Initialize with the submittedData

//     const handleonboardingSubmit = () => {

//         setOnboardingsumbiteddata([...onboardingsumbiteddata, onboardingdata])
//         setonboardingdata({
//             firstweekadvance: '',
//             amount: '',
//             clientname: '',
//             onboardingridername: '',
//             onboardingcontactno: '',
//             boardingtype: '',
//             paymentmode: '',
//         })

//         navigation.navigate('Document', { onboardingsumbiteddata: [...onboardingsumbiteddata, onboardingdata] });

//     }
    



//     return (

//         <SafeAreaView>
//             <KeyboardAvoidingView behavior='padding'>
//                 <ScrollView>
//                     <Text style={[styles.headertxt, { marginTop: Platform.OS == "ios" ? 30 : 30, marginBottom: 20 }]}>Onboarding Details</Text>
//                     <Text style={styles.labeltxt}>Onboarding Type</Text>
//                     <View style={styles.inputfielddropdown}>
//                         <RNPickerSelect
//                             // onValueChange={(boardingtype) => setboardingtype(boardingtype)}
//                             onValueChange={(text) => setonboardingdata({ ...onboardingdata, boardingtype: text })}

//                             items={[
//                                 { label: "NBA", value: "NBA" },
//                                 { label: "BW", value: "BW" },
//                             ]}
//                             style={pickerSelectStyles}
//                         />
//                     </View>

//                     {onboardingdata.boardingtype == "NBA" ?
//                         <View>
//                             <Text style={styles.labeltxt}>1st week advance</Text>
//                             <TextInput
//                                 onChangeText={(text) => setonboardingdata({ ...onboardingdata, firstweekadvance: text })}
//                                 value={onboardingdata.firstweekadvance}
//                                 keyboardType="phone-pad"
//                                 maxLength={8}
//                                 style={styles.inputfield} />
//                             <Text style={styles.labeltxt}>Amount</Text>
//                             <TextInput
//                                 onChangeText={(text) => setonboardingdata({ ...onboardingdata, amount: text })}
//                                 value={onboardingdata.amount}
//                                 maxLength={5}
//                                 keyboardType='numeric'
//                                 style={styles.inputfield} />
//                             <Text style={styles.labeltxt}>Payment Mode</Text>
//                             <View style={styles.inputfielddropdown}>
//                                 <RNPickerSelect
//                                     //onValueChange={(paymentmode) => setpaymentmode(paymentmode)}
//                                     onValueChange={(text) => setonboardingdata({ ...onboardingdata, paymentmode: text })}
//                                     items={[
//                                         { label: "Cash", value: "Cash" },
//                                         { label: "Online", value: "Online" },
//                                     ]}
//                                     style={pickerSelectStyles}
//                                 />
//                             </View>

//                             {onboardingdata.paymentmode == "Cash" ?
//                                 <View>
//                                     <Text style={styles.labeltxt}>Rider name</Text>
//                                     <TextInput
//                                         onChangeText={(text) => setonboardingdata({ ...onboardingdata, onboardingridername: text })}
//                                         value={onboardingdata.onboardingridername}
//                                         style={styles.inputfield} />
//                                     <Text style={styles.labeltxt}>Contact No.</Text>
//                                     <TextInput
//                                         onChangeText={(text) => setonboardingdata({ ...onboardingdata, onboardingcontactno: text })}
//                                         value={onboardingdata.onboardingcontactno}
//                                         maxLength={10}
//                                         keyboardType='numeric'
//                                         style={styles.inputfield} />
//                                 </View>
//                                 : navigation.navigate('Onboarding')}
//                         </View>
//                         : <>
//                             <Text style={styles.labeltxt}>Client Name</Text>
//                             <TextInput
//                                 onChangeText={(text) => setonboardingdata({ ...onboardingdata, clientname: text })}
//                                 value={onboardingdata.clientname}
//                                 maxLength={5}
//                                 keyboardType='numeric'
//                                 style={styles.inputfield} />
//                         </>
//                     }

//                     <TouchableOpacity
//                         onPress={handleonboardingSubmit}
//                         style={styles.buttoncontainer}
//                     >
//                         <Text style={styles.buttontxt}>Next</Text>
//                     </TouchableOpacity>

                

//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </SafeAreaView>


//     )
// }



import React, { useCallback, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from '../../style/Styles';
import { PrimaryButton } from '../../component';


export const Onboarding = ({ navigation, route }) => {
   

    const params = route?.params;
   // console.log("paymentsumbiteddatapaymentsumbiteddatapaymentsumbiteddata=========>>>>", params?.paymentsumbiteddata)
    // const [boardingtype, setboardingtype] = useState("");
    // const [paymentmode, setpaymentmode] = useState("");

    const [onboardingdata, setonboardingdata] = useState({
        firstweekadvance: '',
        amount: '',
        clientname: '',
        onboardingridername: '',
        onboardingcontactno: '',
        boardingtype: '',
        paymentmode: '',

    })

    const [validationErrors, setValidationErrors] = useState({
        onboardingType: '',
        firstWeekAdvance: '',
        amount: '',
        paymentMode: '',
        riderName: '',
        contactNo: '',
        clientName: '',
    });

    const [onboardingsumbiteddata, setOnboardingsumbiteddata] = useState(params?.paymentsumbiteddata); // Initialize with the submittedData

    const handleonboardingSubmit = () => {

        setValidationErrors({
            onboardingType: '',
            firstWeekAdvance: '',
            amount: '',
            paymentMode: '',
            riderName: '',
            contactNo: '',
            clientName: '',
        });

            // Form validation checks
            if (!onboardingdata.boardingtype) {
                setValidationErrors((prevState) => ({ ...prevState, onboardingType: 'Please select Onboarding Type' }));
                return;
            }
    
            if (onboardingdata.boardingtype === 'NBA') {
                if (!onboardingdata.firstweekadvance) {
                    setValidationErrors((prevState) => ({ ...prevState, firstWeekAdvance: 'Please enter 1st week advance' }));
                    return;
                }
    
                if (!onboardingdata.amount) {
                    setValidationErrors((prevState) => ({ ...prevState, amount: 'Please enter Amount' }));
                    return;
                }
    
                if (!onboardingdata.paymentmode) {
                    setValidationErrors((prevState) => ({ ...prevState, paymentMode: 'Please select Payment Mode' }));
                    return;
                }
    
                if (onboardingdata.paymentmode === 'Cash') {
                    if (!onboardingdata.onboardingridername) {
                        setValidationErrors((prevState) => ({ ...prevState, riderName: 'Please enter Rider Name' }));
                        return;
                    }
    
                    if (!onboardingdata.onboardingcontactno) {
                        setValidationErrors((prevState) => ({ ...prevState, contactNo: 'Please enter Contact No.' }));
                        return;
                    }
                }
            } else {
                if (!onboardingdata.clientname) {
                    setValidationErrors((prevState) => ({ ...prevState, clientName: 'Please enter Client Name' }));
                    return;
                }
            }


        setOnboardingsumbiteddata([...onboardingsumbiteddata, onboardingdata])
        setonboardingdata({
            firstweekadvance: '',
            amount: '',
            clientname: '',
            onboardingridername: '',
            onboardingcontactno: '',
            boardingtype: '',
            paymentmode: '',
        })

        navigation.navigate('Document', { onboardingsumbiteddata: [...onboardingsumbiteddata, onboardingdata] });

    }
    
    return (

        <SafeAreaView>
            <KeyboardAvoidingView behavior='padding'>
                <ScrollView>
                    <Text style={[styles.headertxt, { marginTop: Platform.OS == "ios" ? 30 : 30, marginBottom: 20 }]}>Onboarding Details</Text>
                    <Text style={styles.labeltxt}>Onboarding Type</Text>
                    <View style={styles.inputfielddropdown}>
                        <RNPickerSelect
                            // onValueChange={(boardingtype) => setboardingtype(boardingtype)}
                            onValueChange={(text) => setonboardingdata({ ...onboardingdata, boardingtype: text })}

                            items={[
                                { label: "NBA", value: "NBA" },
                                { label: "BW", value: "BW" },
                            ]}
                            style={pickerSelectStyles}
                        />
                    </View>

                    {onboardingdata.boardingtype == "NBA" ?
                        <View>
                            <Text style={styles.labeltxt}>1st week advance</Text>
                            <TextInput
                                onChangeText={(text) => setonboardingdata({ ...onboardingdata, firstweekadvance: text })}
                                value={onboardingdata.firstweekadvance}
                                keyboardType="phone-pad"
                                maxLength={8}
                                style={styles.inputfield} />
                                {validationErrors.firstWeekAdvance ? (
                                    <Text style={styles.errorText}>{validationErrors.firstWeekAdvance}</Text>
                                ) : null}
                            <Text style={styles.labeltxt}>Amount</Text>
                            <TextInput
                                onChangeText={(text) => setonboardingdata({ ...onboardingdata, amount: text })}
                                value={onboardingdata.amount}
                                maxLength={5}
                                keyboardType='numeric'
                                style={styles.inputfield} />
                                 {validationErrors.amount ? (
                                    <Text style={styles.errorText}>{validationErrors.amount}</Text>
                                ) : null}
                            <Text style={styles.labeltxt}>Payment Mode</Text>
                            <View style={styles.inputfielddropdown}>
                                <RNPickerSelect
                                    //onValueChange={(paymentmode) => setpaymentmode(paymentmode)}
                                    onValueChange={(text) => setonboardingdata({ ...onboardingdata, paymentmode: text })}
                                    items={[
                                        { label: "Cash", value: "Cash" },
                                        { label: "Online", value: "Online" },
                                    ]}
                                    style={pickerSelectStyles}
                                />
                            </View>

                            {onboardingdata.paymentmode == "Cash" ?
                                <View>
                                    <Text style={styles.labeltxt}>Rider name</Text>
                                    <TextInput
                                        onChangeText={(text) => setonboardingdata({ ...onboardingdata, onboardingridername: text })}
                                        value={onboardingdata.onboardingridername}
                                        style={styles.inputfield} />
                                         {validationErrors.riderName ? (
                                        <Text style={styles.errorText}>{validationErrors.riderName}</Text>
                                    ) : null}
                                    <Text style={styles.labeltxt}>Contact No.</Text>
                                    <TextInput
                                        onChangeText={(text) => setonboardingdata({ ...onboardingdata, onboardingcontactno: text })}
                                        value={onboardingdata.onboardingcontactno}
                                        maxLength={10}
                                        keyboardType='numeric'
                                        style={styles.inputfield} />
                                         {validationErrors.contactNo ? (
                                        <Text style={styles.errorText}>{validationErrors.contactNo}</Text>
                                    ) : null}
                                </View>
                                : navigation.navigate('Onboarding')}
                        </View>
                        : <>
                            <Text style={styles.labeltxt}>Client Name</Text>
                            <TextInput
                                onChangeText={(text) => setonboardingdata({ ...onboardingdata, clientname: text })}
                                value={onboardingdata.clientname}
                    
                                style={styles.inputfield} />
                                 {validationErrors.clientName ? (
                                <Text style={styles.errorText}>{validationErrors.clientName}</Text>
                            ) : null}
                        </>
                    }

                    <TouchableOpacity
                        onPress={handleonboardingSubmit}
                        style={styles.buttoncontainer}
                    >
                        <Text style={styles.buttontxt}>Next</Text>
                    </TouchableOpacity>

                

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>


    )
}







