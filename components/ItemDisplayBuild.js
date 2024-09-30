import { React } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import saveCartItem from "../assets/utility/saveCartItem";

//A component for dynamically building the ad/item card
const ItemDisplayBuild = (item, setCartCounter) => {
  return (
    <View style={Styles.itemSection} key={item.id}>
      <Image
        source= {item.imageURL}
        style ={Styles.itemSectionImage}
        
      />
      <Text style={Styles.itemSectionText}>Brand: {item.brand}</Text>

      <Text style={Styles.itemSectionText}>Size: {item.size}</Text>

      <Text style={Styles.itemSectionText}>Color: {item.color}</Text>
      <Text style={Styles.itemSectionPriceText}>
        N{item.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
      <TouchableOpacity
        onPress={() => {saveCartItem(item.id); setCartCounter(global.usersCart.length)}}
       
      >
        <Text
          style={{
          fontSize: 12,
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 3,
          width: 100,
          borderRadius: 5,
          padding: 3,
          backgroundColor: "orange"
          }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  itemSection: {
    width: "30%",
    height: 180,
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#F0F0F0",
    padding: 5,
    paddingBottom: 10,
  },
  itemSectionText: {
    width: "100%",
    color: "black",
    fontSize: 9
  },
  itemSectionPriceText: {
    width: "100%",
    color: "black",
    fontWeight: "bold",
    fontSize: 14
  },
  itemSectionImage: {
    width: "50%",
    height: "50%",
  },
});
export default ItemDisplayBuild;
