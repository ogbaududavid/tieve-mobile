import { StyleSheet } from "react-native";
import storage from "../../components/storage";

//A function for loading the items in the user's cart
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
