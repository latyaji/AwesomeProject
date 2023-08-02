import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

export const PrimaryButton = ({ navigation, ...props }) => {
   
    return (
        <TouchableOpacity
           onPress={() => navigation.navigate(props.buttonText)}
            style={styles.buttoncontainer}>
            <Text style={styles.buttontxt}>{props.title}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    buttoncontainer: { backgroundColor: "#22A699", padding: 12, width: "80%", alignSelf: "center", marginTop: 20, borderRadius: 12 },
    buttontxt: { fontSize: 22, color: "#fff", alignSelf: "center" }

})