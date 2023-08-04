import {StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:30
    },
    headertxt: {
      fontSize: 26,
      fontWeight: "bold",
      alignSelf: "center",
      color: "#116D6E",
    },
    uri: {
      paddingBottom: 8,
      paddingHorizontal: 18,
    },
    img: {
      width: '100%',
      height: 200,
      resizeMode: "cover"
    },
    labeltxt: {
      marginTop: 12,
      color: "#000",
      fontSize: 18,
      paddingHorizontal: 12,
      fontWeight: "bold"
    },
    inputfield: {
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
      padding:Platform.OS === "ios" ? 13 : null,
      color:"#000"
    },
    inputfielddropdown: {
      borderWidth: 1,
      marginTop: 12,
      marginHorizontal: 12,
      borderRadius: 6,
    },
    buttoncontainer: { backgroundColor: "#22A699", padding: 12, width: "80%", alignSelf: "center", marginTop: 20, borderRadius: 12 },
   buttontxt: { fontSize: 22, color: "#fff", alignSelf: "center" },
   errorText:{color:"red",marginLeft:12,marginTop:6,fontWeight:"500"},
   lastscreencontainer:{flex:1,justifyContent:"center",alignItems:"center"},
   submittxt:{fontSize:27,color:"#22A699"}
  });

  export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 6,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      margin: 5,
      paddingRight: 30
    },
    inputAndroid: {
      fontSize: 16,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      margin: 5,
      marginTop: 12
  
    },
    profileimg:{
     width:20,
     height:20,
     alignSelf:"center",
     alignItems:"center",
     justifyContent:"center"
    }
  });