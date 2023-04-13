import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';

import {LogoContainer, NavigationContainer, NavLink, NavLinks} from './navigation.styles';
import { logoutUser } from '../../utils/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {GetCartContext} from '../../context/cart.context'

const Navigation = () => {

  const {currentUser,setCurrentUser} = useContext(UserContext);
  const {isCartOpen} = GetCartContext();

  const logout = async () => {
       await logoutUser()
       setCurrentUser(null)
      
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            (currentUser) ? (
              <NavLink  onClick={logout}>
              SIGN OUT
            </NavLink>
            ) : (
              <NavLink to='/auth'>
              SIGN IN
            </NavLink>
            )
          } 
          <CartIcon/>
        </NavLinks>
          {
           isCartOpen &&  <CartDropdown/>
          }
       
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;