import trashIcon from 'assets/images/icon-delete.svg';
import { Product } from 'types/index';
import {
  Container,
  Thumbnail,
  Title,
  Total,
  TrashIcon,
  UnitPrice,
} from './styles';

type ProductThumbnailProps = {
  product: Product;
  quantity: number;
  onDelete: () => void;
};

export default function ProductThumbnail({
  product,
  quantity,
  onDelete,
}: ProductThumbnailProps) {
  const { title, thumbnail, unitPrice } = product;

  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <div className="me-3">
        <Title>{title}</Title>
        <UnitPrice>
          {'$'}
          {unitPrice}
          {' x '}
          {quantity}{' '}
        </UnitPrice>

        <Total>
          {'$'}
          {unitPrice * quantity}
        </Total>
      </div>
      <TrashIcon
        className="align-self-center"
        src={trashIcon}
        onClick={onDelete}
      />
    </Container>
  );
}
