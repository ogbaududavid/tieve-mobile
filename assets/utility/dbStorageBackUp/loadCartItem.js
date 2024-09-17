import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import storage from "../../components/storage";
import { useRef } from "react";
import { useState } from "react";

const loadCartItem = (username) => {
  let CartItems;
  userItemKey = username + "'s Cart"
  storage
    .load({
      key: userItemKey,
      autoSync: true,
      syncInBackground: true,
    })

    .then((ret) => {
       CartItems = ret.myCartItems
       console.log(CartItems)
      }
       
   
       )

    .catch((e) => {
      alert(e);
    });
};

const Styles = StyleSheet.create({
  parentItemDiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  safeAreaView: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default loadCartItem;
