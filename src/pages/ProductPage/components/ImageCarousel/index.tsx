import NextIcon from 'assets/icons/CarouselNextControl';
import PrevIcon from 'assets/icons/CarouselPrevControl';
import { StyledCarousel } from './styles';

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <StyledCarousel
      indicators={false}
      nextIcon={<NextIcon />}
      prevIcon={<PrevIcon />}
    >
      {images.map((image, i) => (
        <StyledCarousel.Item key={i}>
          <img
            src={image}
            alt={`carousel-image-${i}`}
            style={{
              width: '375px',
              height: '300px',
              objectFit: 'cover',
            }}
          />
        </StyledCarousel.Item>
      ))}
    </StyledCarousel>
  );
}
