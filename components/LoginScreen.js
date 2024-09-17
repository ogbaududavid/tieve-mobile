import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import navigationHandler from "../assets/utility/navigationHandler";
import loginUser from "../assets/utility/loginUser";

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.loginView}>
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
            loginUser(username, password, { navigation });
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
            Login Account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigationHandler({ navigation }, "Create");
          }}
          style={({ pressed }) => ({
            borderBottomWidth: 2,
            borderBottomColor: pressed ? "green" : "orange",
            padding: 10,
            paddingBottom: 2,
          })}
        >
          <Text style={styles.signInLink}>
            Don't have an account? CREATE ONE!
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    padding: 10,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
  },
  loginView: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    marginBottom: 20,
    color: "white",
  },
  signInLink: {
    color: "white",
    marginTop: 2,
    textAlign: "center",
    padding: 5,
  },
  createAccountLink: {
    color: "gold",
    marginTop: 2,
    textAlign: "center",
    padding: 10,
  },
  tieveLogo: {
    width: 50,
    height: 50,
    padding: 5,
    marginBottom: 50,
    alignSelf: "center",
  },
});

export default LoginScreen;
