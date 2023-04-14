import './product.styles.scss'
import Button from '../../button/button.component'
import { GetCartContext } from '../../../context/cart.context'

const Product = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = GetCartContext()

  const addItemToBasket = () => addItemToCart(product)

  return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addItemToBasket}>Add to card</Button>
      </div>
  )
}

export default Product
