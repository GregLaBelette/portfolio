import { goTo, swipeRight, swipeLeft, swipeUp, swipeDown } from './navigation.js';

let blocked = false;

const boxCenter = document.getElementById('box-center');
const swipe = new Hammer(boxCenter);
swipe.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// menu navigation listeners

document.getElementById('menu-about').addEventListener('click', (e) => {
  goTo('hello');
});
document.getElementById('menu-projects').addEventListener('click', (e) => {
  goTo('memomix');
});
document.getElementById('menu-stack').addEventListener('click', (e) => {
  goTo('back-end');
});
document.getElementById('menu-contact').addEventListener('click', (e) => {
  goTo('contact');
});

// directions navigation listeners

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
  document.querySelectorAll('.header-right').forEach((elt) => {
    elt.addEventListener('click', (e) => {
      if (!blocked) {
        swipeRight();
        blocked = true;
        setTimeout(() => {
          blocked = false;
        }, 500);
      };
    })
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
  document.querySelectorAll('.header-left').forEach((elt) => {
    elt.addEventListener('click', (e) => {
      if (!blocked) {
        swipeLeft();
        blocked = true;
        setTimeout(() => {
          blocked = false;
        }, 500);
      };
    })
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
  document.querySelectorAll('.header-center').forEach((elt) => {
    elt.addEventListener('click', (e) => {
      if (!blocked) {
        swipeUp();
        blocked = true;
        setTimeout(() => {
          blocked = false;
        }, 500);
      };
    })
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
  document.querySelectorAll('.footer').forEach((elt) => {
    elt.addEventListener('click', (e) => {
      if (!blocked) {
        swipeDown();
        blocked = true;
        setTimeout(() => {
          blocked = false;
        }, 500);
      };
    })
  })
}


const listeners = () => {
  listenRight();
  listenLeft();
  listenUp();
  listenDown();
}

export { listeners };
