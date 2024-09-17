import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import navigationHandler from '../assets/utility/navigationHandler'
import { Text } from 'react-native'

const LoadPaymentScreen = ({navigation}) => {
    setTimeout(()=> navigationHandler({navigation}, "Success"), 1000 * 3)
  return (
    <SafeAreaView style={{backgroundColor: "black", flex: 1}}>
    <Text style={{color: "white", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 20, marginTop: "40%"}}>Loading...</Text>
    </SafeAreaView>
  )
}

export default LoadPaymentScreen