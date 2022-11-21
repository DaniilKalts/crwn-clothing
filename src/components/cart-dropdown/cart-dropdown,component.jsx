
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.select';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const goToCheckOutHandler = () => {
        dispatch(setIsCartOpen(false));
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckOutHandler}>Go to check</Button>
        </CartDropDownContainer>
    );
} 
export default CartDropdown;