const ACTION = require('../constants');

// Define action methods


export const receiveProduct = (data) => ({
  type: ACTION.RECEIVE_DATA,
  payload: {
    destination: data
  }
})

// Set currently selected product variation
export const selectProduct = (index) => ({

  type: ACTION.SELECT_PRODUCT,
  payload: {
    index: index
  }
})

// Add item to cart
export const addToCart = (id, name) => ({

  type: ACTION.CART_ADD,
  payload: {
    id: id,
    name: name

  }
})

// Remove item from cart
export const removeFromCart = (name) => ({

  type: ACTION.CART_REMOVE,
  payload: {
    name: name
  }
})

// Update cart visibility status
export const updateCartVisible = (cartVisible) => ({

  type: ACTIOIN.CART_VISIBLE,
  payload: {
    cartVisible: cartVisible
  }
})

//export const  fetch = (query) => ({

//      type: ACTION.CART_FETCH,
//	payload:{
//      query: query
//  }
//}),

export const hotsearch = (query) => ({

  type: ACTION.DESTINATIONHOT_SEARCH,
  payload: {
    query: query
  }
})

export const hotsearch_fetch = (data) => ({

  type: ACTION.DESTINATIONHOT_SEARCHFETCH,
  payload: {
    suggestion: data
  }
})

export const receiveMap = (data) => ({

  type: ACTION.RECEIVEMAP_DATA,
  payload: {
    map: data
  }
})

//export const receiveProduct = (data) => ({

 //     type: ACTION.RECEIVEPRODUCT_DATA,
//	payload :{
  //     : data
    //}
  //})

