import { createContext, ReactNode, useContext, useState } from "react";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function UseShoppingCart() {
  return useContext(ShoppingCartContext);
}

type CartItem = {
  id: number;

  //   quantity: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  addToCart: (id: number) => void;
  // removeFromCart: (id: number) => void;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (id: number) => {
    if (cartItems === null) {
      setCartItems([...cartItems, { id }]);
    }
    function addToCart(id: number) {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.id === id) == null) {
          return [...currentItems, { id }];
        } else {
          return currentItems;
        }
      });
    }
    function removeFromCart(id: number) {
      setCartItems((currentItems) => {
        return currentItems.filter((item) => item.id !== id);
      });
    }

    return (
      <ShoppingCartContext.Provider value={{ addToCart }}>
        {children}
      </ShoppingCartContext.Provider>
    );
  };
}

export default ShoppingCartProvider;
