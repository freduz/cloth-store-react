import {ReactComponent as ShoppingICon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

import {GetCartContext} from '../../context/cart.context'

const CartIcon = () => {

    const {isCartOpen,toggleCart,cartCount} = GetCartContext();

    const toggleCartArea = () => toggleCart(!isCartOpen)



    return (
        <div className='cart-icon-container' onClick={toggleCartArea}>
    <ShoppingICon className='shopping-icon'/>
    <span className='item-count'>{cartCount}</span>
    </div>
    )
}


export default CartIcon;