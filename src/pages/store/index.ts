import { Product } from 'types/index';
import { StoreApi, UseBoundStore, create } from 'zustand';

interface CartState {
  cart: Product[];
  addToCart: (_: Product) => void;
  deleteFromCart: (_: Product) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  deleteFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter(
        (productInCart) => productInCart.title !== product.title
      ),
    })),
}));

interface CartWindow extends Window {
  cartStore?: UseBoundStore<StoreApi<CartState>>;
}

(window as CartWindow).cartStore = useCartStore;
