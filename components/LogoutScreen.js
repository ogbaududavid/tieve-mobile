import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import storage from "./storage";
import { useNavigation } from "@react-navigation/native";
import logoutUser from "../assets/utility/logoutUser";

//A screen for login out an active account
const LogoutScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ret = await storage.load({
                    key: 'username', // Ensure 'username' is the correct key
                    autoSync: true,
                    syncInBackground: false,
                });
                if (ret.accountUsername) {
                    setRetrivedUsername(ret.accountUsername);
                    setRetrivedPassword(ret.accountPassword);
                }
            } catch (error) {
                console.error(error); // Handle error appropriately
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <SafeAreaView style={Styles.safeAreaView}>
            <ScrollView key={1}>
                <View style={Styles.parentItemDiv}>
                    <Image
                        source={require("../assets/images/accounticon.png")}
                        style={{ maxHeight: 100, maxWidth: 100, borderRadius: 50 }} // Replace with your size variable
                    />
                    <Text>{global.username}</Text>
                    <TouchableOpacity 
                      style={Styles.logoutButton}
                      onPress={() => {
                        logoutUser({navigation})
                      }}
                    >
                        <Text>Logout Account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    parentItemDiv: {
        justifyContent: "center",
        alignItems: "center", 
        height: 500
    },
    safeAreaView: {
        backgroundColor: "white",
        flex: 1,
    },
    logoutButton: {
        backgroundColor: 'orange',
        fontWeight: 'bold',
        padding: 10,
        width: 200,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default LogoutScreen;
