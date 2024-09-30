import React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import verifyLogin from "../assets/utility/verifyLogin";
import navigationHandler from "../assets/utility/navigationHandler";

//A screen for creating a user's account
const CreateAccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.createAccountView}>
      <View>
        <Image
          style={styles.tieveLogo}
          source={require("../assets/images/tievelogo.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text style={styles.loginText}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Text style={styles.loginText}>Password</Text>
        <Pressable
          onPress={() => {
            verifyLogin(username, password, { navigation });
            global.username = username;
          }}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "gray" : "green",
            padding: 10,
          })}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Create My Account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigationHandler({ navigation }, "Login");
          }}
          style={({ pressed }) => ({
            borderBottomWidth: 2,
            borderBottomColor: pressed ? "green" : "orange",
            padding: 10,
            paddingBottom: 2,
          })}
        >
          <Text style={styles.signInLink}>Have an account? LOGN INSTEAD!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tieveLogo: {
    width: 50,
    height: 50,
    padding: 5,
    marginBottom: 50,
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
  },
  createAccountView: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  signInLink: {
    color: "white",
    marginTop: 2,
    textAlign: "center",
    padding: 5,
  },
  accountDetailsLabel: {
    marginBottom: 20,
    color: "white",
  },
});

export default CreateAccountScreen;
