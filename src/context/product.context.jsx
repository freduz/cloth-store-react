import { createContext, useState,useContext } from "react";

import PRODUCTS_DATA from '../product-data.json'

export const ProductContext = createContext({
    products:[]
})

export const ProductProvider = ({children}) => {
    const [products,setProducts] = useState(PRODUCTS_DATA);
    const value = {products,setProducts}
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}


export const GetProductContext = ()  => useContext(ProductContext);