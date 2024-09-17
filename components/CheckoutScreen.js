import React from 'react'
import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import navigationHandler from '../assets/utility/navigationHandler'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import LoadPaymentScreen from './LoadPaymentScreen'
import { View } from 'react-native'
const CheckoutScreen = ({navigation}) => {
    
    return (
      <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
        <View style={Styles.CheckoutScreen}>
          <View style={Styles.checkoutSection}>
            <Text style={Styles.checkoutSectionText}>Enter card details</Text>
            <Text style={Styles.checkoutSectionText}>Fullname</Text>
              <TextInput style={Styles.checkoutSectionInput}></TextInput>
            <Text style={Styles.checkoutSectionText}>Address</Text>
              <TextInput style={Styles.checkoutSectionInput}></TextInput>
            <Text style={Styles.checkoutSectionText}>Card Number</Text>
              <TextInput style={Styles.checkoutSectionInput} ></TextInput>
          </View>
        <Text style={{color: "black", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: 20}}>{`Payment Total: N${global.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
        <TouchableOpacity
        // onPress={() => navigationHandler({ navigation }, "LoadPayment")}      
        style={Styles.makePayment}>
          <Text style={Styles.makePaymentText} > Make Payment </Text>
          <Image
          style={Styles.paymentCashIcon}
          source={require("../assets/images/cashicon4.png")}
          />
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
}

const Styles =  StyleSheet.create({ 
  paymentTotal: {
    margin: 10,
    borderRadius: 5,
    fontSize: 15,
  },
  makePayment: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#0f1a25",
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    
  },
  makePaymentText:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  paymentCashIcon: {
    width: 40,
    height: 40,
  },
  checkoutSection: {
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%"
  },
  checkoutSectionInput: {
    borderWidth: 1,
    borderColor: "black",
    color: "black",
    padding: 10,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    
  },
  checkoutSectionText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left"
  }
})

export default CheckoutScreen