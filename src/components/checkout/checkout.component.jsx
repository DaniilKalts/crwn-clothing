

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.select';
import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout.styles.jsx';
import { CheckOutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        
        <CheckOutContainer>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock className="header-block">
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) =>            
              <CheckoutItem  key={cartItem.id} cartItem={cartItem} />
          )}
          <Total>Total: {cartTotal}$</Total> 
        </CheckOutContainer>
    );
}
export default Checkout;
