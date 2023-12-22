import Minus from 'assets/icons/Minus';
import Plus from 'assets/icons/Plus';
import { Container } from './styles';

type QuantityInputProps = {
  quantity: number;
  setQuantity: (_: number) => void;
};

export default function QuantityInput({
  quantity,
  setQuantity,
}: QuantityInputProps) {
  return (
    <Container className="d-flex justify-content-between align-items-center">
      <Minus onClick={() => setQuantity(quantity - 1)} />
      {quantity}
      <Plus onClick={() => setQuantity(quantity + 1)} />
    </Container>
  );
}
