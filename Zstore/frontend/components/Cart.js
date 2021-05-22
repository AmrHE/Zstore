import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import { useUser } from './User';
import CartItem from './CartItem';

const Cart = () => {
  const user = useUser();
  console.log({ user });
  if (!user) return null;
  return (
    <CartStyles open>
      <header>
        <Supreme>{user.name}'s Cart</Supreme>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
    </CartStyles>
  );
};

export default Cart;
