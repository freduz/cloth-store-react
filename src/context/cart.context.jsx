import { createContext, useContext, useState, useEffect } from 'react'

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
  const [isCartOpen, toggleCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const cartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(cartTotal)
  }, [cartItems])

  useEffect(() => {
    const totalAmount = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(totalAmount)
  }, [cartItems])

  const clearCartItem = (product) => setCartItems(clearItemFromCart(cartItems, product))

  const addItemToCart = (product) => {
    setCartItems(filterAndAddCartItems(cartItems, product))
  }

  const removeItemFromCart = (product) => {
    setCartItems(filterAndRemoveItems(cartItems, product))
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
