import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export const StyledCarousel = styled(Carousel)`
  .carousel-control-prev,
  .carousel-control-next {
    opacity: 1;
  }

  .carousel-control-next-icon {
    background-image: none; /* Remove default icon */

    &::before {
      content: none; /* Remove default content */
    }
  }

  .carousel-control-prev-icon {
    background-image: none; /* Remove default icon */

    &::before {
      content: none; /* Remove default content */
    }
  }
`;

export const Image = styled.img``;
