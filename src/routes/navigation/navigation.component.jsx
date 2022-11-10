import { useContext, Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown,component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Link, LogoContainer, NavigationContainer, NavLinks } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to={'/'}>
                <CrwnLogo className="logo" />
            </LogoContainer>
            <NavLinks> 
                <Link to={'/shop'}>Shop</Link>
                {
                 currentUser ? (
                  <Link as='span' onClick={ signOutUser }>Sign Out</Link>
                 ) : (
                  <Link to={'/authentication'}>Sign In</Link>
                 )
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;