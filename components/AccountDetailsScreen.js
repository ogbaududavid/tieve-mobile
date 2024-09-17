import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import storage from "./storage";

const AccountDetailsScreen = () => {
    let retrivedUsername;
    let retrivedPassword;
    storage
    .load({
      key: username,
      autoSync: true,
      syncInBackground: false,
    })
    .then((ret) => {
      retrivedUsername = ret.accountUsername;
      if (retrivedUsername === username) {
        retrivedPassword = ret.accountPassword;
        retrivedUsername = ret.accountUsername;
      }          
    })

    return (
        <SafeAreaView style={Styles.safeAreaView}>
              <ScrollView key={1}>
                <View style={Styles.parentItemDiv}>
                     <Text style={{color: "black"}}>Account Details {retrivedUsername}</Text>
                    <Text style={{color: "black"}}>Username: {retrivedUsername}</Text>
                    <Text style={{color: "black"}}>Password: {retrivedPassword}</Text>
                </View>
              </ScrollView>
        </SafeAreaView>
      ) 
}

const Styles = StyleSheet.create({
    parentItemDiv: {
      justifyContent: "center",
    },
    safeAreaView: {
      backgroundColor: "white",
      flex: 1,
    },
  });

export default AccountDetailsScreen