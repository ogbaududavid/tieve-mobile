//A function for deleting items from the user's cart
const deleteCartItem = (uniqueID) => {
  global.usersCart = global.usersCart.filter((item) => item.uniqueID != uniqueID)
    
}

export default deleteCartItem