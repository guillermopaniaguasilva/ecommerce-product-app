import MiniCartIcon from 'assets/icons/MiniCartIcon';
import { useState } from 'react';
import Button from 'ui-library/Button';
import ProductThumbnail from 'ui-library/ProductThumbnail';
import { useCartStore } from '../../../../pages/store';
import {
  Badge,
  Container,
  EmptyMessage,
  Heading,
  ProductsContainer,
} from './styles';

export default function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);

  const toggleMiniCart = () => setIsOpen(!isOpen);

  const emptyCart = (
    <Container className="d-flex flex-column">
      <Heading className="border-bottom">Cart</Heading>
      <EmptyMessage className="align-self-center">
        Your cart is empty.
      </EmptyMessage>
    </Container>
  );

  const cartWithItems = (
    <Container className="d-flex flex-column">
      <Heading className="border-bottom">Cart</Heading>
      <ProductsContainer>
        {cart.map((productInCart) => (
          <ProductThumbnail
            product={productInCart.product}
            onDelete={deleteFromCart}
            quantity={productInCart.quantity}
          />
        ))}
        <Button onClick={() => undefined} style={{ marginTop: '24px' }}>
          Checkout
        </Button>
      </ProductsContainer>
    </Container>
  );

  return (
    <>
      <span
        style={{ cursor: 'pointer' }}
        className="position-relative"
        onClick={toggleMiniCart}
      >
        <MiniCartIcon width={22} height={20} />
        <Badge className="position-absolute top-0 start-100 translate-middle badge d-flex align-items-center">
          {cart.length}
        </Badge>
        {isOpen && (cart.length === 0 ? emptyCart : cartWithItems)}
      </span>
    </>
  );
}
