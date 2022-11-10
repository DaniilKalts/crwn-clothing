
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.jsx';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

    // const count = cartItems.reduce((accumulator, value) => {
    //     return accumulator + value.quantity;
    // }, 0)

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;