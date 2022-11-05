import { useContext, Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown,component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
            <NavLink className="logo-container" to={'/'}>
                <CrwnLogo className="logo" />
            </NavLink>
            <div className="nav-links-container"> 
                <NavLink className="nav-link" to={'/shop'}>Shop</NavLink>
                {
                 currentUser ? (
                  <span className="nav-link" onClick={ signOutUser }>Sign Out</span>
                 ) : (
                  <NavLink className="nav-link" to={'/authentication'}>Sign In</NavLink>
                 )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;