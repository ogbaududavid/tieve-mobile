import { React, useContext, useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemDisplayBuild from "./ItemDisplayBuild";

const views = ["0"];
const CatalogueScreen = () => {
  const catalogue = [
    {
      id: 1,
      productType: "Joggers",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/joggers/jogger1.jpg"),
      price: 15000,
      color: "Black",
    },
    {
      id: 2,
      productType: "Joggers",
      brand: "Louis Vuitton",
      size: "10",
      imageURL: require("../assets/images/joggers/jogger4.jpg"),
      price: 20000,
      color: "Brown",
    },
    {
      id: 3,
      productType: "Joggers",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/joggers/jogger3.jpg"),
      price: 20000,
      color: "Black",
    },
    {
      id: 4,
      productType: "Joggers",
      brand: "Channel",
      size: "8",
      imageURL: require("../assets/images/joggers/jogger4.jpg"),
      price: 10000,
      color: "Yellow",
    },
    {
      id: 5,
      productType: "Joggers",
      brand: "Herencia",
      size: "8",
      imageURL: require("../assets/images/joggers/jogger5.webp"),
      price: 15000,
      color: "Peach",
    },
    {
      id: 6,
      productType: "Joggers",
      brand: "Gucci",
      size: "12",
      imageURL: require("../assets/images/joggers/jogger6.jpg"),
      price: 23000,
      color: "Black & White",
    },
    {
      id: 7,
      productType: "Joggers",
      brand: "Tieve",
      size: "8",
      imageURL: require("../assets/images/joggers/jogger7.webp"),
      price: 18000,
      color: "Brown",
    },
    {
      id: 8,
      productType: "Joggers",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/joggers/jogger9.webp"),
      price: 1800,
      color: "Gray & White",
    },
    {
      id: 9,
      productType: "Joggers",
      brand: "Tieve",
      size: "12",
      imageURL: require("../assets/images/joggers/jogger10.webp"),
      price: 15000,
      color: "Gray",
    },
    {
      id: 10,
      productType: "Joggers",
      brand: "Tieve",
      size: "8",
      imageURL: require("../assets/images/joggers/jogger11.jpg"),
      price: 18000,
      color: "Black & White",
    },
    {
      id: 11,
      productType: "Dresses",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/dresses/dress1.jpg"),
      price: 25000,
      color: "Blue",
    },
    {
      id: 12,
      productType: "Dresses",
      brand: "Yomi Casual",
      size: "10",
      imageURL: require("../assets/images/dresses/dress2.jpg"),
      price: 20000,
      color: "White",
    },
    {
      id: 13,
      productType: "Dresses",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/dresses/dress3.jpg"),
      price: 20000,
      color: "Black",
    },
    {
      id: 14,
      productType: "Dresses",
      brand: "Tieve",
      size: "8",
      imageURL: require("../assets/images/dresses/dress4.jpg"),
      price: 35000,
      color: "Black",
    },
    {
      id: 15,
      productType: "Dresses",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/dresses/dress5.jpg"),
      price: 20000,
      color: "Gold",
    },
    {
      id: 16,
      productType: "Dresses",
      brand: "Tieve",
      size: "12",
      imageURL: require("../assets/images/dresses/dress6.jpg"),
      price: 18000,
      color: "Orange",
    },
    {
      id: 17,
      productType: "Dresses",
      brand: "Tieve",
      size: "8",
      imageURL: require("../assets/images/dresses/dress7.jpg"),
      price: 18000,
      color: "Gold",
    },
    {
      id: 18,
      productType: "Dresses",
      brand: "D&G",
      size: "14",
      imageURL: require("../assets/images/dresses/dress8.jpg"),
      price: 18000,
      color: "Dark Green",
    },
    {
      id: 19,
      productType: "Dresses",
      brand: "Tieve",
      size: "14",
      imageURL: require("../assets/images/dresses/dress9.jpg"),
      price: 45000,
      color: "Light Brown",
    },
    {
      id: 20,
      productType: "Dresses",
      brand: "Tieve",
      size: "10",
      imageURL: require("../assets/images/dresses/dress10.jpg"),
      price: 23000,
      color: "Green",
    },
    {
      id: 21,
      productType: "Shoes",
      brand: "Tieve",
      size: "42",
      imageURL: require("../assets/images/shoes/shoe1.jpg"),
      price: 25000,
      color: "Gold",
    },
    {
      id: 22,
      productType: "Shoes",
      brand: "XK",
      size: "40",
      imageURL: require("../assets/images/shoes/shoe2.jpg"),
      price: 20000,
      color: "White",
    },
    {
      id: 23,
      productType: "Shoes",
      brand: "Nike",
      size: "38",
      imageURL: require("../assets/images/shoes/shoe3.jpg"),
      price: 20000,
      color: "Red",
    },
    {
      id: 24,
      productType: "Shoes",
      brand: "Louis Vuitton",
      size: "43",
      imageURL: require("../assets/images/shoes/shoe4.jpg"),
      price: 35000,
      color: "White & Blue",
    },
    {
      id: 25,
      productType: "Shoes",
      brand: "Reebok",
      size: "38",
      imageURL: require("../assets/images/shoes/shoe5.jpg"),
      price: 20000,
      color: "White & Black",
    },
    {
      id: 26,
      productType: "Shoes",
      brand: "Reebok",
      size: "40",
      imageURL: require("../assets/images/shoes/shoe6.jpg"),
      price: 24000,
      color: "Black & White",
    },
    {
      id: 27,
      productType: "Shoes",
      brand: "Generic",
      size: "38",
      imageURL: require("../assets/images/shoes/shoe7.jpg"),
      price: 18000,
      color: "White & Light Blue",
    },
    {
      id: 28,
      productType: "Shoes",
      brand: "Nike",
      size: "43",
      imageURL: require("../assets/images/shoes/shoe8.jpg"),
      price: 18000,
      color: "Black",
    },
    {
      id: 29,
      productType: "Shoes",
      brand: "Louis Vuitton",
      size: "40",
      imageURL: require("../assets/images/shoes/shoe9.jpg"),
      price: 45000,
      color: "Green & White",
    },
    {
      id: 30,
      productType: "Shoes",
      brand: "Tieve",
      size: "32",
      imageURL: require("../assets/images/shoes/shoe10.jpg"),
      price: 23000,
      color: "Black & Light Blue",
    },
  ];
  const [newContent, setNewContent] = useState(catalogue);
  const [cartCounter, setCartCounter] = useState(global.usersCart.length)
  global.catalogue = catalogue;

  const searchFilter = (search) => {
        setNewContent(
          catalogue.filter((item) => {
            return item.brand.toLowerCase().includes(search.toLowerCase());
          })
        );
    }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      {views.map(() => {
        return (
          <View key={1}>
            <View>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  paddingRight: 10,
                  paddingTop: 10,
                }}
              >
                Hello! {global.username}
              </Text>
              <View style={Styles.catalogueHeader}>
                <Text style={Styles.catalogueHeaderText}>CONTACT</Text>
                <Text style={Styles.catalogueHeaderText}>MY CART</Text>
                <Text style={Styles.catalogueHeaderText}>PROMO CODE</Text>
                <Text style={Styles.catalogueHeaderText}>HOT SALES</Text>
              </View>
            </View>

            <View style={Styles.searchBarDiv}>
              <View style={Styles.searchBarCartIconWrapper}>
              <Text style={Styles.cartCounter}>
                  {global.usersCart.length}
              </Text>
              <Image
                style={Styles.searchBarCartIcon}
                source={require("../assets/images/carticon.png")}
              />             
              </View>
              <TextInput
                placeholder="Search by brand."
                style={Styles.searchBarInput}
                onChangeText={(text) => {
                  searchFilter(text);
                }}
              />
              <Pressable onPress={() => searchFilter(text)}>
                <Text style={Styles.searchBarText}>Search</Text>
              </Pressable>
            </View>

            <View>
              <ScrollView>
                <View style={Styles.parentItemDiv}>
                  {newContent.map((item) => {
                      return ItemDisplayBuild(item, setCartCounter);
                    })}
                </View>
              </ScrollView>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  HomeView: {},
  catalogueHeader: {
    display: "flex",
    flexDirection: "row",
    padding: 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    justifyContent: "center",
  },
  catalogueHeaderText: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
    borderRightWidth: 5,
    borderRightColor: "black",
    width: "30%",
  },
  searchBarDiv: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 2,
  },
  searchBarCartIcon: {
    width: global.clickedCart? 40 : 30,
    height: global.clickedCart? 40 : 30,
    marginRight: 10,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "orange",
    position: "absolute",
    top: 0,
    right: 2,
  },
  cartCounter: {
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: 12,
    position: "relative",
    top: 8,
    zIndex: 1,
    padding: 2,
    borderWidth: 1,
    borderRadius: 100,
    width: 25,
    height: 25,
    backgroundColor: "black"

  },
  searchBarInput: {
    width: "65%",
    height: 40,
    margin: 0,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 5,
    color: "black",
    padding: 5,
    backgroundColor: "white",
  },
  searchBarText: {
    borderRadius: 5,
    fontWeight: "bold",
    marginLeft: 5,
    backgroundColor: "orange",
    padding: 10,
  },
  parentItemDiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  safeAreaView: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default CatalogueScreen;
