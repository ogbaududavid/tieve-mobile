import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CatalogueScreen from "./CatalogueScreen";
import { Image} from "react-native";
import CartScreen from "./CartScreen";
import LogoutScreen from "./LogoutScreen"

const Tab = createBottomTabNavigator();

//The home screen that holds the bottom tab navigators
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
          } else if (route.name === "Logout") {
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
        name="Logout"
        component={LogoutScreen}
        options={{ header: () => null }}
      />
      
    </Tab.Navigator>
  );
};

export default HomeScreen;
