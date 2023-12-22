import { Product, ProductInCart } from 'types/index';
import { StoreApi, UseBoundStore, create } from 'zustand';

interface CartState {
  cart: ProductInCart[];
  addToCart: (product: Product, quantity: number) => void;
  deleteFromCart: (_: Product) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  addToCart: (product: Product, quantity: number) =>
    set((state) => ({ cart: [...state.cart, { product, quantity }] })),
  deleteFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter(
        (productInCart) => productInCart.product.title !== product.title
      ),
    })),
}));

interface CartWindow extends Window {
  cartStore?: UseBoundStore<StoreApi<CartState>>;
}

(window as CartWindow).cartStore = useCartStore;
