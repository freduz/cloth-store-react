import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetProductContext } from '../../context/product.context'
import Product from '../product/product/product.component'

import './product-category.styles.scss'

const ProductCategory = () => {
  const { category } = useParams()
  const [productsList, setProductList] = useState([])
  const { products } = GetProductContext()

  useEffect(() => {
    setProductList(products[category])
  }, [category, products])

  return (
        <div className="product-container">
        {
           productsList && productsList.map((product) => (
            <Product key={product.id} product={product} />
           ))
        }
        </div>
  )
}

export default ProductCategory
