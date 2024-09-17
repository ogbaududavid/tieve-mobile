import React from 'react'

const deleteCartItem = (uniqueID) => {
  global.usersCart = global.usersCart.filter((item) => item.uniqueID != uniqueID)
    
}

export default deleteCartItem