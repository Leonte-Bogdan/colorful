import { keyframes } from "@emotion/css";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideInAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateX(-100%);
    opacity: 1;
  }
`;
const slideOutAnimation = keyframes`
from {
  transform: translateX(-100%);
  opacity: 1;
  
}
to {
  transform: translateX(0%);
  opacity: 0;
}
`;

export { fadeIn, slideInAnimation, slideOutAnimation };
