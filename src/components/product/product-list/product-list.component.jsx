import {GetProductContext} from '../../../context/product.context'
import Product from '../product/product.component'

const ProductList = () => {

    const {products} = GetProductContext();
    console.log(products);

    return(
        <>

            {
                products.map(product =>(
                    
                    <Product product={product} key={product.id}/>
                ))
            }

        </>
    )
}

export default ProductList;