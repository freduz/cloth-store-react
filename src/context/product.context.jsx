import { createContext, useState, useContext, useEffect } from 'react'
import { getCategoriesDocuments } from '../utils/firebase.util'

export const ProductContext = createContext({
  products: []
})

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getCategoriesDocuments()
      setProducts(products)
    }

    loadProducts()
  }, [])
  const value = { products, setProducts }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const GetProductContext = () => useContext(ProductContext)
