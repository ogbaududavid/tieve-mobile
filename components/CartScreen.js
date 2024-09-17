import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import deleteCartItem from "../assets/utility/deleteCartItem";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "./CheckoutScreen";
import navigationHandler from "../assets/utility/navigationHandler";
import LoadPaymentScreen from "./LoadPaymentScreen";
import SuccessScreen from "./SuccessScreen";

const views = [0];
const UserCartScreen = ({navigation}) => {
  const[reload, setReload] = useState(false)
  if (global.usersCart.length > 0){
  global.total = 0
  return (
    
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView>
      {views.map(() => {
       
        return (
            <View style={Styles.viewScreen}>
            {global.usersCart.map((item) => {
              global.total += item.price
              return (
                <View style={Styles.itemSection}>
                  <Image
                    source={item.imageURL}
                    style={Styles.itemSectionImage}
                  />
                  <View style={{padding: 10}}>
                    <Text style={Styles.itemSectionText}>{`${item.color} ${item.brand} ${item.productType}`}</Text>
                    <Text style={Styles.itemSectionText}>{`Added: ${item.date}`}</Text>
                    <Text style={Styles.itemSectionPriceText}>{`Price: ${item.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
                    <Pressable
                      onPress={() => {deleteCartItem(item.uniqueID); setReload(true); setReload(!reload)}}
                      style={({pressed}) => ({
                        backgroundColor: pressed? "gray" : "red",
                        width: 80,
                        padding: 5,
                        marginTop: 20,
                      })}
                    >
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          fontSize: 10,
                          fontWeight: "bold",
                        }}
                      >
                        REMOVE
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
            </View>
        );
      })}
      <Text style={Styles.paymentTotal}> Payment Total: N{global.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        <TouchableOpacity
        onPress={() => navigationHandler({ navigation }, "Checkout")}      
        style={Styles.checkoutButton}>
          <Text style={Styles.checkoutButtonText} > Proceed To Checkout </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )} else {
    return(
      <SafeAreaView>     
         <Image
            style={Styles.emptyCartIcon}
            source={require("../assets/images/carticon.png")}
          />  
          <Text style={Styles.emptyMessage}> Your Cart is empty.</Text>
      </SafeAreaView>

    )
  }  
};

const Stack = createStackNavigator()
const  CartScreen = () => {
  return (
    <NavigationContainer
      independent = "true"
    >
      <Stack.Navigator>
        <Stack.Screen
          name="UserCart"
          component={UserCartScreen}
          options={{ header: () => null }}
        />
         <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ header: () => null }}
        />
          <Stack.Screen
          name="LoadPayment"
          component={LoadPaymentScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ header: () => null }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Styles = StyleSheet.create({
  viewScreen: {
    backgroundColor: "white",
  },
  itemSection: {
    width: "95%",
    flexDirection: "row",
    height: 120,
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  itemSectionText: {
    width: "100%",
    color: "black",
    fontSize: 11,
    justifyContent: "flex-start",
  },
  itemSectionPriceText: {
    width: "100%",
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  itemSectionImage: {
    width: "20%",
    height: "100%",
  },
  paymentTotal: {
    margin: 10,
    marginBottom: 2,
    borderRadius: 5,
    fontSize: 15,
  },
  checkoutButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#0f1a25",
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    
  },
  checkoutButtonText:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  paymentCashIcon: {
    width: 40,
    height: 40,
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  emptyCartIcon: {
    marginTop: "40%",
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 10,
  }
});

export default CartScreen;
