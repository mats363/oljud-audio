import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "../../models/IProduct";

interface ShoppingCart {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useShoppingCart = create(
  persist<ShoppingCart>(
    (set, get) => ({
      cartItems: [],

      addToCart: (product: IProduct) => {
        set((prev) => {
          const exists = prev.cartItems.find(
            (cartItem) => cartItem.id === product.id
          );
          if (exists) return prev;

          return {
            ...prev,
            cartItems: [...prev.cartItems, product],
          };
        });
      },

      removeFromCart: (productId: number) => {
        set((prev) => ({
          ...prev,
          cartItems: prev.cartItems.filter(
            (cartItem) => cartItem.id !== productId
          ),
        }));

        set((prev) => {
          return {
            ...prev,
          };
        });
      },

      clearCart: () => {
        set((prev) => ({
          ...prev,
          cartItems: [],
        }));
      },
    }),

    { name: "shopping-cart" }
  )
);
