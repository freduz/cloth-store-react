import { createContext, useContext, useState, useEffect, useReducer } from 'react'

const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearCartItem: () => null,
  cartCount: 0,
  cartTotal: 0
})

const initialState = {
  isCartOpen:false,
  cartItems:[],
  cartCount:0,
  cartTotal:0
}

const CART_ACTIONS = {
  TOGGLE_CART:'TOGGLE_CART',
  ADD_CART_ITEMS:'ADD_CART_ITEMS',
  SET_CART_COUNT:'SET_CART_COUNT',
  SET_CART_TOTAL:'SET_CART_TOTAL'
}

const cartReducer = (_state, action) => {
  const { type, payload } = action
  switch(type) {
    case CART_ACTIONS.TOGGLE_CART:
      return{
        ..._state,
        isCartOpen:!_state.isCartOpen
      }
    case CART_ACTIONS.ADD_CART_ITEMS:
      return {
        ..._state,
        ...payload
      }

  }
}

const findExistingProduct = (cartItems, product) => {
  return cartItems.find(cartItem => cartItem.id === product.id)
}

const filterAndAddCartItems = (cartItems, product) => {
  const productFound = findExistingProduct(cartItems, product)

  if (productFound) {
    return cartItems.map(cartItem => {
      return (cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    })
  }

  return [...cartItems, { ...product, quantity: 1 }]
}

const clearItemFromCart = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id)
}

const filterAndRemoveItems = (cartItems, product) => {
  const productFound = findExistingProduct(cartItems, product)
  if (productFound.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
  }
  if (productFound) {
    return cartItems.map(cartItem => {
      return cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
  }
}

export const CartProvider = ({ children }) => {

  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, initialState)

  const updateCartItems = (cartItems) => {
    const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const cartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    dispatch({ type:CART_ACTIONS.ADD_CART_ITEMS, payload:{ cartItems, cartTotal, cartCount } })
  }

  const clearCartItem = (product) => {
    const items = clearItemFromCart(cartItems, product)
    updateCartItems(items)
  }

  const addItemToCart = (product) => {
    const items = filterAndAddCartItems(cartItems, product)
    updateCartItems(items)
  }

  const toggleCart = (bool) => {
    dispatch({ type:CART_ACTIONS.TOGGLE_CART, payload:bool })
  }

  const removeItemFromCart = (product) => {
    const items = filterAndRemoveItems(cartItems, product)
    updateCartItems(items)
  }

  const value = {
    isCartOpen,
    toggleCart,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearCartItem,
    cartTotal
  }
  return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export const GetCartContext = () => useContext(CartContext)
