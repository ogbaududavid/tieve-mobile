import storage from "../../components/storage";

//A function for saving items to the user's cart
const saveCartItem = (username, item=[], CartItems = []) => {
   if(item.length > 0 || Object.keys(item).length > 0){
   
  storage.save({
    key: username + "'s Cart",
    data: {
      myCartItems: [...CartItems, item ],
    },
    expires: null,
  }) 
  alert(`Your item : ${item.brand} ${item.productType} has been successfully added to your cart`)
 
  
   } else {

  storage.save({
    key: username + "'s Cart",
    data: {
      myCartItems: CartItems
    },
    expires: null,
  })
}
}


export default saveCartItem;
