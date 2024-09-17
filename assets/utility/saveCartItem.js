const saveCartItem = (itemId) => {
  const item = global.catalogue.filter((item) => { return item.id == itemId })
  let newItemObject = item[0]
  newItemObject["date"] = new Date();
  newItemObject["uniqueID"] = global.usersCart.length + 1
  global.usersCart =  [...global.usersCart, newItemObject ]
   
  // alert(`Your item has been successfully added to your cart`)
 
  
   } 


export default saveCartItem;
