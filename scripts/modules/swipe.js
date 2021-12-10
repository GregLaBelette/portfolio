let current = document.querySelector('.shown');
let next
let right = current.querySelector('.right').value
let left = current.querySelector('.left').value
let up = current.querySelector('.up').value
let down = current.querySelector('.down').value

const updateArrows = () => {
  if (right != '') {
    document.getElementById('box-right').style.opacity = ('0.8');
    document.getElementById('box-right').classList.add('blink');
  } else {
    document.getElementById('box-right').style.opacity = ('0');
    document.getElementById('box-right').classList.remove('blink');
  }
  if (left != '') {
    document.getElementById('box-left').style.opacity = ('0.8');
    document.getElementById('box-left').classList.add('blink');
  } else {
    document.getElementById('box-left').style.opacity = ('0');
    document.getElementById('box-left').classList.remove('blink');
  }
  if (up != '') {
    document.getElementById('box-up').style.opacity = ('0.8');
    document.getElementById('box-up').classList.add('blink');
  } else {
    document.getElementById('box-up').style.opacity = ('0');
    document.getElementById('box-up').classList.remove('blink');
  }
  if (down != '') {
    document.getElementById('box-down').style.opacity = ('0.8');
    document.getElementById('box-down').classList.add('blink');
  } else {
    document.getElementById('box-down').style.opacity = ('0');
    document.getElementById('box-down').classList.remove('blink');
  }
}

updateArrows();

const reset = () => {
  next.classList.remove('set-left');
  next.classList.remove('set-right');
  next.classList.remove('set-up');
  next.classList.remove('set-down');

  next.classList.remove('move-left');
  next.classList.remove('move-right');
  next.classList.remove('move-up');
  next.classList.remove('move-down');

  current = document.querySelector('.shown');
  right = current.querySelector('.right').value;
  left = current.querySelector('.left').value;
  up = current.querySelector('.up').value;
  down = current.querySelector('.down').value;

  updateArrows();
}

const swipeRight = () => {
  if (right != '') {
    next = document.getElementById(right);

    current.classList.remove('shown');
    current.classList.add('hidden');

    next.classList.add('set-right');
    next.classList.remove('hidden');
    next.classList.add('shown');
    next.classList.add('move-left');

    setTimeout(() => {
      reset();
    }, 500);
  }
}

const swipeLeft = () => {
  if (left != '') {
    next = document.getElementById(left);

    current.classList.remove('shown');
    current.classList.add('hidden');

    next.classList.add('set-left');
    next.classList.remove('hidden');
    next.classList.add('shown');
    next.classList.add('move-right');

    setTimeout(() => {
      reset();
    }, 500);
  }
}

const swipeUp = () => {
  if (up != '') {
    next = document.getElementById(up);

    current.classList.remove('shown');
    current.classList.add('hidden');

    next.classList.add('set-up');
    next.classList.remove('hidden');
    next.classList.add('shown');
    next.classList.add('move-down');

    setTimeout(() => {
      reset();
    }, 500);
  }
}

const swipeDown = () => {
  if (down != '') {
    next = document.getElementById(down);

    current.classList.remove('shown');
    current.classList.add('hidden');

    next.classList.add('set-down');
    next.classList.remove('hidden');
    next.classList.add('shown');
    next.classList.add('move-up');

    setTimeout(() => {
      reset();
    }, 500);
  }
}

export { swipeRight, swipeLeft, swipeUp, swipeDown }
