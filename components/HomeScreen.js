import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CatalogueScreen from "./CatalogueScreen";
import { View, Text, Image, StyleSheet, TextBase } from "react-native";
import CartScreen from "./CartScreen";
import AccountDetailsScreen   from "./AccountDetailsScreen";

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconPath;
          if (route.name === "Catalogue") {
            iconPath = require("../assets/images/homeicon.jpg");
            size = focused ? 30 : 20;
          } else if (route.name === "Cart") {
            iconPath = require("../assets/images/cart.jpg");
            size = focused ? 30 : 20;
          } else if (route.name === "AccountDetails") {
            iconPath = require("../assets/images/accounticon.png");
            size = focused ? 30 : 20;
          }
          return (
            <Image
              source={iconPath}
              style={{ maxHeight: size, maxWidth: size, borderRadius: 50 }}
            />
          );
        },
        tabBarInactiveBackgroundColor: "black",
        tabBarStyle: { borderTopWidth: 10, borderTopColor: "black", borderTopRightRadius: 10, borderTopLeftRadius: 10 },
        tabBarActiveBackgroundColor: "black",
        tabBarLabelStyle: { display: "none" },
      })}
    >
      
      <Tab.Screen
        name="Catalogue"
        component={CatalogueScreen}
        options={{ header: () => null, unmountOnBlur: true }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ header: () => null, unmountOnBlur: true}
      }
      />
     <Tab.Screen
        name="AccountDetails"
        component={AccountDetailsScreen}
        options={{ header: () => null }}
      />
      
    </Tab.Navigator>
  );
};

export default HomeScreen;
