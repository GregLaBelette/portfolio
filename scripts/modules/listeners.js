import { swipeRight } from './swipe.js';
import { swipeLeft } from './swipe.js';
import { swipeUp } from './swipe.js';
import { swipeDown } from './swipe.js';

let blocked = false;

const boxCenter = document.getElementById('box-center');
const swipe = new Hammer(boxCenter);
swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });


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
  swipe.on('swipeleft', (e) => {
    if (!blocked) {
      swipeRight();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
  document.getElementById('box-right').addEventListener('click', (e) => {
    if (!blocked) {
      swipeRight();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
  document.querySelector('.shown .header-right').addEventListener('click', (e) => {
    if (!blocked) {
      swipeRight();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
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
  swipe.on('swiperight', (e) => {
    if (!blocked) {
      swipeLeft();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.getElementById('box-left').addEventListener('click', (e) => {
    if (!blocked) {
      swipeLeft();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
  document.querySelector('.shown .header-left').addEventListener('click', (e) => {
    if (!blocked) {
      swipeLeft();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
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
  swipe.on('swipedown', (e) => {
    if (!blocked) {
      swipeUp();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.getElementById('box-up').addEventListener('click', (e) => {
    if (!blocked) {
      swipeUp();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
  document.querySelector('.shown .header-center').addEventListener('click', (e) => {
    if (!blocked) {
      swipeUp();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
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
  swipe.on('swipeup', (e) => {
    if (!blocked) {
      swipeDown();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  });
  document.getElementById('box-down').addEventListener('click', (e) => {
    if (!blocked) {
      swipeDown();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
  document.querySelector('.shown .footer').addEventListener('click', (e) => {
    if (!blocked) {
      swipeDown();
      blocked = true;
      setTimeout(() => {
        blocked = false;
      }, 500);
    };
  })
}


const listeners = () => {
  listenRight();
  listenLeft();
  listenUp();
  listenDown();
}

export { listeners };
