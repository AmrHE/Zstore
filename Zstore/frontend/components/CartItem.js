import styled from 'styled-components';
import formatPrice from '../lib/formatPrice';

const CartItem = ({ cartItem }) => {
  console.log('');
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
          {formatPrice(cartItem.product.price)} x {cartItem.quantity} ={' '}
          {formatPrice(cartItem.product.price * cartItem.quantity)}
        </p>
      </div>
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
