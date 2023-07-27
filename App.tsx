import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <StatusBar hidden={true}/>
      <SafeAreaView>
         <Text>App</Text>
      </SafeAreaView>
     
    </View>
  )
}

export default App 