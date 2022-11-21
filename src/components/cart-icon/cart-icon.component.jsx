

import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.select.js';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx';

import './cart-icon.styles.jsx';

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;