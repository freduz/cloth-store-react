import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';

import './navigation.styles.scss';
import { logoutUser } from '../../utils/firebase.util';

const Navigation = () => {

  const {currentUser,setCurrentUser} = useContext(UserContext);

  const logout = async () => {
       await logoutUser()
       setCurrentUser(null)
      
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            (currentUser) ? (
              <Link className='nav-link' onClick={logout}>
              SIGN OUT
            </Link>
            ) : (
              <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
            )
          } 
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;