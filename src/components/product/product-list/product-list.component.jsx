import { Fragment } from 'react';
import {GetProductContext} from '../../../context/product.context'
import Product from '../product/product.component'
import CategoryPreview from '../../category-preview/category-preview.component';
import './product-list.styles.scss'

const ProductList = () => {

    const {products} = GetProductContext();
    console.log(products);

    return(
        <div>
            {
               Object.keys(products).map((title) =>{
                const productsData = products[title];
                return (
                    <CategoryPreview key={title} title={title} products={productsData}/>
                )
               })
            }
        </div>
    )
}

export default ProductList;