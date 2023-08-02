// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import RNPickerSelect from "react-native-picker-select";
// import { styles, pickerSelectStyles } from '../../style/Styles';
// import { PrimaryButton } from '../../component';


// export const Payment = ({ navigation, route }) => {
//     //  console.log("Home screen route check=====>>>>", route.params)
//     const { submittedData } = route.params; // Access submittedData from the route parameter
//     // console.log("objecttttttt",submittedData)
//     const [paymentdata, setPaymentdata] = useState({
//         paymentridername: '',
//         paymentcontactno: ''

//     })

//     const [paymentmode, setpaymentmode] = useState("");
//     //const [paymentsumbiteddata,setPaymentsubmiteddata] = useState([])
//     const [paymentsumbiteddata, setPaymentsubmiteddata] = useState(submittedData); // Initialize with the submittedData

//     const handlepaymentSubmit = () => {
//         setPaymentsubmiteddata([...paymentsumbiteddata, paymentdata])
//         setPaymentdata({
//             paymentridername: '',
//             paymentcontactno: ''
//         })
//         navigation.navigate('Onboarding', { paymentsumbiteddata: [...paymentsumbiteddata, paymentdata] });
//     }
//     // console.log("paymentdatata=======",paymentsumbiteddata)
//     return (
//         <View>
//             <Text style={[styles.headertxt, { marginTop: 30, marginBottom: 20 }]}>Paymentmode Details</Text>
//             <Text style={styles.labeltxt}>Payment Mode</Text>
//             <View style={styles.inputfielddropdown}>
//                 <RNPickerSelect
//                     onValueChange={(paymentmode) => setpaymentmode(paymentmode)}
//                     items={[
//                         { label: "Cash", value: "Cash" },
//                         { label: "Online", value: "Online" },
//                     ]}
//                     style={pickerSelectStyles}
//                 />
//             </View>

//             {paymentmode == "Cash" ?
//                 <View>
//                     <Text style={styles.labeltxt}>Rider name</Text>
//                     <TextInput
//                         onChangeText={(text) => setPaymentdata({ ...paymentdata, paymentridername: text })}
//                         value={paymentdata.paymentridername}
//                         style={styles.inputfield} />
//                     <Text style={styles.labeltxt}>Contact No.</Text>
//                     <TextInput
//                         onChangeText={(text) => setPaymentdata({ ...paymentdata, paymentcontactno: text })}
//                         value={paymentdata.paymentcontactno}
//                         keyboardType='numeric'
//                         style={styles.inputfield} />
//                 </View>
//                 : null}
//             {paymentmode == "Online" ?
//                 navigation.navigate('Onboarding') : null}

//             <TouchableOpacity
//                 onPress={handlepaymentSubmit}
//                 style={styles.buttoncontainer}
//             >
//                 <Text style={styles.buttontxt}>Next</Text>
//             </TouchableOpacity>

//             {/* <PrimaryButton
//                 title="Next"
//                 buttonText='Onboarding'
//                 navigation={navigation}
//             /> */}
//         </View>
//     )
// }


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from '../../style/Styles';
import { PrimaryButton } from '../../component';

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
        if (paymentmode === "Cash") {
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
        <View>
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
                        style={styles.inputfield} />
                    {formErrors.paymentcontactno && <Text style={styles.errorText}>{formErrors.paymentcontactno}</Text>}
                </View>
            }

            {paymentmode === "Online" && navigation.navigate('Onboarding')}

            <TouchableOpacity
                onPress={handlepaymentSubmit}
                style={styles.buttoncontainer}
            >
                <Text style={styles.buttontxt}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}