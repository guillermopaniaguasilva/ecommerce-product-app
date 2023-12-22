import MiniCartIcon from 'assets/icons/MiniCartIcon';
import thumbnail1 from 'assets/images/image-product-1-thumbnail.jpg';
import image1 from 'assets/images/image-product-1.jpg';
import thumbnail2 from 'assets/images/image-product-2-thumbnail.jpg';
import image2 from 'assets/images/image-product-2.jpg';
import thumbnail3 from 'assets/images/image-product-3-thumbnail.jpg';
import image3 from 'assets/images/image-product-3.jpg';
import thumbnail4 from 'assets/images/image-product-4-thumbnail.jpg';
import image4 from 'assets/images/image-product-4.jpg';
import { useState } from 'react';
import { Product } from 'types/index';
import Button from 'ui-library/Button';
import QuantityInput from 'ui-library/QuantityInput';
import { useCartStore } from '../store';
import ImageCarousel from './components/ImageCarousel';
import {
  CompanyHeading,
  Description,
  DiscountPill,
  DiscountValue,
  FullPrice,
  StyledMain,
  Title,
  UnitPrice,
  Wrapper,
} from './styles';

// Data
const product: Product = {
  title: 'Fall Limited Edition Sneakers',
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  unitPrice: 250,
  thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
  images: [image1, image2, image3, image4],
};
const discountPercentage = 50;
const appliedDiscountUnitPrice =
  product.unitPrice - (product.unitPrice * discountPercentage) / 100;
// end of Data

export default function ProductPage() {
  const [quantity, setQuantity] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <StyledMain>
      <ImageCarousel images={product.images} />
      <Wrapper>
        <CompanyHeading>sneaker company</CompanyHeading>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <div className="d-flex align-items-center">
          <UnitPrice>{`$${appliedDiscountUnitPrice}.00`}</UnitPrice>
          <DiscountPill className="d-flex justify-content-center align-items-center">
            <DiscountValue>{`${discountPercentage}%`}</DiscountValue>
          </DiscountPill>
          <FullPrice className="ms-auto">{`$${product.unitPrice}.00`}</FullPrice>
        </div>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <Button
          onClick={() => addToCart(product, quantity)}
          withShadow
          icon={<MiniCartIcon width={18} height={16} color="#ffffff" />}
        >
          Add to cart
        </Button>
      </Wrapper>
    </StyledMain>
  );
}
