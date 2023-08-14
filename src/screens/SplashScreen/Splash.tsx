import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

export const Splash = ({ navigation }) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },1000)

  },[])
  return (
    
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <Text style={styles.centertxt}>OnBoarding Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#afc7c7"
  },
  centertxt:{
    fontSize:30,
    fontWeight:"bold",
    color:"#116D6E"
  }
})
















