import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import CreateAccountScreen from "./components/CreateAccountScreen";

const Stack = createStackNavigator();

const ScreenA = ({ navigation }) => {
  setTimeout(() => navigation.navigate("Login"), 1000 * 2);
  return (
    <SafeAreaView style={styles.welcomescreen}>
      <View>
        <Image
          style={styles.tievelogo}
          source={require("./assets/images/tievelogo.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loading..."
          component={ScreenA}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Create"
          component={CreateAccountScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  welcomescreen: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  tievelogo: {},
});

export default App;
