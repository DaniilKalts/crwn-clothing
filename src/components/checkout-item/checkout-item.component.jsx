import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.jsx';
import { CheckoutItemContainer, ImageContainer, Name, Price, Quantity, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ( { cartItem } ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </Quantity>
            <Price>{price * quantity}$</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;