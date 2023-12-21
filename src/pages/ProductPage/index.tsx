import thumbnail1 from 'assets/images/image-product-1-thumbnail.jpg';
import image1 from 'assets/images/image-product-1.jpg';
import thumbnail2 from 'assets/images/image-product-2-thumbnail.jpg';
import image2 from 'assets/images/image-product-2.jpg';
import thumbnail3 from 'assets/images/image-product-3-thumbnail.jpg';
import image3 from 'assets/images/image-product-3.jpg';
import thumbnail4 from 'assets/images/image-product-4-thumbnail.jpg';
import image4 from 'assets/images/image-product-4.jpg';
import { Product } from 'types/index';
import ImageCarousel from './components/ImageCarousel';
import { StyledMain } from './styles';

const product: Product = {
  title: 'Fall Limited Edition Sneakers',
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  unitPrice: 125,
  thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
  images: [image1, image2, image3, image4],
};

export default function ProductPage() {
  return (
    <StyledMain>
      <ImageCarousel images={product.images} />
    </StyledMain>
  );
}
