import { Fragment } from "react";
import { Outlet } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown,component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from '../../store/cart/cart.select'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Link, LogoContainer, NavigationContainer, NavLinks } from "./navigation.styles";
import { useSelector } from "react-redux";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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