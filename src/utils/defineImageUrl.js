import o from '../assets/Ellipse1.png';
import x from '../assets/Group1.png';

const defineImageUrl = (player) => {
  if (player === 1) {
    return x;
  } else {
    return o;
  }
};

export default defineImageUrl;
