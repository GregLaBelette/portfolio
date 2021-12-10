import { swipeRight } from './swipe.js';
import { swipeLeft } from './swipe.js';
import { swipeUp } from './swipe.js';
import { swipeDown } from './swipe.js';

let blocked = false;

const listenRight = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight' && !blocked) {
      swipeRight();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.addEventListener('swiped-left', (e) => {
    if (!blocked) {
      swipeRight();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
}

const listenLeft = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' && !blocked) {
      swipeLeft();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.addEventListener('swiped-right', (e) => {
    if (!blocked) {
      swipeLeft();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
}
const listenUp = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' && !blocked) {
      swipeUp();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.addEventListener('swiped-down', (e) => {
    if (!blocked) {
      swipeUp();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
}
const listenDown = () => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown' && !blocked) {
      swipeDown();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.addEventListener('swiped-down', (e) => {
    if (!blocked) {
      swipeDown();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
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
