import { swipeRight } from './swipe.js';
import { swipeLeft } from './swipe.js';
// import { swipeUp } from './swipe.js';
// import { swipeDown } from './swipe.js';

const listenRight = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
      swipeRight();
    };
  });
}
const listenLeft = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
      swipeLeft();
    };
  });
}
const listenUp = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp') {
      swipeUp();
    };
  });
}
const listenDown = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown') {
      swipeDown();
    };
  });
}

const listeners = () => {
  listenRight();
  listenLeft();
  listenUp();
  listenDown();
}

export { listeners };
