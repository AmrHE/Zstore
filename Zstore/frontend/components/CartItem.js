import styled from 'styled-components';
import formatPrice from '../lib/formatPrice';
import RemoveFromCart from './RemoveFromCart';

const CartItem = ({ cartItem }) => {
  if (!cartItem.product) return null;

  return (
    <CartItemStyles>
      <img
        width="100"
        src={cartItem.product.photo.image.publicUrlTransformed}
        alt={cartItem.product.name}
      />
      <div>
        <h3>{cartItem.product.name}</h3>
        <p>
          {formatPrice(cartItem.product.price)} &times; {cartItem.quantity} ={' '}
          <em>{formatPrice(cartItem.product.price * cartItem.quantity)}</em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};
export default CartItem;

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGray);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }

  h3,
  p {
    margin: 0;
  }
`;
