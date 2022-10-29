import { Fragment } from "react";
import { Outlet, Link, NavLink } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <NavLink className="logo-container" to={'/'}>
                <CrwnLogo className="logo" />
            </NavLink>
            <div className="nav-links-container"> 
                <NavLink className="nav-link" to={'/shop'}>Shop</NavLink>
                <NavLink className="nav-link" to={'/authentication'}>Sign In</NavLink>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;