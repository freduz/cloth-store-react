import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

import {GetCartContext} from '../../context/cart.context'

import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'


const CartDropdown = () => {

  const navigate = useNavigate()

  const {cartItems} = GetCartContext();

  const checkOutRedirect  = () => navigate('/checkout')

    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items' >
        {
          cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )
        }

        </div>
        <Button onClick={checkOutRedirect}>CHECK OUT</Button>
      </div>
    )

}


export default CartDropdown