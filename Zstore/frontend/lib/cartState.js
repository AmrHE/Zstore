import { useContext, createContext, useState } from 'react';

const LocalStateContext = createContext();

const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom state provider where we will store data (state, functionality updaters) in here and we can access it every where via consumer

  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

// Custom hook to access the cart local state (custom state consumer)
function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
